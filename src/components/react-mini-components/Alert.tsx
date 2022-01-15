import type { State } from '@hookstate/core'
import { styled } from 'goober'
import { createState, useState } from '@hookstate/core'
import { a, useSpring, config } from 'react-spring'

let timeout: NodeJS.Timeout

const Container = styled(a.div)`
   position: fixed;
   width: 100vw;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: var(--zIndex-alertCard);
   sub{
      position: relative;
      margin-top: calc(6rem + 5vh);
      max-width: 500px;
      max-height: 75vh;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      overflow: hidden;
      overflow: hidden;
      border-radius: 0.3rem;
      border: 1.5px solid var(--palette-userAdvise-neutral);
      span{
         padding: 0.3rem;
         padding-left: 1rem;
         padding-right: 1rem;
         z-index: calc(var(--zIndex-alertCard) + 1);
         font-size: 0.9rem;
         font-family: var(--fonts-secondary);
         font-weight: 500;
      }
      &&:before{
         display: block;
         content: '';
         position: absolute;
         width: 100%;
         height: 100%;
         background: var(--palette-opaque-background);
         backdrop-filter: var(--mods-blur);
         opacity: 0.8;
      }
   }
   &[data-alert-type='success']{
      sub{
         border: 2px solid var(--palette-userAdvise-success);
         &&:before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-success) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   &[data-alert-type='error']{
      sub{
         border: 2px solid var(--palette-userAdvise-error);
         &&:before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-error) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   &[data-alert-type='warning']{
      sub{
         border: 2px solid var(--palette-userAdvise-warning);
         &&:before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-warning) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   &[data-alert-type='info']{
      sub{
         border: 2px solid var(--palette-userAdvise-info);
         &&:before{
            background: linear-gradient(124deg, 
               var(--palette-userAdvise-info) 0%, 
               var(--palette-opaque-background) 100%);
         }
      }
   }
   
`

type AlertProps = {
   alert: string
   alertType: 'success' | 'warning' | 'error' | 'info' | 'neutral'
   display: boolean
}

const globalState = createState<AlertProps>({alert: '', alertType: 'neutral', display: false})
const wrapState = (s: State<AlertProps>) => ({
   get: () => s.value,
   set: (val: AlertProps) => s.set(val)
})


/**
 * Makes the alert component state global and accessible outside a component. Will automatically fade out after 7 seconds.
* @returns {get()} - The cyrrent alert state
* @returns {set({alert: string, alertType: 'success' | 'warning' | 'error' | 'info' | 'neutral', display: boolean})} - The setter function.
* @example 
* const { alert, alertType, display } = accessAlertState().get()
* accessAlertState().set({alert: 'Eureca!!!!', alertType: 'success', display: true})
*/
export const accessAlertState = () => wrapState(globalState)

/**
 * Makes the alert component state global and accessible inside a component as a hook. Will automatically fade out after 7 seconds.
* @returns {get()} - The cyrrent alert state
* @returns {set({alert: string, alertType: 'success' | 'warning' | 'error' | 'info' | 'neutral', display: boolean})} - The setter function.
* @example 
* const { alert, alertType, display } = useAlertState().get()
* const useSetAlert = useAlertState().set
*/
export const useAlertState = () => wrapState(useState(globalState))

//* Alert React component
const AlertComponent = () => {
   const { alert, alertType, display } = useAlertState().get()
   const toggleAlertDisplay = useAlertState().set

   const alertComponentSpring = useSpring({
      opacity: display ? 1 : 0,
      transform: display ? 'translateY(0)' : 'translateY(-40px)',
      shouldDisplay: display ? 1 : 0,
      config: {...config.wobbly},
      onRest: () => {
         if(display){
            clearTimeout(timeout)
            timeout = setTimeout(() => 
               toggleAlertDisplay({alert, alertType, display: false}), 7000)
         }
      }
   })

   return (
      <Container
      style={{...alertComponentSpring, display: alertComponentSpring
         .shouldDisplay.to(shouldDisplay => shouldDisplay ? 'flex' : 'none')}}
      data-alert-type={alertType}>
         <sub>
            <span>{alert}</span>
         </sub>
      </Container>
   )
}

export default AlertComponent