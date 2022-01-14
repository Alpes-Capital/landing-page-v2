import { styled } from 'goober'

export const MainSubContainer = styled('sub')`
   width: 50%;
   .ngoPageVidIframeDiv {
      border-radius: 0.6rem;
      margin-right: 1rem;
      overflow: hidden;
      margin: 0.8rem;
      flex-grow: 3;
      iframe {
         width: 100%;
         height: 100%;
      }
   }
   .ngoPageDescriptionCard {
      flex-grow: 1;
   }
   @media (max-width: 1650px) { width: 70%; }
   @media (max-width: 1500px) { width: 90%; }
   @media(max-width: 800px) {
      width: 80%;
      .ngoPageVidIframeDiv, .ngoPageDescriptionCard {
         flex-grow: 1;
      }
      .ngoPageVidIframeDiv {
         width: 560px; 
         height: 310px;
      }
   }
`
