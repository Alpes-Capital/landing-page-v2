import { useState, useEffect, memo } from "react"
import usePersistentState from "@components/hooks/usePersistentState"
import styled from "styled-components"

import ReferenceLink from "@components/react-mini-components/ReferenceLink"

const Container = styled.div`
   flex-direction: column;
   align-items: stretch;
   justify-content: center;
   position: fixed;
   width: fit-content;
   max-width: 600px;
   height: fit-content;
   border-radius: 0.6rem;
   overflow: hidden;
   color: var(--palette-textMain);
   :before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--palette-bgContrast);
      backdrop-filter: var(--mods-blur);
      opacity: 0.9;
      z-index: var(--zIndex-cookiesPolicyCard) !important;
   }
   z-index: var(--zIndex-cookiesPolicyCard);
   sub{
      font-size: 0.8rem;
      font-weight: 600;
   }
   * {
      z-index: calc(var(--zIndex-cookiesPolicyCard) + 1);
   }
   sub{
      padding: 0.9rem;
   }
   button{
      width: fit-content;
      height: fit-content;
      background: var(--palette-accent2);
      justify-content: center;
      padding: 0.55rem 1.5rem;
      color: white;
      font-size: 0.8rem;
      font-weight: 400;
      font-family: var(--fons-secondary);
      border: none;
      border-radius: 0.3rem;
      transition: background 0.3s ease-in-out;
      cursor: pointer;
      :hover {
         background: linear-gradient(120deg, var(--palette-accent2) 37%, var(--palette-opaque-accent2) 100%);
      }
   }
   @media (min-width: 1920px),  (min-height: 1080px) {
      bottom: 3rem;
      right: 3rem;
   }
   @media (max-width: 1280px), (max-height: 1080px) {
      bottom: 2vh;
      right: 2vw;
   }
   @media (max-width: 950px), (max-height: 720px) {
      &&[data-show='true'] {
         transform: translateY(0);
         transition: transformY 0.3s ease-in-out;
      }
      &&[data-show='false'] {
         transform: translateY(200%);
         transition: transformY 0s ease-in-out;
      }
   }
   @media (max-width: 700px){
      width: calc(98vw - 0.8rem - 2vw);
   }
`

const MobileMiniVersion = styled.button`
   position: fixed;
   bottom: 0.9rem;
   margin-left: 5vw;
   width: 90vw;
   border: none;
   border-radius: 0.45rem;
   background: transparent;
   z-index: var(--zIndex-cookiesPolicyCard);
   overflow: hidden;
   cursor: pointer;
   :before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--palette-bgContrast);
      backdrop-filter: var(--mods-blur);
      opacity: 0.9;
      z-index: calc(var(--zIndex-cookiesPolicyCard));
   }
   #cookiesMiniCardContent {
      position: relative;
      width: 100%;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem;
      font-family: var(--fons-secondary);
      font-size: 1rem;
      font-weight: 400;
      color: var(--palette-textMain);
      z-index: calc(var(--zIndex-cookiesPolicyCard) + 1);
   }
   
   @media (min-width: 950px) and (min-height: 720px) {
      display: none !important;
   }

   @media (max-width: 950px), (max-height: 720px) {
      display: block;
      &&[data-show='true'] {
         transform: translateY(0);
         transition: transformY 0.3s ease-in-out;
      }
      &&[data-show='false'] {
         transform: translateY(200%);
         transition: transformY 0s ease-in-out;
      }
   }

   @media (max-width: 5500px), (max-width: 730px){
      #cookiesMiniCardContent {
         font-size: 0.86rem;
      }
   }        
`

const CookiesCard = () => {
   const [userAgreement, setUseAgreement] = usePersistentState(false, "user-cookies-agreed")
   const [showCard, setShowCard] = useState(false)
   const [showMiniSection, setShowMiniSection] = useState(true)

   useEffect(() => {
      setShowCard(!userAgreement)
   }, [userAgreement])

   return (
      <>
      <MobileMiniVersion 
      style={{ display: showCard ? 'flex' : 'none'}}
      data-show={showMiniSection ? 'true' : 'false'}
      onClick={() => setShowMiniSection(!showMiniSection)}>
         <span id='cookiesMiniCardContent'>
            ⚠️ Mais sobre a politica de cookies (aperte aqui!)
         </span>
      </MobileMiniVersion>
      <Container 
      data-show={!showMiniSection ? "true" : "false"}
      style={{ display: showCard ? 'flex' : 'none'}}>
         {showCard.toString()}
         <sub>
            Ao usar essa pagina você concorda com a nossa politica de privacidade/coleta de dados {"("}os chamados: cookies{")"}. <br/>
            Resumidamente os cookies coletados são somente dados sobre funcionamento/performance da pagina,<br/> e não são/serão usados para comercialização de modo algum.<br/>
            {"("}Além de serem totalmente anonimos{")"}
         </sub>
         <sub>
            Para mais detalhes clique aqui: <br/> 
            <ReferenceLink href="/site-and-cookies" title='Politica de Cookies'  />
         </sub>
         <sub>
            <button onClick={() => setUseAgreement(true)}>Entendi e concordo</button>
         </sub>
      </Container>
      </>
   )
}

export default CookiesCard