import type { Dispatch, SetStateAction } from 'react'

import { memo, useState } from 'react'
import { config, useSpring, useTrail } from '@react-spring/web'

import type {PropsCombined as RouteProps} from '@custom-types/routes'

import CustomLink from './link'
import { Container } from './style'

type MiniNavProps = {
   active: boolean
   setMiniMenu: Dispatch<SetStateAction<boolean>>
   routes: RouteProps
}

const MiniNav: React.FC<MiniNavProps> = ({active, routes, setMiniMenu }) => {
   
   //* Control which of the subLinks menus are open
   const [subLinkOpenI, setSubLinkOpenI] = useState<string|false>(false)
   
   //* Elements spring animations configs and functions
   
   const ContainerSpring = useSpring({
      width: active ? '100vw' : '0%',
      height: active ? '100vh' : '0',
      left: active ? '0%' : '100vw',
      shouldDisplay: active ? 1 : 0,
      borderBottomLeftRadius: active ? '0' : '150%',
      config: { ...config.wobbly, duration: 200 },
      delay: active ? 0 : routes.length/3 * 50,
   })
   
   const linksTrail = useTrail(routes.length, {
      opacity: active ? 1 : 0,
      transform: `translateY(${active ? 0 : 40}px)`,
      from: { opacity: 0, transform: `translateY(${40})` },
      config: { ...config.stiff, duration: active ? 300 : 50 },
      delay: active ? 200 : 0,
   }) 

   return (
      <Container 
      role="menubar"
      active={active ? 1 : 0} 
      style={{...ContainerSpring, 
         display: ContainerSpring
            .shouldDisplay
            .to((shouldDisplay) => shouldDisplay === 0 ? 'none' : 'initial')
         }}>
         <div id="content">
            {routes.map((route, i) => {
               if(!route.navShow) return
               if(route.navSubLinks && route.navSubLinks.length > 0) {
                  return (
                     <CustomLink
                        closeMiniNav={setMiniMenu}
                        styles={{...linksTrail[i]}}
                        key={i}
                        href={route.path}
                        title={route.name}
                        subLinks={route.navSubLinks}
                        openState={(subLinkOpenI && subLinkOpenI === (route.path + '-' + i).toString())? true : false}
                        openMenu={() => setSubLinkOpenI(val => val === (route.path + '-' + i).toString() ? 
                           false : (route.path + '-' + i).toString())}
                     />
                  )
               } else {
                  return (
                     <CustomLink
                        closeMiniNav={setMiniMenu}
                        styles={{...linksTrail[i]}}
                        key={i}
                        href={route.path}
                        title={route.name}
                     />
                  )
               }
            })}
         </div>
      </Container>
   );
}

export default memo(MiniNav)