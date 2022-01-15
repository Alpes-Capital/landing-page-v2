import { a } from '@react-spring/web'
import { styled } from 'goober'

//* Link big container
export const LinkContainer = styled('div')`
   width: min-content;
   height: min-content;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   overflow: visible;
   position: relative;
   margin: 0.3rem;
   @media (max-width: 1200px) {
      margin: 0.01rem;
   }
   @media (max-width: 760px) {
      display: none !important;
   }
`

//* Main link component style
export const LinkText = styled('a')`
   position: relative;
   width: fit-content;
   padding: 0.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: calc(var(--zIndex-navDropdown) + 1);
   overflow: hidden;
   text-decoration-color: unset;
   text-decoration-line: unset;
   color: var(--palette-textMain);
   font-family: var(--fonts-secondary);
   font-size: 1rem;
   line-height: 0.9rem;
   font-weight: 500;
   cursor: pointer;
   span {
      display: relative;
      z-index: calc(var(--zIndex-navDropdown) + 2);
   }
   &&::before {
      content: '';
      position: absolute;
      width: calc(100% - 0.25rem);
      height: calc(100% - 0.4rem);
      border-radius: 0.25rem;
      background-color: var(--palette-bgContrast);
      transition: opacity 0.2s linear;
      opacity: 0;
      z-index: calc(var(--zIndex-navDropdown) + 1);
   }
   &&[data-is-active='true'] {
      &&::before {
         opacity: 0.7 !important;
      }
   }
   &&:hover {
      &&::before {
         opacity: 0.7 !important;
      }
   }
   @media (max-width: 1200px) {
      font-size: 1rem;
   }
`

//* Subitems style (menu that opens for pages that have multiple subdirectories)

export const SubLinksContainer = styled(a.div)`
   position: absolute;
   padding-top: 2.3rem;
   top: 0;
   left: 0;
   z-index: var(--zIndex-navDropdown);
   min-width: 160px;
   max-width: 98vw !important;
   .content{
      min-width: 160px;
      max-width: 98vw !important;
      width: fit-content;   
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      background: var(--palette-background);
      border-radius: 0.4rem;
      box-shadow: 0px 4px 16px rgb(46 41 51 / 4%), 
      0px 8px 24px rgb(71 63 79 / 5%);
      backdrop-filter: var(--mods-blur);
      padding: 0.5rem;
   }
   transition: translateX 0s;
   right: 0;
`

export const SubLinkItem = styled('a')`
   display: block;
   border-radius: 0.3rem;
   background: transparent;
   padding: 0.5rem;
   padding-left: 0.8rem;
   padding-right: 0.8rem;
   text-decoration: none;
   color: var(--palette-textMain);
   margin-top: 0.2rem;
   margin-bottom: 0.2rem;
   &&:hover {
      background: var(--palette-bgContrast);
      cursor: pointer;
   }
`