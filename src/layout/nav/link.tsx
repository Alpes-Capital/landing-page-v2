import { memo, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { SpringValues } from '@react-spring/web'
import { config, useSpring } from '@react-spring/web'

import { 
   LinkContainer, 
   LinkText,
   SubLinksContainer,
   SubLinkItem
} from './link-style'


type LinkProps = {
   href: string
   name: string
   subLinks?: Array<{
      title: string,
      href: string,
   }>
}

const LinkCustom: React.FC<LinkProps> = ({ href, name, subLinks }) => {
   const [isOpen, setIsOpen] = useState(false)
   const [offsetState, offsetStateSet] = useState<number>(0)

   const containerRef = useRef<HTMLDivElement>(null)
   const subContainerRef = useRef<HTMLDivElement>(null)

   const subMenuSpring = useSpring({
      transform: isOpen ? 
         'translateY(0)' : 
         'translateY(-2rem)',
      opacity: isOpen ? 1 : 0,
      shouldDisplay: isOpen ? 1 : 0,
      config: { ...config.stiff },
   }) as SpringValues<{ opacity: number; transform: string; shouldDisplay: number }>

   let windowInnerWidth = typeof window !== 'undefined' 
      ? window.innerWidth : 0

   useEffect(() => {
      if(!window || !containerRef.current || !isOpen || !subLinks) return

      //? As the subLinks menu is inside a parent component which width is lower than it's width
      //? we must first get the subLinks ref's width and then in the line underneath we then get
      //? the parent's left offset as the following will be relative to the window meanwhile the subLinks
      //? component is relative to the parent (that should be 0)
      let componentWidth = subContainerRef.current ? subContainerRef.current.offsetWidth : 0
      let offsetLeft = containerRef.current ? containerRef.current.offsetLeft : 0

      let windowPaddingLeft = (windowInnerWidth * 0.02)
      let windowWithPaddingRight = windowInnerWidth - (windowInnerWidth * 0.02)
      
      //? Checking now if the component overflows the screen 
      if(offsetLeft + componentWidth 
         > windowWithPaddingRight) offsetStateSet(windowWithPaddingRight - (offsetLeft + componentWidth))
      else if(offsetLeft < windowPaddingLeft) offsetStateSet(-(windowPaddingLeft - offsetLeft))
      else offsetStateSet(0)
   }, [windowInnerWidth, subLinks, isOpen])

   return (
      <LinkContainer ref={containerRef}>
         <Link href={href} passHref>
            {subLinks ? 
            (<LinkText
               role="link"
               onMouseOut={() => setIsOpen(false)}
               onMouseOver={() => setIsOpen(true)}
               isActive={isOpen}>
               <span>{name}</span>
            </LinkText>)
            : (<LinkText><span>{name}</span></LinkText>) }
         </Link>
         {subLinks && (
            <SubLinksContainer 
            ref={subContainerRef}
            style={{...subMenuSpring, translateX: offsetState.toString() + 'px',
               display: subMenuSpring
                  .shouldDisplay
                  .to((shouldDisplay) => shouldDisplay === 0 ? 'none' : 'initial') 
            }}
            onMouseOut={() => setIsOpen(false)}
            onMouseOver={() => setIsOpen(true)}>
               <div className='content'>
               {subLinks.map((subLink, index) => (
                  <Link href={`${href}${subLink.href}`} passHref key={index}>
                     <SubLinkItem role="link" key={index}>{subLink.title}</SubLinkItem>
                  </Link>
               ))}
               </div>
            </SubLinksContainer>
         )}
      </LinkContainer>

   )
}

export default memo(LinkCustom)