import type { GetServerSideProps } from 'next'
import getConfig from 'next/config'
import { generateSitemap } from '@components/utils'

//* Team info functions import
import { getTeamSections } from '@components/api/team-sections-utils'

const date = new Date().toISOString()

//* Get all pages and their details to then generate the sitemap
function getPagesSitemapDetails(pages: {id: string, title: string}[]) {
   const sitemapDetails = pages.map(page => {
      return {
         url: `/team/${page.id}`,
         lastmod: `${date}`,
         changefreq: 'never',
         priority: '0.5'
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

   const sections = await getTeamSections()
   const sitemapDetails = getPagesSitemapDetails(sections)

   const sitemap = generateSitemap(process.env.NEXT_PUBLIC_SITE_URL as string, sitemapDetails)

   res.setHeader('Content-Type', 'text/xml')
  
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap
