import styled from "styled-components"
import { a } from '@react-spring/web'

//* Main links style

export const CustomLinkContainer = styled(a.div)`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;
   height: fit-content;
   background-color: var(--palette-accent3);
   backdrop-filter: opacity(0.2);
   border-radius: 0.35rem;
   overflow: hidden;
   margin-top: 0.3rem;
   margin-bottom: 0.3rem;
   max-width: 760px;
`

type CustomLinkProps = {
   hasSubLink?: boolean
}

export const CustomLinkStyle = styled.div<CustomLinkProps>`
   display: inline-flex;
   align-items: stretch;
   justify-content: flex-start;
   width: 100%;
   height: fit-content;
   background-color: var(--palette-background);
   padding-top: ${props => !props.hasSubLink ? '0.42rem' : '0rem'};
   padding-bottom: ${props => !props.hasSubLink ? '0.42rem' : '0rem'};
   border-radius: 0.35rem;
   #clickable-text {
      display: inline-flex;
      align-items: center;
      flex-grow: 1;
      padding-left: 0.4rem;
      text-decoration: none;
      color: var(--palette-textMain);
      svg {
         margin-right: 0.5rem;
         width: 1rem;
         height: 1rem;
      }
   }
`

export const SubLinkToggle = styled.button`
   display: inline-flex;
   align-items: center;
   padding: 0.4rem;
   background-color: var(--palette-accent3);
   color: var(--palette-text-inverse);
   width: fit-content;
   padding-right: 0.4rem;
   margin: 0.2rem;
   border-radius: 0.35rem;
   font-size: 0.8rem;
   box-shadow: none;
   border: none;
   svg {
      margin-left: 0.5rem;
      width: .9rem;
      height: .9rem;
   }
   cursor: zoom-in;
`

//* All about subLinks 

type SubLinksContainerProps = {
   isOpen?: boolean
}

export const SubLinkContainer = styled.div<SubLinksContainerProps>`
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;
   height: ${props => props.isOpen ? 'fit-content' : '0px'};
   overflow: hidden;
`

export const SubLinkStyle = styled.a.attrs({
   marginSides: '1rem',
   marginTopBottom: '.4rem',
})`
   display: inline-flex;
   position: relative;
   align-items: center;
   justify-content: flex-start;
   width: ${props => `calc(100% - ${props.marginSides})`};
   margin: ${props => props.marginTopBottom};
   margin-left: ${props => props.marginSides};
   padding-top: 0.2rem;
   padding-bottom: 0.2rem;
   margin-right: ${props => props.marginSides};
   height: fit-content;
   background: transparent;
   color: var(--palette-textMain);
   text-decoration: none;
   font-size: 0.86rem;
   svg {
      margin-right: 0.5rem;
      width: 1rem;
      height: 1rem;
   }
`
