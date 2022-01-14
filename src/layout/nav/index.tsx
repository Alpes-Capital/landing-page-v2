import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import { a, useSpring, config } from '@react-spring/web'

import type {PropsCombined as RoutesProps} from '@custom-types/routes'

import Logo from '@public/images/global/big_whitebg.svg'
import LogoMini from '@public/images/global/mini.svg'
import LinkCustom from './link'
import { 
   NavContainer, 
   NavSubSection,
   NavColorThemeButton,
   NavMiniMenuButton
} from './style'

type NavProps = {
   isDarkTheme: boolean,
   setTheme: Dispatch<SetStateAction<boolean>>,
   miniMenuState: boolean,
   setMiniMenu: Dispatch<SetStateAction<boolean>>,
   routes: RoutesProps 
}

const Nav: React.FC<NavProps> = ({isDarkTheme, setTheme, miniMenuState, setMiniMenu, routes}) => {
   //**** React-spring animation's configs 

   // Color theme button react-spring's animation props array 
   const animPropsColorThemeBTN = {
      dark: {
         rCTBtn: 9,
         transformCTBtn: "rotate(40deg)",
         cxCTBtn: 12,
         cyCTBtn: 4,
         opacityCTBtn: 0
      },
      light: {
         rCTBtn: 5,
         transformCTBtn: "rotate(90deg)",
         cxCTBtn: 30,
         cyCTBtn: 0,
         opacityCTBtn: 1
      },
      springConfig: { ...config.wobbly }
   };

   //Color theme button spring animation values 
   const { rCTBtn, transformCTBtn, cxCTBtn, cyCTBtn, opacityCTBtn } = animPropsColorThemeBTN[isDarkTheme? 'dark' : 'light']
   const svgSpring = useSpring({
      transform: transformCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })
   const moonSpring = useSpring({
      r: rCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })
   const maskSpring = useSpring({
      cx: cxCTBtn, cy: cyCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })
   const groupSpring = useSpring({
      opacity: opacityCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })

   //----
   //Burger button react-spring's animation props array 
   const animPropsBurgerBTN = {
      open: {
         yBurgBtn: -90,
         transformBurgBtn: 45,
      },
      close: {
         yBurgBtn: 0,
         transformBurgBtn: 0,
      },
      springConfig: {...config.default}
   }

   //Menu button spring animation values 
   const { yBurgBtn, transformBurgBtn } = animPropsBurgerBTN[miniMenuState? 'open' : 'close']
   const topSpringBurgBtn = useSpring({
      transform: `translateY(${-yBurgBtn}%)`,
      config: animPropsBurgerBTN.springConfig
   })
   const mid1SpringBurgBtn = useSpring({
      transform: `rotate(${-transformBurgBtn}deg)`,
      config: animPropsBurgerBTN.springConfig
   })
   const mid2SpringBurgBtn = useSpring({
      transform: `rotate(${transformBurgBtn}deg)`,
      config: animPropsBurgerBTN.springConfig
   })
   const botSpringBurgBtn = useSpring({
      transform: `translateY(${yBurgBtn}%)`,
      config: animPropsBurgerBTN.springConfig
   })

   //Checking if scrolled value from top has reached a certain limit
   //to be able to turn on the nav's background on the page
   const [reachedScrollVal, reachedScrollValSet] = useState(false)

   const windowCheck = typeof window !== "undefined"  
      ? window : false

   useEffect(() => {
      if(!windowCheck) return
      function onScroll() {
         //Checking if has scrolled pass limit 
         if(window.scrollY > (window.innerHeight/2)) reachedScrollValSet(true)
         else reachedScrollValSet(false)
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, [windowCheck])

   return (
      <>
         <NavContainer 
         data-scrolled={reachedScrollVal ? 'true' : 'false'} 
         data-mini-menu={miniMenuState ? 'true' : 'false'}
         role="navigation">
            <div id="background" />
            <Logo id="logo"/>
            <LogoMini id="logo-mini"/>
            <NavSubSection>
               {routes.map((route, index) => {
                  if(route.navShow) return (<LinkCustom
                     key={index}
                     href={route.path}
                     name={route.name}
                     subLinks={route.navSubLinks ? route.navSubLinks : undefined}
                  />)
               })}
               <NavMiniMenuButton 
               role='button'
               onClick={() => setMiniMenu(val => !val)}
               aria-label={`${miniMenuState ? `Close` : `Open`} mini page's menu`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" >
                     <a.rect y="9" x="5" width="90" height="6" rx="4" style={{...topSpringBurgBtn}} fill='var(--palette-textMain)' />
                     <a.rect y="37" x="5" width="90" height="6" rx="4" style={{...mid1SpringBurgBtn, transformOrigin: "center"}} fill='var(--palette-textMain)' />
                     <a.rect y="37" x="5" width="90" height="6" rx="4" style={{...mid2SpringBurgBtn, transformOrigin: "center"}} fill='var(--palette-textMain)' />
                     <a.rect y="65" x="5" width="90" height="6" rx="4" style={{...botSpringBurgBtn}} fill='var(--palette-textMain)' />
                  </svg>
               </NavMiniMenuButton>
               <NavColorThemeButton 
               role='button'
                  onClick={() => setTheme(val => !val)} 
                  aria-label={`Set color theme to ${!isDarkTheme? `dark.` : `light.`}`}>
                  <a.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgSpring}>
                     <mask id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <a.circle {...maskSpring} r="7" fill="black" />
                     </mask>
                     <a.circle {...moonSpring} cx="12" cy="12" 
                        fill='var(--palette-textMain)' mask="url(#moon-mask)" />
                     <a.g stroke='var(--palette-textMain)' style={groupSpring}>
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                     </a.g>
                  </a.svg>
               </NavColorThemeButton>
            </NavSubSection>
         </NavContainer>
      </>
   )
}

export default Nav