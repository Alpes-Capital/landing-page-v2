import { ThemeTyping, createGlobalStyle } from 'styled-components'

const userAdvise = {
   success: '#00c853',
   error: '#ff3d00',
   warning: '#ffa000',
   info: '#8DA0E2',
   neutral: '#9e9e9e',
}

const zIndexes = {
   navMaster: 50,
   navContent: 51,
   navDropdown: 52,
   headerMaster: 20,
   headerContent: 21,
   cookiesPolicyCard: 25,
   alertCard: 30,
}

const mods = {
   blur: 'blur(1rem)',
}

const fonts = {
   primary: '"Montserrat", sans-serif',
   secondary: '"Montserrat Alternates", sans-serif',
}

const contant = {
   white: '#fff',
   black: '#000',
}

//TODO Improve both mode palettes
//! Caution, also look for components that don't follow palete rules and fix them
// ! (or add add new item to palete to support them) (also check logos and add their version for it)
export const Theme1: ThemeTyping = {
   palette: {
      background: '#FFFFFF',
      bgContrast: '#f5f5f5',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textMain: '#1E1D45',
      textInverse: '#FFFFFF',
      opaque: {
         background: '#FFFFFF60',
         bgContrast: '#f5f5f560',
         accent1: '#1E1D4560',
         accent2: '#3A54B460',
         accent3: '#8DA0E260',
         textMain: '#1E1D4560',
         textInverse: '#FFFFFF60',
      },
      constant: contant,
      userAdvise: userAdvise,
   },
   zIndex: {...zIndexes},
   mods: {...mods},
   fonts: {...fonts}
}

export const Theme2: ThemeTyping = {
   palette: {
      background: '#000000',
      bgContrast: '#363636',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textMain: '#FFFFFF',
      textInverse: '#1E1D45',
      opaque: {
         background: '#00000060',
         bgContrast: '#36363660',
         accent1: '#1E1D4560',
         accent2: '#3A54B460',
         accent3: '#8DA0E260',
         textMain: '#FFFFFF60',
         textInverse: '#1E1D4560',
      },
      constant: contant,
      userAdvise: userAdvise,
   },
   zIndex: {...zIndexes},
   mods: {...mods},
   fonts: {...fonts}
}

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0px;
      padding: 0px;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      text-decoration-line: none;
      outline: none;
      font-family: var(--fonts-primary);
      box-sizing: border-box; 
      background-repeat: no-repeat;
      transition-property: color, background, background-color;
      transition-duration: 0.5s;
   }
   html{
      width: 100vw;
      overflow-x: hidden;
      background-color: var(--palette-background);
   }
   @media (prefers-reduced-motion: reduce) {
      transition: none;
   }
   ::-webkit-scrollbar{
      width: 0.4rem;
      position: fixed;
   }
   ::-webkit-scrollbar-thumb{
      background: var(--palette-opaque-accent3);
      border: 1.7px solid #0000;
      border-radius: 1rem;
   }
   ::-webkit-scrollbar-thumb:hover{
      background: var(--palette-accent3);
   }
   ::-webkit-scrollbar-track{
      background: var(--palette-background);
   }
   @media (prefers-reduced-motion: reduce) {
      * {
         transition: none all !important;
      }
   }
`