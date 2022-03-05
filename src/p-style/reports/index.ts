import styled from "styled-components"

export const MainReportTitle = styled.div`
   max-width: 100%;
   width: 900px;
   background-color: var(--palette-bgContrast);
   border-radius: 0.4rem;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   padding: 0.4rem;
   padding-left: 0.7rem;
   padding-right: 0.7rem;
   flex-wrap: nowrap;
   margin-bottom: 2rem;
   span {
      color: var(--palette-textMain);
      max-width: 50%;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: var(--fonts-secondary);
      display: inline-flex;
      white-space: nowrap; 
      overflow: hidden;
   }
   button, a {
      max-width: 50%;
      border-radius: 0.4rem;
      background-color: var(--palette-accent3);
      color: var(--palette-constant-white);
      border: none;
      padding: 0.45rem;
      padding-left: 0.7rem;
      padding-right: 0.7rem;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
   }
`

export const ReportsList = styled.div`
   width: 100%;
   max-width: 1920px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   .title {
      width: 100%;
      max-width: 1920px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: var(--palette-textMain);
      font-size: 1.3rem;
      font-family: var(--fonts-secondary);
      font-weight: 500;
      margin-bottom: 5rem;
   }
   sub {
      width: 100%;
      max-width: 1500px;
      display: inline-grid;
      grid-template-columns: repeat(auto-fill, 400px);
      justify-content: center;
      gap: 2rem;
      padding: 1rem;
      .reportCard {
         width: 400px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: stretch;
         padding: 1.4rem;
         border-radius: 0.4rem;
         background-color: var(--palette-bgContrast);
         text-decoration: none;
         text-decoration-color: none;
         color: var(--palette-textMain);
         cursor: pointer;
         .reportTitle {
            font-size: 1rem;
            font-weight: 500;
            font-family: var(--fonts-secondary);
            color: var(--palette-accent3);
         }
         .bottomSection {
            display: inline-flex;
            justify-content: space-between;
            align-items: stretch;
            margin-top: 1.2rem;
            width: 100%;
         }
         .openReport {
            transition: opacity 0.3s;
            font-weight: 600 !important;
         }
         .reportDate, .openReport {
            width: 50%;
            font-size: 0.9rem;
            font-weight: 400;
            font-family: var(--fonts-primary);
            color: var(--palette-textMain);
            display: flex;
            align-items: flex-end;
         }
         .reportDate {
            text-align: end;
            justify-content: flex-end;
         }
      }
      .reportCard:hover {
         .openReport{
            opacity: 0.5;
         }
      }
   }
`