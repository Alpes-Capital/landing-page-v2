
import { useState } from 'react'
import Link from 'next/link'
import { styled } from 'goober'
import { a, useSpring, config } from 'react-spring'

import OutsideSourceIcon from '@icons/externalLinksIcons8.svg'

export const Container = styled('div')`
   width: fit-content;
   height: fit-content;
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center; 
   align-items: flex-start;
   margin-top: 0.3rem;
   margin-bottom: 0.3rem;
   a{
      color: var(--palette-textMain);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      text-decoration: none;
      padding: 0.1rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      border-radius: 0.3rem;
      svg{
         width: 16px !important;
         height: 16px !important;  
         margin-right: 0.3rem;
      }
      &&:hover{
         background-color: var(--palette-background);
         cursor: pointer;
      }
   }
   span{
      font-size: 0.68rem;
      font-style: italic;
   }
   .hiddenDescription {
      position: absolute;
      display: block;
      top: calc(100% + 0.3rem);
      background-color: var(--palette-background);
      border-radius: 0.3rem;
      left: 0.3rem;
      z-index: calc(var(--zIndex-navMaster) - 1);
      padding: 0.4rem;
      padding-top: 0.07rem;
      padding-bottom: 0.07rem;
      width: max-content;
   }
`

interface ReferenceLinkProps {
   href: string
   title: string
   alt?: string
   rel?: 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag'
   hideArrow?: boolean
   optionalDescription?: string
   hiddenDescription?: true
   goesOutside?: boolean
}


const ReferenceLinkComponent: React.FC<ReferenceLinkProps> = ({
   title, alt, rel, hideArrow, href, optionalDescription, hiddenDescription, goesOutside
   }) => {

   const [hidden, setHidden] = useState(false)
   
   const hiddenDescriptionSpring = useSpring({
      opacity: hidden ? 1 : 0,
      transform: hidden ? 'translateY(0)' : 'translateY(10px)',
      shouldDisplay: hidden ? 1 : 0,
      config: {
         ...config.stiff
      }
   })
      
   return (
      <Container
      onMouseOver={() => setHidden(true)}
      onMouseOut={() => setHidden(false)}>
         {goesOutside && 
            <a aria-label={alt ? alt : 'Link para uma fonte externa do nosso site'} 
            rel={rel ? `${rel} external nofollow` : 'external nofollow'} href={href}>
               <OutsideSourceIcon /> {title}
            </a>
         }
         {!goesOutside && 
            <Link href={href} passHref>
               {(hideArrow) ? 
                  <a aria-label={alt ? alt : 'Link que direciona a um recurso interno do site'} 
                  rel={rel ? rel : 'alternate'}>{title}</a> 
               : 
                  <a aria-label={alt ? alt : 'Link que direciona a um recurso interno do site'} 
                  rel={rel ? rel : 'alternate'}>&#8594; {title}</a>
               }
            </Link>
         }
         {(optionalDescription && !hiddenDescription) && <span>{optionalDescription}</span>}
         {(optionalDescription && hiddenDescription) && 
            <a.div className="hiddenDescription"
            style={{...hiddenDescriptionSpring, display: hiddenDescriptionSpring
               .shouldDisplay
               .to((shouldDisplay) => shouldDisplay === 0 ? 'none' : 'flex')}}>
               {optionalDescription}
            </a.div>
         }
      </Container>
   )
}

export default ReferenceLinkComponent