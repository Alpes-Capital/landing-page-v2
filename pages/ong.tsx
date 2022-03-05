import type { NextPage } from 'next'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import { MainSubContainer } from '@p-styles/ong/index'
import SimpleCard from '@components/pages-mini-components/SimpleContentCard'

//* Importing static assets
import HeaderImg from '@p-images/ngo/header.jpg'

const ONGs: NextPage = () => {
   const SeoTitle = 'ONG'
   const SeoDescription = 'Veja qui a ONG que nós apoiamos e um pouco sobre ela.'
   const SeoKeywords = ['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro', 'ONGs', 'ONG', 'NGO']
   const SeoCanonical =  process.env.NEXT_PUBLIC_SITE_URL + '/ong'
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
               rel: 'prev',
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/about`
            },
            {
               rel: 'next',
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/donate`
            }
         ]}
         robotsFollow={true} />

         <Header 
         title="Projeto Arrastão..." subTitle="... a AlpesCap e o fundo Arrastão 🤝"
         isCustomImgBg={{imgSourceType: 'import', imgSource: HeaderImg}} 
         illustrationDisplay={true} />
         <Container>
            <MainSubContainer>
               <div className='ngoPageVidIframeDiv'>
                  {/* eslint-disable-next-line */} {/* @ts-ignore */}
                  <iframe src="https://www.youtube-nocookie.com/embed/oDA-1L6T494" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
               <SimpleCard 
               props={{className: 'ngoPageDescriptionCard'}}
               title="ONGs"
               description='Fundado em 1968, a iniciativa faz o acolhimento e dá suporte às famílias da região do Campo Limpo que vivem em condição de pobreza. Esse trabalho de promoção humana e de desenvolvimento das comunidades é feito junto com estas famílias e dão origem aos programas oferecidos nas áreas de educação, cultura, geração de renda, habitação e qualidade de vida. '
               icon={<img alt='Icone de illustração do card de explicação do projeto Arrastão' src="data:image/png;base64,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" />} />
            </MainSubContainer>
         </Container>
      </>
   )
}



export default ONGs