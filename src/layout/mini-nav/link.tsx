import type { Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

import {
   CustomLinkContainer,
   CustomLinkStyle,
   SubLinkToggle,
   SubLinkContainer,
   SubLinkStyle
} from './link-style'

interface LinkProps {
   href: string,
   title: string,
   styles?: any,
   closeMiniNav: Dispatch<SetStateAction<boolean>>,
}

type WithSubDirLinkProps = { 
    openState: boolean, 
    subLinks: Array<{ href: string, title: string, }>,
    openMenu: () => void,
} | { 
   openState?: never, 
   subLinks?: never,
   openMenu?: never,
}

type Props = LinkProps & WithSubDirLinkProps

const CustomLink: React.FC<Props> = ({ href, title, subLinks, openState, openMenu, styles, closeMiniNav }) => {

   return (
      <CustomLinkContainer style={{...styles}}>
         <CustomLinkStyle hasSubLink={(subLinks && subLinks?.length >= 0)}>
            <Link href={href} passHref>
               <a id="clickable-text" 
               onClick={() => closeMiniNav(false)}
               role="link">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="96" height="96"
                  viewBox="0 0 48 48"
                  fill='var(--palette-textMain)'><path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 34.470703 11.986328 A 1.50015 1.50015 0 0 0 34.308594 12 L 23.5 12 A 1.50015 1.50015 0 1 0 23.5 15 L 30.878906 15 L 15.439453 30.439453 A 1.50015 1.50015 0 1 0 17.560547 32.560547 L 33 17.121094 L 33 24.5 A 1.50015 1.50015 0 1 0 36 24.5 L 36 13.689453 A 1.50015 1.50015 0 0 0 34.470703 11.986328 z"></path></svg>
                  {title}
               </a>
            </Link>
            {(subLinks && openMenu) && 
               <SubLinkToggle 
               onClick={() => openMenu()}>
                  Sub-diretorios
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="96" height="96"
                  viewBox="0 0 48 48"
                  fill='var(--palette-textInverse)'><path d="M 8.5 6 A 1.50015 1.50015 0 1 0 8.5 9 L 24 9 C 24.699113 9 25.086779 9.2219139 25.421875 9.6269531 C 25.756971 10.031992 26 10.687714 26 11.5 L 26 36.878906 L 15.560547 26.439453 A 1.50015 1.50015 0 0 0 14.484375 25.984375 A 1.50015 1.50015 0 0 0 13.439453 28.560547 L 26.439453 41.560547 A 1.50015 1.50015 0 0 0 28.560547 41.560547 L 41.560547 28.560547 A 1.50015 1.50015 0 1 0 39.439453 26.439453 L 29 36.878906 L 29 11.5 C 29 10.103286 28.597029 8.7575544 27.734375 7.7148438 C 26.871721 6.6721329 25.509887 6 24 6 L 8.5 6 z"></path></svg>
               </SubLinkToggle>
            }
         </CustomLinkStyle>
         {subLinks && 
            <SubLinkContainer isOpen={openState}>
               {subLinks.map((subLink, index) => (
                  <Link href={href + subLink.href} 
                  passHref key={index}>
                     <SubLinkStyle key={index}
                     onClick={() => closeMiniNav(false)}
                     role="link">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="96" height="96"
                        viewBox="0 0 48 48"
                        fill='var(--palette-textMain)'><path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 34.470703 11.986328 A 1.50015 1.50015 0 0 0 34.308594 12 L 23.5 12 A 1.50015 1.50015 0 1 0 23.5 15 L 30.878906 15 L 15.439453 30.439453 A 1.50015 1.50015 0 1 0 17.560547 32.560547 L 33 17.121094 L 33 24.5 A 1.50015 1.50015 0 1 0 36 24.5 L 36 13.689453 A 1.50015 1.50015 0 0 0 34.470703 11.986328 z"></path></svg>
                        {subLink.title}
                     </SubLinkStyle>
                  </Link>
               ))}
            </SubLinkContainer>
         }
      </CustomLinkContainer>
   )
}


export default CustomLink