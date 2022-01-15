import { styled } from 'goober'

export const FooterContainer = styled('footer')`
   width: 100vw;
   height: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 1.4rem;
   padding-bottom: 1.4rem;
   background-color: var(--palette-bgContrast);
   color: var(--palette-textMain);
   font-weight: 600;
   font-family: var(--fonts-secondary);
   font-size: 0.86rem;

   #copyright {
      width: 75vw;
      max-width: 1440px;
      height: fit-content;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      padding-top: 1.1rem;
      padding-bottom: 1.1rem;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.01rem;
      ::before {
         content: "";
         width: 100%;
         height: 0.1rem;
         border-radius: 1rem;
         display: block;
         background-color: var(--palette-accent3);
         margin-bottom: 1.2rem;
      }
   }

   #footerSubContainer {
      width: 75vw;
      max-width: 1440px;
      height: fit-content;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;
      padding-top: 1.1rem;
      padding-bottom: 1.1rem;
   }

   .footerContentSections {
      width: 250px;
      max-width: 74vw;
      overflow-wrap: break-word;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      font-size: 0.75rem;
      color: var(--palette-textMain);
      line-height: 1.3rem;
      margin: 0.5rem;
      span {
         display: inline-flex;
         justify-content: flex-start;
         align-items: center;
      }
      span[data-name="title"] {
         font-size: 0.9rem;
         font-weight: 700;
      }
   }

   svg {
      fill: var(--palette-accent3) !important;
      margin-right: 0.2rem;
      width: 1rem;
   }
   .horizontalLine {
      width: 1.5rem !important;
   }

   @media (max-width: 600px) {
      #footerSubContainer{
         width: 90vw;
      }
   }
`