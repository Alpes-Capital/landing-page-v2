import { styled } from 'goober'
import { a } from '@react-spring/web'

export const HeaderContainer = styled('header')`
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   width: 100vw;
   height: 100vh;
   z-index: var(--zIndex-headerMaster);
   perspective: 1000px;
   overflow: hidden;
   #background {
      width: 100vw;
      height: 100vh;
      position: fixed;
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

export const HeaderContent = styled('div')`
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
   backdrop-filter: var(--mods-blur);
   h2{
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
   &&:hover {
      background: linear-gradient(120deg, var(--palette-accent2) 37%, var(--palette-opaque-accent2) 100%);
   }
`