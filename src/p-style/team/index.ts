import styled from 'styled-components'
import { a } from '@react-spring/web'

export const Graph = styled.sub`
   display: inline-flex;
   justify-content: space-between !important;
   align-items: stretch;
   flex-wrap: nowrap;
   width: 100%;
   max-width: 600px;
   position: relative;
   .arrow {
      display: inline-flex;
      flex-grow: auto;
      flex-grow: 2;
      justify-content: center;
      align-items: center;
      svg {
         width: 100%;
         height: 35px;
      }
   }
   .bigDivisions {
      flex-grow: 1 2 auto;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: stretch;
      background-color: var(--palette-bgContrast);
      border-radius: 0.6rem;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      margin: 0.8rem;
      .section {
         width: 100px;
         height: 100px;
         font-size: 0.9rem;
         font-weight: 500;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 3.7rem;
         padding-left: 4rem;
         padding-right: 4rem;
         margin: 0.8rem;
         margin-top: 0.5rem;
         margin-bottom: 0.5rem;
         border-radius: 0.6rem;
         background-color: var(--palette-accent3);
         color: var(--palette-constant-white);
         cursor: pointer;
      }
   }
`

export const Details = styled(a.sub)`
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 1.4rem !important;
   padding-bottom: 1.4rem !important;
   border-radius: 0.6rem;
   max-width: 600px;
   height: min-content !important;
   background-color: var(--palette-bgContrast);
   .title {
      font-family: 'Montserrat Alternates';
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--palette-accent3);
   }
   .description {
      font-family: 'Montserrat';
      font-size: 0.84rem;
      font-weight: 400;
      color: var(--palette-textMain);
      margin-top: 0.9rem;
   }
   .tip {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      font-size: 0.75rem;
      font-weight: 400;
      margin-top: 0.9rem;
   }
`