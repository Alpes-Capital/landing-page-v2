import Image from 'next/image'
import styled from 'styled-components'

interface IconTypeSvgProps {
   iconType: 'svg'
   IconSource: any
}

interface IconTypeImgProps {
   iconType: 'img' | 'sourceData' | 'url'
   IconSource: string | StaticImageData
}

type ComponentProps = (IconTypeSvgProps | IconTypeImgProps) & {
   alt?: string,
   text: string,
   url: string,
}

export const Container = styled.a`
   width: fit-content;
   min-width: 4rem;
   height: 1.8rem;
   display: inline-flex;
   justify-content: flex-start;
   align-items: center; 
   border-radius: 0.36rem;
   padding-left: 0.7rem;
   padding-right: 0.7rem;
   background-color: var(--palette-background);
   backdrop-filter: blur(10px);
   margin: 0.3rem;
   .title {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--palette-textMain);
      text-decoration: none;
      margin-left: 0.6rem; 
   }
   img{
      width: 1.25rem !important;
      height: 1.25rem !important;
   }
`

const SocialCard: React.FC<ComponentProps> = ({iconType, IconSource, text, url, alt}, ...props) => {
   return (
      <>
         <Container href={url} {...props}>
            {iconType === 'svg' && 
               <IconSource alt={alt ? `Ilustração de card social para ${alt}.` : 
               'Ilustração de card social para visitar uma de nossas redes!'}  />
            }
            {(iconType === 'img' || iconType === 'sourceData' || iconType === 'url') &&
               <Image width="1.4rem" height="1.4rem" src={IconSource}
                  alt={alt ? `Ilustração de card social para ${alt}.` : 
                  'Ilustração de card social para visitar uma de nossas redes!'} 
               />
            }
            <span className='title'>{text}</span>
         </Container>
      </> 
   )
}

export default SocialCard