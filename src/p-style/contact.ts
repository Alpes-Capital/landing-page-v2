import styled from 'styled-components'

export const ContactForm = styled.form`
   max-width: 90%;
   width: max-content;
   display: flex;
   flex-direction: column;
   align-items: stretch;
   justify-content: center;
   gap: 2.5rem;
   background-color: var(--palette-bgContrast);
   border-radius: 0.5rem;
   padding: 1.2rem;
   .inputsContainer {
      display: inline-flex;
      justify-content: stretch;
      align-items: stretch;
      gap: 4.5rem;
      flex-wrap: wrap;
   }
   section {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex-grow: 1;
   }
   section > label {
      margin-top: 0.5rem;
      margin-bottom: 0.2rem;
      font-size: 0.93rem;
      font-weight: 600;
      color: var(--palette-textMain);
   }
   section > input, section > textarea {
      border-radius: 0.3rem;
      padding: 0.6rem;
      padding-left: 1.1rem;
      padding-right: 1.1rem;
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--palette-textMain);
      background-color: var(--palette-background);
      box-shadow: inset 0px 0px 10px 6px rgba(0,0,0,0.01);
      font-family: var(--fonts-secondary);
      border: 2px solid #00000000;
   }
   section > textarea {
      width: 100%;
      min-width: 350px;
      min-height: 230px;
      flex-grow: 1;
      resize: vertical;
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 1.1rem;
   }
   button {
      border: none;
      border-radius: 0.3rem;
      padding: 0.6rem;
      padding-left: 1.1rem;
      padding-right: 1.1rem;
      font-size: 0.93rem;
      font-weight: 600;
      color: var(--palette-textInverse);
      background-color: var(--palette-accent3);
      cursor: pointer;
      transition: color background-color 0.2s;
   }
   button:hover {
      background-color: var(--palette-background);
      color: var(--palette-accent3);
   }
   
   input[data-error='true'], textarea[data-error='true'] {
      border: 2px solid var(--palette-userAdvise-warning);
   }
      
`