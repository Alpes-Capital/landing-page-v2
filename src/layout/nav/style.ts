import styled from "styled-components"

type NavProps = {
   scrolled: boolean,
   miniMenuState: boolean,
}

export const NavContainer = styled.nav<NavProps>`
   position: fixed;
   top: 0;
   width: 100vw;
   height: 6rem;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 5vw;
   padding-right: 5vw;
   background: transparent;
   overflow: visible;
   z-index: var(--zIndex-navMaster);
   #logo, #logo-mini{
      height: 50%;
      z-index: var(--zIndex-navContent);
      display: none;
   }
   #logo-mini{
      height: 70% !important;
      width: auto;
      display: none;
   }
   #background {
      position: absolute;
      margin-left: -5vw;
      width: 100%;
      height: 100%;
      overflow: hidden;
      ::before{
         display: block;
         content: "";
         width: ${props => props.scrolled ? "100vw" : "0"};
         height: ${props => props.scrolled ? "6rem" : "0"};
         margin-left: ${props => props.scrolled ? "0" : "100vw"};
         border-bottom-left-radius: ${props => props.scrolled ? "0" : "100%"};
         background: transparent;
         backdrop-filter: var(--mods-blur);
         transition: 0.4s, backdrop-filter 0s;
      }
   }
   @media (min-width: 1200px) {
      #logo{ display: block; }
      #logo-mini{ display: none; }
   }
   @media (max-width: 1200px) {
      #logo{ display: none; }
      #logo-mini{ display: block; }
   }
   @media (max-width: 760px) {
      #logo{ display: none; }
      #logo-mini{ display: block; }
      #background {
         ::before {
            backdrop-filter: ${props => props.miniMenuState ? "blur(0px)" : 'var(--mods-blur)'};
         }
      }
   }
   @media (min-width: 3300px) {
      width: 100vw;
      padding-left: calc((100vw - 3000px) / 2);
      padding-right: calc((100vw - 3000px) / 2);
   }
`

export const NavSubSection = styled.section`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   z-index: var(--zIndex-navContent);
`

//*Nav buttons style: mini menu button and theme change

export const NavColorThemeButton = styled.button`
   width: 2.1rem;
   height: 2.1rem;
   margin-left: 0.2rem;
   margin-right: 0.2rem;
   text-decoration-color: none;
   text-decoration-line: none;
   border: none;
   background-color: var(--palette-opaque-bgContrast);
   backdrop-filter: var(--mods-blur);
   border-radius: 0.25rem;
   display: flex;
   cursor: pointer;
   justify-content: center;
   align-items: center;
   svg {
      width: 1.6rem !important;
      height: 1.6rem !important; 
      transition: unset;
   }
`

export const NavMiniMenuButton = styled(NavColorThemeButton)`
   @media (min-width: 760px) {
      display: none;
   }
`
