import type { GetServerSideProps } from 'next'
import getConfig from 'next/config'
import {checkStrMatchAnyOfRgxArr} from '@components/utils'
import fs from 'fs'
import path from 'path'
import { generateSitemap } from '@components/utils'

import type {PropsCombined} from '@custom-types/routes'

const { serverRuntimeConfig } = getConfig()

//* Gets all build time static pages
async function getAllFiles(basePath: string): Promise<string[]> {
   const routes_manifest_path = path.join(basePath + '/.next/server/pages-manifest.json')
   const routes_manifest = await JSON.parse(fs.readFileSync(routes_manifest_path, 'utf8'))
   
   //* Getting pages paths form manifest keys
   const pages = Object.keys(routes_manifest)
   
   //* Filtering out nextjs's special pages, api paths, sitemap/robots txt and ISG functions paths
   var fileOptOutRegex = [
      RegExp(".json$", 'i'), RegExp("(.nft$|.nft\..+$)", 'i'),RegExp('_.+$', 'i'), 
      RegExp('(404|500|api)', 'i'), RegExp('(.xml.+$|.xml$)', 'i'), 
      RegExp('robots\..', 'i'), /\[.+\]/
   ] 
   const filteredPages = pages.filter(page => {
      return !checkStrMatchAnyOfRgxArr(page.toString(), fileOptOutRegex)
   })

   return filteredPages
}

//* Get all pages and their details to then generate the sitemap
function getPagesSitemapDetails(pages: string[], routes: PropsCombined) {
   const date = new Date().toISOString()
   const sitemapDetails = pages.map(page => {
      return {
         url: page,
         lastmod: routes.filter(route => route.path === page)[0]?.siteMapOptions.lastMod ?? `${date}`,
         changefreq: routes.filter(route => route.path === page)[0]?.siteMapOptions.changeFreq ?? 'never',
         priority: routes.filter(route => route.path === page)[0]?.siteMapOptions.priority.toString() ?? '0.1'
      }
   })

   return sitemapDetails
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const basePath: string = process.cwd();
   const routes = serverRuntimeConfig.allRoutes as PropsCombined

   if(!routes || !basePath) return {
      redirect: {
         destination: '/500',
         permanent: false,
      },
   }

   const pages = await getAllFiles(basePath)
   const sitemapDetails = getPagesSitemapDetails(pages, routes)

   const sitemap = generateSitemap(process.env.NEXT_PUBLIC_SITE_URL as string, sitemapDetails)

   res.setHeader('Content-Type', 'text/xml')
  
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap
