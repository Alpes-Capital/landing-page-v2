import styled from 'styled-components'
import { Container as ContainerGlobal } from '@p-styles/global'

export const IframeContainer = styled.div`
   width: 500px;
   height: 300px;
   border: 1px solid var(--palette-opaque-accent3);
   border-radius: 0.7rem;
   overflow: hidden;
`

export const Container = styled(ContainerGlobal)`
   #video-description-card {
      @media (max-width: 830px) {
         width: 500px;
         max-width: 100%;
         margin: 0px;
         margin-top: 1.5rem;
      }
   }
`

/*
export const AlpesStory = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   .storyStart {
      width: 100%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;   
   }
   .storyStart > span {
      font-family: 'Montserrat';
      font-size: 1.25rem;
      font-weight: 600;
   }
   .storyEnd {
   }
`

export const StorySection = styled.section`
   display: inline-flex;
   flex-wrap: nowrap;
   width: 100%;
   .illustration {

   }
   .description {

   }
   .storyContinuity {
   }  
`
*/