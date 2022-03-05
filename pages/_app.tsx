import {useEffect} from 'react'
import getConfig from 'next/config'
import Head from 'next/head'
import Script from 'next/script'
import { Globals } from 'react-spring'

//@ts-expect-error
import { useReduceMotion } from 'react-reduce-motion'

import type { AppProps } from 'next/app'
import type {PropsCombined} from '@custom-types/routes'

import { GlobalStyle, Theme1, Theme2 } from "@components/global-style"
import usePersistentState from '@components/hooks/usePersistentState'
import CssThemeProvider from '@components/css-theme'
import { DefaultSEOComp } from '@components/SEO'
const { publicRuntimeConfig } = getConfig()

//Importing Layout elements
import Navigation from '@layout/navigation'
import Footer from '@layout/footer'
import CookiesPolicyCard from '@components/react-mini-components/CookiesPolicyCard'
import Alert from '@components/react-mini-components/Alert'


const WithThemeProvider: React.FC = () => {
   const [isDarkMode, isDarkModeToggle] = usePersistentState(false, 'theme')

   return (
      <>
         <CssThemeProvider 
            theme={isDarkMode ? Theme2 : Theme1} 
            defaultTheme={Theme1} />
         <Navigation routes={publicRuntimeConfig.routes as PropsCombined} 
         isDarkTheme={isDarkMode} toggleDarkTheme={isDarkModeToggle} />
      </>
   )
}

const windowCheck = typeof window !== 'undefined' ? 
   window : undefined

function MyApp({ Component, pageProps }: AppProps) {
   /* eslint-disable */
   const prefersReducedMotion  = windowCheck && useReduceMotion()
   /* eslint-enable */
   useEffect(() => {
      Globals.assign({
        skipAnimation: prefersReducedMotion,
      })
    }, [prefersReducedMotion])

   return (
     <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
         </Head>
         <GlobalStyle />
         <DefaultSEOComp />
         <WithThemeProvider />
         <CookiesPolicyCard />
         <Alert />
         <Component {...pageProps} />
         <Footer />
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.GA_TRACKING_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive" async>
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){window.dataLayer.push(arguments);}
             gtag('js', new Date());

             gtag('config', '${publicRuntimeConfig.GA_TRACKING_ID}');
           `}
         </Script>
     </>
   )
}

export default MyApp