//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'

//* Importing static assets
import HeaderImg from '@p-images/donate/header.jpg'

const Donate = () => {
   const SeoTitle = 'Doe'
   const SeoDescription = 'Faça parte do nosso fundo e apoie a ONG Arrastão que faz parceria com nós'
   const SeoKeywords = ['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro', 'Doação', 'Doar', 'Donate']
   const SeoCanonical =  process.env.NEXT_PUBLIC_SITE_URL + '/donate'
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
            }
         }}
         twitter={{
            url: SeoCanonical,
            title: `AlpesCap - ${SeoTitle}`,
            description: SeoDescription,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`
         }}
         linkTags={[
            {
               rel: 'next',
               href: `https://doe.arrastao.org.br/fundodobem`
            },
            {
               rel: 'prev',
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/ong`
            }
         ]}
         robotsFollow={true} />

         <Header 
         title="Doe.." subTitle="... faça parte do nosso fundo do bem 🤝"
         isCustomImgBg={{imgSourceType: 'import', imgSource: HeaderImg}} 
         illustrationDisplay={true} optionalButton={{isExternal: true, text: 'Doe aqui', url: 'https://doe.arrastao.org.br/fundodobem'}} />
      </>
   )
}

export default Donate