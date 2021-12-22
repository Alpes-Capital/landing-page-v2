import type { NextPage } from 'next'
import { useState } from 'react'
import { useSpring } from '@react-spring/web'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import { Graph, Details} from '@p-styles/team'
import ReferenceLink from '@components/react-mini-components/ReferenceLink'

//* Importing page images
import HeaderImage from '@p-images/team/header.jpg'
import ArrowBothSides from '@public/icons/arrowBothSidesIcons8.svg'

//* SEO Variables
const SeoCanonical = `${process.env.NEXT_PUBLIC_BASE_URL}/team`
const SeoDescription = "Olá, somos a AlpesCap e este, é nosso time. Sabemos que toda organização precisa de um time forte, mais do que tudo. Com isso, tudo ocorre do melhor jeito! Veja mais sobre nós toods aqui! 🏢👋😄"

const Team: NextPage = () => {
   const [openSectionDetails, setopenSectionDetails] = 
      useState<{description: string, title: string, link: string}>()

   return (
   <>
      <SEOComp 
      title="Nosso time"
      description={SeoDescription}
      canonical={SeoCanonical}
      keywords={['AlpesCap', 'Time', 'Equipe da AlpesCap', 'Sobre', 'Investimento', 'Fundo de endowment', 'Jovens', 'Sobre']}
      openGraph={{
         title: 'Nosso time',
         description: SeoDescription,
         url: SeoCanonical,
         image: {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
            width: 1500,
            height: 1500,
            alt: 'AlpesCap Logo',
            type: 'image/png'
         },
      }}
      twitter={{
         url: SeoCanonical,
         title: 'Nosso time',
         description: SeoDescription,
         image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/pages/about/header/.jpg`,
      }}
      robotsFollow={true}
      linkTags={[
         {
            rel: 'prev',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
         },
         {
            rel: 'next',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team/management`
         },
         {
            rel: 'next',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team/council`
         }
      ]} />
     
     <Header 
     title="Time" subTitle="Todo projeto precisa de um time obviamente! E esse é o nosso!🏢" 
     isCustomImgBg={{imgSource: HeaderImage, imgSourceType: 'import'}}
     illustrationDisplay={true} optionalButton={{url: '/about', text: 'E sobre o projeto?'}}
      />
      <Container>
         <Graph>
            <div className='bigDivisions'>
               <span className="section"
               onClick={() => setopenSectionDetails({
                  title: 'o: Comitê de investimentos',
                  description: 'O Comitê de Investimentos é o órgão responsável pela aprovação de todos os investimentos selecionados pelo time de Gestão, sempre levando em consideração as diretrizes de risco e periodicidade de distribuição de rendimentos elaboradas pelo Conselho Deliberativo.',
                  link: '/team/council'
               })}>Comitê de investimentos</span>
               <span className="section"
               onClick={() => setopenSectionDetails({
                  title: 'o: Conselho deliberativo',
                  description: 'O Conselho Deliberativo é o órgão responsável por assessorar o time de gestão e elaborar as diretrizes referentes a (i) estratégia de investimento, (ii) perfil de risco, e (iii) periodicidade de distribuição de rendimentos. O Conselho Deliberativo também aprovará as ONGs selecionadas pelo time de Gestão. Last, but not least, o Conselho Deliberativo tem a função de contribuir para a educação financeira dos jovens do time de Gestão.',
                  link: '/team/council'
               })}>Conselho deliberativo</span>
               <span className="section" 
               onClick={() => setopenSectionDetails({
                  title: 'o: Conselho Fiscal',
                  description: 'O Conselho Fiscal é o órgão fiscalizador independente do Conselho Deliberativo e do Comitê de Investimentos, que fará a revisão dos relatórios financeiros do Fundo e buscará, através da aplicação dos princípios da transparência, equidade,  prestação de contas e responsabilidade, contribuir para o melhor desempenho da organização.',
                  link: '/team/council'
               })}>Conselho fiscal</span>
            </div>
            <div className='arrow'>
               <ArrowBothSides />
            </div>
            <div className='bigDivisions'>
               <span className='section'
               onClick={() => setopenSectionDetails({
                  title: 'a: Gestão',
                  description: 'O time de Gestão, formado por jovens, tem por propósito disseminar a educação financeira entre jovens do Ensino Médio e fazer o bem, através da doação dos rendimentos do seu trabalho de gestão para ONGs. Sob orientação e comando do Conselho Deliberativo e Comitê de Investimento, o time de Gestão, é responsável pela (i) captação das doações para o Fundo do Bem, (ii) elaboração dos relatórios financeiros para os doadores e diferentes órgãos do Fundo do Bem, (iii) análise das oportunidades de investimento do mercado financeiro (ações e dívida), e (iv) alocação dos recursos no mercado financeiro.',
                  link: '/team/management'
               })}>Gestão</span>
            </div>
         </Graph>
         {!openSectionDetails && 
         <sub style={{justifyContent: 'center', display: 'flex'}}>
            <span style={{fontSize: '0.85rem', fontWeight: '500'}}>
               {"("}Uma dica... pressione um dos blocos azuis para saber mais sobre alguma das divisões do time!{")"}
            </span>
         </sub>
         }
         <Details className='details' 
         data-display={(openSectionDetails && openSectionDetails.title) ? 'true' : 'false'}>
            <span className="title">O que é {openSectionDetails && openSectionDetails.title}</span>
            <span className="description">
               {openSectionDetails && openSectionDetails.description}
            </span>
            <ReferenceLink href={openSectionDetails ? openSectionDetails.link : '/team'} title='Veja os participantes' />
            <span className="tip">
               {"("}troque de explicação clicando em um dos blocos azuis{")"}
            </span>
         </Details>
      </Container>
   </>
   )
}

export default Team