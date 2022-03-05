import type { NextPage } from 'next'
import Image from 'next/image'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import SimpleContentCard from '@p-components/SimpleContentCard'
import { 
   IframeContainer, 
   Container
} from '@p-styles/about'
import WideContentCard from '@p-components/WideContentCard'

//* Importing page images
import HeaderImage from '@p-images/about/header.jpg'
import Card2 from '@p-images/about/alpes-project-example-image-from-unsplash.jpg'
import Story1 from '@p-images/about/alpes-story-image-1.jpg'
import Story2 from '@p-images/about/alpes-story-image-4.jpg'

//* SEO Variables
const SeoCanonical = `${process.env.NEXT_PUBLIC_BASE_URL}/about`
const SeoDescription = "Olá, nos somos da AlpesCap e caso queira saber mais sobre nós, siga essa pagina. Aqui falamos sobre a historia do nosso projeto/nossas ambições/abições e como foi desenvolvido. 📖🎯" 

const About: NextPage = () => (
   <>
      <SEOComp 
      title="About"
      description={SeoDescription}
      canonical={SeoCanonical}
      keywords={['AlpesCap', 'História', 'História da AlpesCap', 'Sobre', 'Investimento', 'Fundo de endowment', 'Jovens', 'Sobre']}
      openGraph={{
         title: 'About',
         description: SeoDescription,
         url: SeoCanonical,
         image: {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
            width: 1500,
            height: 1500,
            alt: 'AlpesCap Logo',
            type: 'image/png'
         },
         video: {
            videoUrl: 'https://youtu.be/F7GNexyfJog',
         }
      }}
      twitter={{
         url: SeoCanonical,
         title: 'About',
         description: SeoDescription,
         video: 'https://youtu.be/F7GNexyfJog'
      }}
      robotsFollow={true}
      linkTags={[
         {
            rel: 'next',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team`
         }
      ]} />
     
     <Header 
     title="Sobre a AlpesCap" subTitle="Veja mais sobre o porjeto aqui! ⏳📖" 
     isCustomImgBg={{imgSource: HeaderImage, imgSourceType: 'import'}}
     illustrationDisplay={true} optionalButton={{url: '/team', text: 'E nosso time?'}}
      />
      
      <Container>
         <sub style={{justifyContent: 'space-evenly', width: '100%', maxWidth: '1400px'}}>
            <IframeContainer>
               {/*  //? Errors are expected as it is youtubes own tags and not html ones
               */}
               {/* eslint-disable-next-line */} 
               <iframe width="500" height="300" src="https://www.youtube-nocookie.com/embed/F7GNexyfJog" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </IframeContainer>
            <SimpleContentCard 
            props={{id: 'video-description-card'}}
            title="Sobre"
            hasBorder
            hasBackground={'#0000'}
            description='Nós somos o primeiro fundo de endowment do bem do Brasil. Nossa missão é disseminar a educação financeira para jovens enquanto fazemos o bem para a nossa sociedade.'
            />
         </sub>
         <span className='sectionTitle'>O projeto</span>
         <sub style={{width: '100%'}}>
            <WideContentCard 
            title='A ideia...'
            description={`O Fundo do Bem é totalmente composto por doações e será gerenciado por nós, jovens, com a orientação do Conselho Deliberativo e aprovação do Comitê de Investimento, ambos formados por profissionais com vasta experiência no mercado financeiro.
            O retorno dos investimentos feitos será doado para ONGs. Atualmente, escolhemos o Projeto Arrastão, mas pretendemos escolher mais ONGs.`}
            icon={<img style={{color: 'var(--palette-accent3)'}} src="data:image/png;base64,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" alt='Icone de ilustração do card'/>}
            bgImage={HeaderImage}
            alt='Imagem de background do card sobre o projeto'
            />
            <WideContentCard 
            style={{marginTop: '5rem'}}
            displayLeft
            title='Por exemplo...'
            description={`Vamos supor que você doe para o nosso projeto 1000 BRL. Este dinheiro será usado para que nós possamos montar uma carteira de investimentos. Supondo que nós consigamos um retorno de 6% em cima dos 1000 BRL que você doou, esses 6% irão para o projeto arrastão e os seus 1000 BRL irão continuar no nosso fundo, para que possamos investir novamente, formando então, um ciclo. Como os grandes fundos de endowment dos EUA, nosso objetivo é estar sempre captando e investindo, gerando assim um ciclo permanente de renda para os projetos sociais que elegemos para ajudar.`}
            icon={<img style={{color: 'var(--palette-accent3)'}} src="data:image/png;base64,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" alt='Icone de ilustração do card'/>}
            bgImage={Card2}
            alt='Imagem de background do card de um exemplo de como funciona o projeto'
            />
         </sub>
         <span className='sectionTitle'>Nossa historia</span>
         <sub style={{width: '100%'}}>
            {/*
               //TODO Improve this section to a story telling like thing
            */}
            <WideContentCard 
            title='Como tudo começou...'
            description={`Tudo começou com dois times diferentes participando de uma competição de investimentos entre escolas do mundo todo, organizada anualmente pela Wharton Business School. A proposta da competição era montar uma estratégia de investimento que atendesse os objetivos da cliente, informados pela competição. Os dois times, A.N.G.E.L.s Capital e Lycée Pasteur Investment Team se qualificaram entre os 10 finalistas da América Latina.`}
            icon={<img style={{color: 'var(--palette-accent3)'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADP0lEQVRoge2ZT2gTQRTGv7dNS5XWu9UmqXhSPCjoQRQEwUMPCpVGvTSJBKMHlaZVKL3kpJemVU9SxEYLYoMiCN6qINZDUTwICuKf0rTUq1RTa5ud58HdZBMzm91km6awv9O+vG923svMN7skgIuLi8t6QuUEI2MzfibPAMCdDGwF0ODQ3CoB35nxjNXs9f7IjtlKbmLawHAyfYzBjwBqraxGyywqxCd7g75JuwOlDYyMzfgFKe9rULzOokfx7Lnc05a2M8gjS2jbRi9+RggRybRkpuKB3StVlakRT31oal1qOQzQHQB+AFtWRXYAwAU795E2AHCnfiWEiFw5639RYa0l0b6I54nkbASgSQAgoLPMsP9QZAnNsACATEtmqqIqLfBz869XhnCb3fEmK5A/bYq3TSKZvgagF0AzgGViDMfC3sESuWIKtPq9E8nctrd9wklXQAYzE4CLhgKbmXBJkismp3UK2w0QERPjFoBl7aNlLS6VKyandQrpMZpIplm/7gt5yz7wqqGauWyvQL1hZmIpdoxqZngncMLExZiZui5NXIyZqV0TF+OauETacaOasaYmrgVrauJaUNEW0rZHTbZIOTa8iTd8A5aeA8R0k4mPA/DCuV8lZGQBfCNgfJHVoXi4Q+a1f7XJEsYG1pF3CqtHe8MdP2SCet9C+1RquG8msLoCKjOHW1caH2eaV7uZ6S605omoKxZsf+JMvcBwam4TZ0QURIncHAodifW0vyylt7oCt/vDvvFotG0pFvTdY2BUTzBwpvqy88QC7b/7wr4bAD/IzSE4JNNbaoAYEwWDFHpoCA/YrtLSnDRqCA/KdNYa8IgvBR8w8jFzWzzOjnupSVE+GsLtMl3JibWC6uEUKoukARIAFvSYs8rOAgEhHxMtaHpHWRFilyGcl+mkS0+Eaf2aCaeMOSH4dC7HPI01gImjuWvgtUwnf5ljngCoS4vOD43NTuePUZzTZQoVGLpqcscoyHi6JWV66XMgleKGuaX5NwDvdbLACnjaF/KekCWlWygQIFUFd4Ooon9OHOKtwmrQTGB6/F0Neb82qp79DCQI+AxAdbS80qwy8ScmDDYu/jlk9h7k4uLisv78Bc/LWO/oOyvPAAAAAElFTkSuQmCC" alt='Icone de ilustração do card'/>}
            bgImage={Story1}
            alt='Imagem de background do card de um exemplo de como funciona o projeto'
            />
            <WideContentCard 
            style={{marginTop: '5rem'}}
            displayLeft
            title=''
            description={`Após a competição, os dois times queriam continuar aprendendo e colocar em prática, no verdadeiro mercado de investimentos, os conhecimentos adquiridos. Desse modo, tivemos a idéia de juntar nossos times para esse projeto no qual vamos arrecadar dinheiro, investir e doar os rendimentos para ajudar um projeto social que luta em prol da melhoria da educação no Brasil. Começamos com 3 escolas e agora já somos 12 pessoas de 5 escolas diferentes. Junte-se você também a essa onda de mudança!`}
            bgImage={Story2}
            alt='Imagem de background do card de um exemplo de como funciona o projeto'
            />
         </sub>
      </Container>
   </>
)

export default About
 