//? Main sitemap with other sitemaps index
import type { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'
import { generateSitemap } from '@components/utils'


//* Getting other sitemap routes from pages-manifest.json
async function getAllSitemaps (basePath: string) {
   const routes_manifest_path = path.join(basePath + '/.next/server/pages-manifest.json')
   const routes_manifest = await JSON.parse(fs.readFileSync(routes_manifest_path, 'utf8'))
   
   //* Getting pages paths form manifest keys
   const pages = Object.keys(routes_manifest)
   
   //* Filtering out only sitemap paths (if ends with .xml)
   const filteredPages = pages.filter(page => {
      //* Filtering out this main sitemap
      if(page.toString().match(/\/sitemap\.(xml|xml\..+)$/i)) return undefined
      //*Filtering for sitemaps only
      if(page.toString().match(/\.xml\..+$/i)) return page.replace(/\.xml\..+$/i, '.xml')
      return page.match(/\.xml$/i) ?? undefined
   })

   return filteredPages
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

   const otherSitemaps = await getAllSitemaps(basePath)

   const sitemap = generateSitemap(process.env.NEXT_PUBLIC_SITE_URL as string, undefined, otherSitemaps)

   res.setHeader('Content-Type', 'text/xml')
  
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap
