/** @type {import('./types/routes').PropsCombined} */

const pages = [
   { 
      name: "Home", 
      path: "/" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 1,
        changeFreq: "never",
      }
   },
   { 
      name: "Sobre", 
      path: "/about" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.9,
        changeFreq: "never",
      }
   },
   { 
      name: "Time", 
      path: "/team" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.5,
        changeFreq: "never",
        
      },
      navSubLinks: [
        { title: 'Gestão', href: '/management' },
        { title: 'Conselho de investimentos', href: '/investment-council' },
        { title: 'Conselho fiscal', href: '/fiscal-council' },
        { title: 'Conselho deliberativo', href: '/deliberative-council' },
        { title: 'Ex membros', href: '/ex-members' },
     ]
   },
   { 
      name: "ONGs", 
      path: "/ong" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.7,
        changeFreq: "never",
      },
   },
   { 
      name: "Doar", 
      path: "/donate" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.8,
        changeFreq: "never",
      }
   },
   { 
      name: "Relatorios", 
      path: "/reports" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.1,
        changeFreq: "never",
      }
   },
   { 
      name: "Contato", 
      path: "/contact" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.6,
        changeFreq: "never",
        
      }
   },
   { 
      name: "Blog", 
      path: "/blog" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.5,
        changeFreq: "never",
      }
   },
   { 
    name: "Politicas", 
    path: "/policies" ,
    navShow: false,
    appearForWebCrawllers: false,
    siteMapOptions: {
      priority: 0.6,
      changeFreq: "never",
    }
   },
   { 
    name: "Cookies", 
    path: "/site-and-cookies" ,
    navShow: false,
    appearForWebCrawllers: false,
    siteMapOptions: {
      priority: 0.6,
      changeFreq: "never",
    }
   },
   { 
    name: "techStack", 
    path: "/site-stack" ,
    navShow: false,
    appearForWebCrawllers: false,
    siteMapOptions: {
      priority: 0.4,
      changeFreq: "never",
    }
   },
]

module.exports = pages