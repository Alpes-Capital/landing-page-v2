import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 95vw;
   margin-left: 2.5vw;
   margin-right: 2.5vw;
   padding-top: 5rem;
   padding-bottom: 5rem;
      
   && > sub {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;
      justify-content: center;
      padding-top: 2rem;
      padding-bottom: 5rem;
   }
   .twoLayers {
      position: relative;
      width: 100%;
      height: 100%;
      justify-content: center;
   }
   .twoLayers > .under {
      position: absolute;
      width: 100%;
      height: 100%;
      display: inline-flex;
      justify-content: space-between;
      align-items: stretch;
   }
   .twoLayers > .over {
      position: relative;
      z-index: 1;
   }

   .sectionTitle {
      display: inline-flex;
      width: 90%;
      padding-top: 1.5rem;
      padding-bottom: 0.3rem;
      font-family: 'Montserrat Alternates';
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--palette-textMain);
      justify-content: center;
      align-items: center;
   }

   @media (min-width: 2000px) {
      width: 1920px;
      margin-left: calc((100vw - 1920px) / 2);
      margin-right: calc((100vw - 1920px) / 2);
   }
`