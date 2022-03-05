import type { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import type { ReportType } from '@components/api/reports-utils'

//* Importing page components
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import { MainReportTitle } from '@p-styles/reports/index'
import PDFViewer from '@p-components/ReportViewer'


//* Importing pages paths and data
import { getReports, getOnlyReport } from '@components/api/reports-utils'
import Link from 'next/link'

export const getStaticPaths: GetStaticPaths = async () => {
   const reports = await getReports()

   if(!reports) return {
      paths: [
         {
            params: {
               report: 'no-reports'
            }
         }
      ],
      fallback: false
   }
   
   return {
      paths: reports.map(report => ({
         params: { report: report.id },
      })),
      fallback: false,
   }
}

export const getStaticProps: GetStaticProps<{
   report: ReportType,
}> = async ({ params }) => {
   if(!params || !params.report || params.report === 'no-reports') return { 
      notFound: true 
   }

   const currentReport = await getOnlyReport(params.report as string)

   if(!currentReport || !currentReport.source) return {
      notFound: true
   }

   return {
      props: { 
         report: currentReport
      },
      revalidate: 302400,
   }
}

const Report = ({report}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const SeoTitle = `Relatório: ${report.title ? report.title : report.source
      .split('/')[report.source.split('/').length - 1]}`
   const SeoDescription = `Deixamos nossos relatórios disponíveis para você acessar e visualizar. Veja aqui
   o relatório ${report.title} postado em ${new Date(report.date).toLocaleDateString('pt-BR')}`
   const SeoKeywords = ['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro', 'Trimestral', 'Relatório', `${report.title ? report.title : report.source
      .split('/')[report.source.split('/').length - 1]}`]
   const SeoCanonical =  process.env.NEXT_PUBLIC_SITE_URL + `/reports/${report.id}`

   return (
      <>
         <SEOComp 
         title={SeoTitle}
         description={SeoDescription}
         canonical={SeoCanonical}
         keywords={SeoKeywords}
         locale='pt-BR'
         openGraph={{
            title: `AlpesCap - ${SeoTitle}`,
            description: SeoDescription,
            url: SeoCanonical,
            image: {
               url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
               width: 1500,
               height: 1500,
               alt: 'AlpesCap Logo',
               type: 'image/png'
            },
            article: {
               publishedTime: new Date(report.date).toISOString(),
               author: 'AlpesCap',
               tag: SeoKeywords,
            },
         }}
         twitter={{
            url: SeoCanonical,
            title: `AlpesCap - ${SeoTitle}`,
            description: SeoDescription,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`
         }}
         robotsFollow={true} />
         <Container style={{paddingTop: '10rem'}}>
            <MainReportTitle>
               <span>
                  Relatório: {report.title ? report.title : report.source
                     .split('/')[report.source.split('/').length - 1]}
               </span>
               <Link href='/reports' passHref>
                  <a>Ver lista de todos</a>
               </Link>
            </MainReportTitle>
            <sub>
               <PDFViewer 
               title={report.title} 
               PDFsrc={report.source} 
               scrType={report.sourceType} />
            </sub>
         </Container>
      </>
   )
}

export default Report