/* eslint-disable */

export default {
   title: "Alpes Capital Web-page",
   description: 'Olá nós somos a Alpes Capital! Somos um fundo de endowment formado por jovens, focado em ensinar jovens a como investir no mercado financeiro.',
   canonical: process.env.NEXT_PUBLIC_SITE_URL,
   owner: 'Alpes Capital',
   language: 'pt-br',
   image: process.env.NEXT_PUBLIC_SITE_URL + '/images/global/Logo_mini_bg.png',
   manifest: '/manifest/manifest.json',
   index: process.env.NEXT_PUBLIC_SITE_URL,
   keywords: ["Alpes Capital", "Fundo de endowment", "Endowment und", "Investment", "Investimento", "Jovens", "ONG", "Mercado Financeiro"],
   openGraph: { 
      type: 'website',
      locale: 'pt_BR',
      title: "Alpes Capital Web-page",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      site_name: 'Alpes Capital', 
      region: 'BR',
      countryName: 'Brasil',
      locality: 'São Paulo',
      email: 'alpes.capital@gmail.com',
      description: 'Olá nós somos a Alpes Capital! Somos um fundo de endowment formado por jovens, focado em ensinar jovens a como investir no mercado financeiro.',
      image: {
         url: process.env.NEXT_PUBLIC_SITE_URL + '/favicon-96x96.png',
         width: 96,
         height: 96,
         alt: 'Alpes Capital Logo',
         type: 'image/png',
      }
   },
   twitter: {
      cardType: 'summary_large_image',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      title: 'Alpes Capital Webpage',
      description: 'Olá nós somos a Alpes Capital! Somos um fundo de endowment formado por jovens, focado em ensinar jovens a como investir no mercado financeiro.',
      img: process.env.NEXT_PUBLIC_SITE_URL + '/favicon-96x96.png'
   },
   structuredData: {
      context: "https://schema.org",
      name: "Alpes Capital",
      type: "NGO",
      description: "Olá nós somos a Alpes Capital! Somos um fundo de endowment formado por jovens, focado em ensinar jovens a como investir no mercado financeiro.",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      logo: process.env.NEXT_PUBLIC_SITE_URL + '/favicon-96x96.png',
      foundingDate: "2019",
      founders: [
         {
            type: "Person",
            name: "ALESSANDRA OGAWA"
         },
         {
            type: "Person",
            name: "BENJAMIN COCCOLI"
         },
         {
            type: "Person",
            name: "CAROLINA BERTOLETTI"
         },
         {
            type: "Person",
            name: "CECILIA PRADO"
         },
         {
            type: "Person",
            name: "NICHOLAS LATKANI"
         },
         {
            type: "Person",
            name: "VALENTINA COSTA"
         },
         {
            type: "Person",
            name: "Louis Chalamel"
         },
         {
            type: "Person",
            name: "Jean"
         },
      ],
      address: {
         type: "PostalAddress",
         addressLocality: "São Paulo",
         addressRegion: "SP",
         addressCountry: "BR"
      },
      contactPoint: [
         {
            type: "ContactPoint",
            contactType: "Principal",
            email: "alpes.capital@gmail.com"
         }
      ], 
      sameAs: [
         "https://www.facebook.com/alpescapital/",
         "https://www.instagram.com/alpes_capital_/",
         "https://www.linkedin.com/company/alpes-capital/",
         "https://https://github.com/alpes-Capital/"
      ],
      sponsor: [
         {
            type: "Organization",
            name: "Alpes Capital",
            url: ''
         }
      ]
   },
   asApplication: {
      msApplication: {
         tileColor: '#8DA0E2',
         applicationName: 'Alpes Capital Webpage',
         startUrl: process.env.NEXT_PUBLIC_SITE_URL,
         tooltip: 'Launch Alpes Capital Webpage',
         shortcutIcon: process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico',
         images: [
            {
               name: 'msapplication-square150x150logo',
               content: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/ms-icon-150x150.png',
            }
         ]
      },
      appleMobile: {
         statusBarStyle: 'black-translucent',
         capable: 'yes',
         formatDetection: 'telephone=no',
         barTitle: 'Alpes Capital Webpage',
         touchIcon: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon.png',
         images: [
            {
               rel: 'apple-touch-icon',
               sizes: '60x60',
               href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon-60x60.png',
            },
            {
               rel: 'apple-touch-icon',
               sizes: '114x114',
               href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon-114x114.png',
            },
            {
               rel: 'apple-touch-icon',
               sizes: '180x180',
               href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon-180x180.png',
            },
         ]
      }
   }
}