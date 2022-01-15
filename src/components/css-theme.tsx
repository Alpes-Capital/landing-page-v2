import type { State } from '@hookstate/core'
import { useState, useEffect } from "react"
import { createState, useState as useStateGlobal } from '@hookstate/core'
import { makeCssThemeVars } from '@components/utils'

type ThemeType = Object
type ThemeProviderProps = {
   theme: ThemeType
   defaultTheme: ThemeType,
}

export type cssVarsRootProps = {
   cssTheme: string[]
}

const globalState = createState<Object>({})
const wrapState = (s: State<Object>) => ({
   get: () => s.value,
   set: (val: Object) => s.set(val)
})

/**
 * Makes css theme state global and accessible outside a component.
* @returns {get()} - The current css theme state
* @returns {set(Object)} - The css theme setter function.
* @example 
* const theme = accessCssTheme().get()
* accessCssTheme().set({pallete: {primary: '#ff0000'}})
*/
export const accessCssTheme = () => wrapState(globalState)

/**
 * Makes css theme state global and accessible inside a component as a hook.
* @returns {get() => Object} - The current css theme state.
* @returns {set(Object)} - The theme setter function.
* @example 
* const theme = useCssTheme().get()
* const setCssTheme = useCssTheme().set
*/
export const useCssTheme = () => wrapState(useStateGlobal(globalState))


/*
* @param {Object | Array} theme 
* Receives an object or an array of objects and creates a provider with the inserted theme
* as CSS values
*/
const CssThemeProvider: React.FC<ThemeProviderProps> = ({ theme, defaultTheme }) => {
   
   //* Function to update global theme state values
   const setCssTheme = useCssTheme().set

   //* State with theme in css var format
   const [cssTheme, setCssPalette] = useState(() => makeCssThemeVars(defaultTheme, true))
   
   //*Updates css vars state when theme value changes
   useEffect(() => {
      setCssTheme(theme)
      setCssPalette(makeCssThemeVars(theme, true))
   }, [theme])

   //*Actual provider with themeContainer HTML id so values can be latter accessed inside javascript as a function
   //? you can include if you will a custom global style, that 
   return (
      <style jsx global>{`
         :root {
            ${cssTheme.map(t => t).join('\n')}
         }
    `}</style>
   )
}

export default CssThemeProvider