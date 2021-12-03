
import 'styled-components';

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

declare module 'styled-components' {
   export interface DefaultTheme {
      palette: pallete & {
         opaque: pallete
      }
      zIndex: {
         navMaster: number
         navContent: number
         navDropdown: number
         headerMaster: number
         headerContent: number
         cookiesPolicyCard: number
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