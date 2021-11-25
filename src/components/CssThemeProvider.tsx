import { useState, useEffect } from "react"
import { makeCssThemeVars } from '@components/utils'

type ThemeProviderProps = {
   theme: Array<any> | Object
   defaultTheme: Array<any> | Object
}

/*
* @param {Object | Array} theme 
* Receives an object or an array of objects and creates a provider with the inserted theme
* as CSS values
*/
const CssThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme, defaultTheme }) => {
   //* State with theme in css var format
   const [cssTheme, setCssPalette] = useState<React.CSSProperties>(makeCssThemeVars(defaultTheme))
      
   //*Updates css vars state when theme value changes
   useEffect(() => setCssPalette(makeCssThemeVars(theme)), [theme])

   //*Actual provider with themeContainer HTML id so values can be latter accessed inside javascript as a function
   //TODO Add js get theme value function
   return (
      <div id="themeContainer" style={cssTheme}>
         {children}
      </div>
   )
}

export default CssThemeProvider