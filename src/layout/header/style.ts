import styled from "styled-components"
import { a } from '@react-spring/web'

export const HeaderContainer = styled.header`
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   width: 100vw;
   height: 100vh;
   z-index: var(--zIndex-headerMaster);
   overflow: hidden;
   #background {
      width: 100vw;
      height: 100vh;
      position: absolute;
   }
   #headerIllustration {
      z-index: var(--zIndex-headerContent);
      margin-right: 10vw; 
   }
   @media (max-width: 730px) {
      #headerIllustration {
         position: absolute;
         opacity: 0.4;
         filter: contrast(1.5) grayscale(1);
         bottom: -20%;
         left: -25vw;
         transform: none;
      }
   }
`

type HeaderContentCssProps = {
   customMask?: string
}

export const HeaderContent = styled.div<HeaderContentCssProps>`
   left: 0;
   width: 55vw;
   height: 100%;
   z-index: var(--zIndex-headerContent);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   padding-left: 10vw;
   padding-right: 10vw;
   color: #fff;
   background: ${props => props.customMask ? props.customMask : 
   "linear-gradient(145deg, rgba(30,29,69,0.870886025308561) 8%, rgba(141,160,226,0.45071795808167014) 50%, rgba(58,84,180,0.2294294426755077) 77%)"};
   backdrop-filter: var(--mods-blur);
   h1{
      font-size: 3rem;
   }
   @media (max-width: 1100px) {
      h2{ font-size: 2.5rem; }
   }
   @media (max-width: 850px) {
      h2{ font-size: 2.2rem; }

   }
   @media (max-width: 730px) {
      width: 100vw;
      justify-content: flex-end;
      padding-bottom: 35vh;
      backdrop-filter: blur(0.4rem);
      h2{ font-size: 1.9rem; }
   }
`

export const HeaderDisplayButton = styled(a.a)`
   width: fit-content;
   height: fit-content;
   background: var(--palette-opaque-accent2);
   justify-content: center;
   padding: 0.55rem 1.5rem;
   color: white;
   font-size: 1rem;
   font-weight: 400;
   font-family: var(--fons-secondary);
   border: none;
   border-radius: 0.3rem;
   backdrop-filter: var(--mods-blur);
   margin-top: 5rem;
   transition: background 0.3s ease-in-out;
   :hover {
      background: linear-gradient(120deg, var(--palette-accent2) 37%, var(--palette-opaque-accent2) 100%);
   }
`