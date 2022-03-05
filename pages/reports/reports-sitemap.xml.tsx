import type { GetServerSideProps } from 'next'
import type { ReportType } from '@components/api/reports-utils'
import { generateSitemap } from '@components/utils'

import { getReports } from '@components/api/reports-utils'

const date = new Date().toISOString()

//* Generate a sitemap based on the reports object
function getPagesSitemapDetails(pages: Omit<ReportType, "source" | "sourceType">[]) {
   const sitemapDetails = pages.map(page => {
      return {
         url: `/reports/${page.id}`,
         lastmod: `${date}`,
         changefreq: 'yearly',
         priority: '0.1'
      }
   })

   return sitemapDetails
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const basePath: string = process.cwd();

   if(!basePath) return {
      redirect: {
         destination: '/500',
         permanent: false,
      },
   }

   const reports = await getReports()

   if(!reports) return {
      redirect: {
         destination: '/500',
         statusCode: 302
      }
   }

   const sitemapDetails = getPagesSitemapDetails(reports)

   const sitemap = generateSitemap(process.env.NEXT_PUBLIC_SITE_URL as string, sitemapDetails)

   res.setHeader('Content-Type', 'text/xml')
  
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap
