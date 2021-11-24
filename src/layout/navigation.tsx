import { useState, useCallback } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import Nav from './nav'
import MiniNav from './mini-nav'
import type {PropsCombined as RouteProps} from '@routes'


type Props = {
   isDarkTheme: boolean,
   toggleDarkTheme: Dispatch<SetStateAction<boolean>>,
   routes: RouteProps
}

export const NavigationAssemble: React.FC<Props> = ({routes, isDarkTheme, toggleDarkTheme}) => {
   const [miniMenu, miniMenuSet] = useState(false)

   return (
   <>
      <Nav 
      routes={routes}
      isDarkTheme={isDarkTheme}
      setTheme={toggleDarkTheme}
      miniMenuState={miniMenu} 
      setMiniMenu={miniMenuSet} />
      <MiniNav 
      routes={routes}
      active={miniMenu} />
   </>
   )  
}

export default NavigationAssemble