interface PermanentProps {
   readonly name: string,
   readonly path: string,
   readonly navShow: boolean,
   readonly appearForWebCrawllers: boolean,
   readonly siteMapOptions: {
     priority: number,
     changeFreq: string,
     lastMod: string,
     alternateRefs?: {
        href: string,
        hreflang: string,
     }[],
   },
 }
 
type OptionalProps = {
  readonly seo?: {
    description?: string,
    title?: string,
    keywords?: string,
    author?: string,
    canonical?: string,
  }
  readonly navSubLinks?: Array<{
    title: string,
    href: string,
  }>
}

export type PropsCombined = Array<PermanentProps & OptionalProps>