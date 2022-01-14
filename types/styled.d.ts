
import 'goober';

interface pallete {
   background: string
   background: string
   bgContrast: string
   accent1: string
   accent2: string
   accent3: string
   textMain: string
   textInverse: string
}

declare module 'goober' {
   export interface DefaultTheme {
      palette: pallete & {
         opaque: pallete
         userAdvise: {
            success: string
            error: string
            warning: string
            info: string
            neutral: string
         }
         constant: {
            white: string
            black: string
         }
      }
      zIndex: {
         navMaster: number
         navContent: number
         navDropdown: number
         headerMaster: number
         headerContent: number
         cookiesPolicyCard: number
         alertCard: number
      }
      mods: {
         blur: string
      },
      fonts: {
         primary: string
         secondary: string
      }
   }
   export interface ThemeTyping extends DefaultTheme {}
}