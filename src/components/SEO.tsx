import Head from 'next/head'

import SEO from '../../next-seo.config'

//* SEO component that is used to define global and default SEO settings for the whole webp
const DefaultSEOComp: React.FC = () => (
   <Head>
      <base href={`${process.env.NEXT_PUBLIC_SITE_URL}`} target="_blank" />
      <meta charSet='utf-8' />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      <meta name="owner" content={SEO.owner} />
      <link rel='index' title={SEO.title} href={SEO.index} />
      <link rel="manifest" href={SEO.manifest} />
      {/* Any additional meta tags */}
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name="reply-to" content='alpes.capital@gmail.com' />
      <meta name='google-site-verification' content='' />
      <meta name='theme-color' content='#8DA0E2' />
      <meta name='classification' content='NGO' />
      <meta name='copyright' content='Alpes Capital - 2021-present. All rights reserved.' />

      
      {/* Apple mobile app capabilities */}
      <meta name="apple-mobile-web-app-status-bar-style" content={SEO.asApplication.appleMobile.statusBarStyle} />
      <meta name="apple-mobile-web-app-capable" content={SEO.asApplication.appleMobile.capable} />
      <meta name="format-detection" content={SEO.asApplication.appleMobile.formatDetection} />
      <link rel='apple-touch-icon' href={SEO.asApplication.appleMobile.touchIcon} />
      <meta name='apple-mobile-web-app-title' content={SEO.asApplication.appleMobile.barTitle} />
      {SEO.asApplication.appleMobile.images.map((image, index) => (
         <link rel={image.rel} key={index} sizes={image.sizes} href={image.href} />
      ))}

      {/* Ms application */}
      <meta name="msapplication-TileColor" content={SEO.asApplication.msApplication.tileColor} />
      <meta name="application-name" content={SEO.asApplication.msApplication.applicationName} />
      <meta name="msapplication-starturl" content={SEO.asApplication.msApplication.startUrl} />
      <meta name="msapplication-tooltip" content={SEO.asApplication.msApplication.tooltip} />
      <link rel="shortcut icon" href={SEO.asApplication.msApplication.shortcutIcon} />
      {SEO.asApplication.msApplication.images.map((image, index) => (
         <meta name={image.name} key={index} content={image.content} />
      ))}


      {/* Google structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
         {
            "@context": `${SEO.structuredData.context}`,
            "@type": `${SEO.structuredData.type}`,
            "url": `${SEO.structuredData.url}`,
            "name": `${SEO.structuredData.name}`,
            "logo": `${SEO.structuredData.logo}`,
            "description": `${SEO.structuredData.description}`,
            "foundingDate": `${SEO.structuredData.foundingDate}`,
            "founders": [SEO.structuredData.founders.map((founder) => (
               {
                  "@type": `${founder.type}`,
                  "name": `${founder.name}`,
               }
            ))],
            "address": {
               "@type": `${SEO.structuredData.address.type}`,
               "addressLocality": `${SEO.structuredData.address.addressLocality}`,
               "addressRegion": `${SEO.structuredData.address.addressRegion}`,
               "addressCountry": `${SEO.structuredData.address.addressCountry}`,
            },
            "contactPoint": [SEO.structuredData.contactPoint.map((contact) => (
               {
                  "@type": `${contact.type}`,
                  "contactType": `${contact.contactType}`,
                  "email": `${contact.email}`,
               }
            ))],
            "sameAs": [SEO.structuredData.sameAs.map((sameAs) => (
               `${sameAs}`
            ))],
         }
      )}} />

      {/* OpenGraph meta tags */}
      <meta property="og:site_name" content={SEO.openGraph.site_name} />
      <meta name="og:email" content={SEO.openGraph.email}/>
      <meta name="og:locality" content={SEO.openGraph.locality} />
      <meta name="og:region" content={SEO.openGraph.region} />
      <meta name="og:country-name" content={SEO.openGraph.countryName} />  

      {/* Twitter meta tags */}
      <meta property="twitter:card" content={SEO.twitter.cardType} />
   </Head>
)

//* SEO component that is used to be called in every page so each page
//* can have it's custom SEO data

type CustomSEOProps = {
   title?: string,
   description?: string,
   canonical?: string,
   keywords?: string[],
   image?: string,
   locale?: string,
   localeAlternates?: string[],
   robotsFollow: boolean,
   articleMetaTags?: {
      author: string,
      topic: string,
      revised: string,
      summary: string,
   },
   openGraph?: {
      title: string,
      description: string,
      url: string,
      type?: string,
      locale?: string,
      image?: {
         url: string,
         width: number,
         height: number,
         alt: string,
         type: string,
      }
      article?: {
         publishedTime: string,
         modifiedTime?: string,
         expirationTime?: string,
         author: string,
         tag: string[],
      }
      profile?: {
         firstName: string,
         lastName: string,
         gender: string
      }
      video?: {
         videoUrl: string
         height?: string
         width?: string
         type?: string
      }
   }
   twitter?: {
      url: string
      title: string
      description: string
      image?: string
      video?: string
   }
   linkTags?: {
      rel: 'next' | 'prev' | 'comments'
      href: string
   }[]
}

const SEOComp: React.FC<CustomSEOProps> = (props) => {
   const checkOpenGraph = {
      title: props.openGraph ? props.openGraph.title : SEO.openGraph.title,
      description: props.openGraph ? props.openGraph.description : SEO.openGraph.description,
      url: props.openGraph ? props.openGraph.url : SEO.openGraph.url,
      type: (props.openGraph && props.openGraph.type) ? props.openGraph.type : SEO.openGraph.type,
      locale: (props.openGraph && props.openGraph.locale) ? props.openGraph.locale : SEO.openGraph.locale,
      image: (props.openGraph && props.openGraph.image) ? props.openGraph.image : SEO.openGraph.image,
      article: (props.openGraph && props.openGraph.article) ? props.openGraph.article : undefined,
      profile: (props.openGraph && props.openGraph.profile) ? props.openGraph.profile : undefined,
      video: (props.openGraph && props.openGraph.video) ? props.openGraph.video : undefined,
   } 

   return (
      <Head>
         {/* Main meta tags */}
         <title>AlpesCap - {props.title ? props.title : SEO.title}</title>
         <meta name="title" content={`AlpesCap - ${props.title ? props.title : SEO.title}`} />
         <meta name="description" content={props.description ? props.description: SEO.description} />
         <link rel="canonical" href={`${props.canonical ? props.canonical : SEO.canonical}`} />
         <meta name="keywords" content={props.keywords ? 
            props.keywords.join(', ') : SEO.keywords.join(', ')} />
         <meta name="image" content={props.image ? props.image : SEO.image} />
         <meta name="language" content={props.locale ? props.locale : SEO.language} />

         {props.localeAlternates && props.localeAlternates.map((locale, index) => (
            <link key={index} rel="alternate" hrefLang={locale} href={`${props.canonical}?lang=${locale}`} />
         ))}

         {/* Robots meta tags */}
         <meta name="robots" content={props.robotsFollow ? 'index,follow' : 
            'noindex,nofollow,noimageindex,noarchive,nositelinkssearchbox'} />

         {/* Article main meta tags */}
         {props.articleMetaTags && <>
            <meta name="author" content={props.articleMetaTags.author} />
            <meta name="topic" content={props.articleMetaTags.topic} />
            <meta name="revised" content={props.articleMetaTags.revised} />
            <meta name="summary" content={props.articleMetaTags.summary} />
         </>}

         {/* OpenGraph */}
         <meta property="og:title" content={`AlpesCap - ${checkOpenGraph.title}`} />
         <meta property="og:description" content={checkOpenGraph.description} />
         <meta property="og:type" content={checkOpenGraph.type} />
         <meta property="og:url" content={`${checkOpenGraph.url}`} />
         <meta property="og:locale" content={checkOpenGraph.locale} />
         <meta property="og:image" content={checkOpenGraph.image.url} />
         <meta property="og:image:width" content={checkOpenGraph.image.width.toString()} />
         <meta property="og:image:height" content={checkOpenGraph.image.height.toString()} />
         <meta property="og:image:alt" content={checkOpenGraph.image.alt} />
         <meta property="og:image:type" content={checkOpenGraph.image.type} />

         {/* OPtional OpenGraph tags */}
         {checkOpenGraph.article && <>
            <meta property="article:published_time" content={checkOpenGraph.article.publishedTime} />
            <meta property="article:author" content={checkOpenGraph.article.author} />
            {checkOpenGraph.article.modifiedTime && 
               <meta property="article:modified_time" content={checkOpenGraph.article.modifiedTime} />}
            {checkOpenGraph.article.expirationTime &&
               <meta property="article:expiration_time" content={checkOpenGraph.article.expirationTime} />}
            {checkOpenGraph.article.tag && checkOpenGraph.article.tag.map((tag, index) => (
               <meta property="article:tag" key={index} content={tag} />
            ))}
         </>}
         {checkOpenGraph.profile && <>
            <meta property="profile:first_name" content={checkOpenGraph.profile.firstName} />
            <meta property="profile:last_name" content={checkOpenGraph.profile.lastName} />
            <meta property="profile:gender" content={checkOpenGraph.profile.gender} />
         </>}
         {checkOpenGraph.video && <>
            <meta property="og:video" content={checkOpenGraph.video.videoUrl} />
            {checkOpenGraph.video.type && <meta property="og:video:type" content={checkOpenGraph.video.type} />}
            {checkOpenGraph.video.width && <meta property="og:video:width" content={checkOpenGraph.video.width} />}
            {checkOpenGraph.video.height && <meta property="og:video:height" content={checkOpenGraph.video.height} />}
         </>}

         {/* TwitterSEO */}
         <meta name="twitter:url" content={props.twitter ? props.twitter.url : SEO.twitter.url} />
         <meta name="twitter:title" content={`AlpesCap - ${props.twitter ? props.twitter.title : SEO.twitter.title}`} />
         <meta name="twitter:description" content={props.twitter ? props.twitter.description : SEO.twitter.description} />
         {(props.twitter && props.twitter.image) && <meta name="twitter:image" content={props.twitter.image} />}
         {(props.twitter && props.twitter.video) && <meta name="twitter:image" content={props.twitter.video} />}

         {/* Other link tags */}
         {props.linkTags && props.linkTags.map((linkTag, index) => (
            <link key={index} rel={linkTag.rel} href={linkTag.href} />
         ))}
      </Head>
   )
}  


export {
   DefaultSEOComp,
   SEOComp
}
