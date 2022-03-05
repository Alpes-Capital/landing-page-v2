import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/ErrPages'
import { a, useSpring, config } from '@react-spring/web'
const Lottie = dynamic(() => import('@components/react-mini-components/ErrPageLottie'), {
   ssr: false,
})

const Err500 = () => {
   const messageSpring = useSpring({
      from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
      opacity: 1, transform: 'translate3d(0, 0, 0)',
      delay: 300,
      config: { ...config.wobbly }
    })
  
   const codeSpring = useSpring({
     from: { opacity: 0, transform: 'translate3d(0, -10px, 0)' },
     opacity: 1, transform: 'translate3d(0, 0, 0)',
     delay: 400,
     config: { ...config.wobbly }
   })

   const SeoTitle = 'Erro 500 - Erro interno do servidor'
   const SeoDescription = 'Parece que você encontrou nossa pagina de 500... estranho... Mas não se preocupe isso é culpa nossa provavelmente... Mas procure pela nossa Home. Somos a AlpesCap btw!'

   return (
      <>
         <SEOComp 
         title={SeoTitle}
         description={SeoDescription}
         canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
         keywords={['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro']}
         locale='pt-BR'
         openGraph={{
           title: SeoTitle,
           description: SeoDescription,
           url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
           image: {
             url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/500.jpg`,
             width: 945,
             height: 685,
             alt: 'AlpesCap Logo',
             type: 'image/png'
           }
         }}
         twitter={{
           url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
           title: SeoTitle,
           description: SeoDescription,
           image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/500.jpg`
         }}
         robotsFollow={false} />
         <Container>
            <a.span className="errorText" style={messageSpring}>
               Algo aconteceu... a culpa é nossa, não se preocupe<br/>
               Devem ser aqueles guaxinins comendo os cabos do servidor novamente 😅😨 <br/>
            </a.span>
            <a.span className="errorCode" style={codeSpring}>
               500
            </a.span>
            <div className='lottie'>
               <Suspense fallback='...carregando animação'>
                  <Lottie errorCode={500} />
               </Suspense>
            </div>
         </Container>
      </>
   )
}

export default Err500