import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRef } from 'react'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import { MainReportTitle, ReportsList } from '@p-styles/reports/index'
import PDFViewer from '@p-components/ReportViewer'

//* Importing static assets
import HeaderImg from '@p-images/report/header.jpg'

//* Importing page data
//? using temporally sample data from static resource
import { getReports, getOnlyReport } from '@components/api/reports-utils'
import type { ReportType } from '@components/api/reports-utils'

export const getStaticProps: GetStaticProps<{
   mostRecentReport: ReportType, 
   reports: Omit<ReportType, | 'source' | 'sourceType'>[]
}> = async () => {
   const reports = await getReports()

   if(!reports) return {
      notFound: true
   }

   const mostRecentReport = await getOnlyReport(reports[0].id)

   return {
      props: {
         mostRecentReport: mostRecentReport!,
         reports: reports
      },
      revalidate: 302400
   } 
}

const Report = ({mostRecentReport, reports}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const SeoTitle = 'Lista de relatórios'
   const SeoDescription = 'Nós sempre publicamos nossos relatórios para você acessar e visualizar. Veja aqui a lista de todos, assim como o mais recente deles.'
   const SeoKeywords = ['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro', 'Trimestral', 'Relatório']
   const SeoCanonical =  process.env.NEXT_PUBLIC_SITE_URL + '/reports'

   //* Defining a ref to add scrollTo functionality/animation
   const reportsListRef = useRef<HTMLDivElement>(null)
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
         }}
         twitter={{
            url: SeoCanonical,
            title: `AlpesCap - ${SeoTitle}`,
            description: SeoDescription,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`
         }}
         robotsFollow={true} />
         <Header 
         title="Relatórios" subTitle="Publicamos todos nossos relatórios, veja os aqui📄"
         isCustomImgBg={{imgSourceType: 'import', imgSource: HeaderImg}} 
         illustrationDisplay={true} />
         <Container>
            <MainReportTitle >
                  <span>
                     Relatório mais recente: {mostRecentReport.title ? mostRecentReport.title : 
                        mostRecentReport.source
                        .split('/')[mostRecentReport.source.split('/').length - 1]}
                  </span>
                  <button onClick={() => 
                     reportsListRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                     Ver outros...
                  </button>
            </MainReportTitle>
            <sub>
               <PDFViewer title={mostRecentReport.title}
               PDFsrc={mostRecentReport.source} 
               scrType={mostRecentReport.sourceType} />
            </sub>
            <ReportsList ref={reportsListRef}>
               <span className='title'>Veja todos os relatórios</span>
               <sub>
                  {reports.map((report, index) => (
                     <Link href={`/reports/${report.id}`} key={index} passHref>
                     <a className='reportCard' key={index}>
                        <span className='reportTitle'>
                           Relatório: { report.title }
                        </span>
                        <div className='bottomSection'>
                           <span className='openReport'>Clique no card para ver mais</span>
                           <span className='reportDate'>Do: {
                              new Date(report.date).toLocaleDateString('pt-BR').toString()
                           }</span>
                        </div>
                     </a>
                     </Link>
                  ))}
               </sub>
            </ReportsList>
         </Container>
      </>
   )
}

export default Report