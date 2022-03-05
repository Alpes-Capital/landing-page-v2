//import Lottie from "lottie-react"
import { useEffect, useState } from "react"

type Props = {
   errorCode: 404 | 500 | number
}

const Lottie: React.FC<Props> = ({errorCode}) => {
   const [lottieComp, setLottie] = useState<JSX.Element | null>(null)

    useEffect(() => {
      async function LoadLottie() {
         const options = {
            animationData: errorCode === 404 ? 
               (await import('@public/lotties/404-error.json')) :  (await import('@public/lotties/500-error.json')),
            loop: true,
            autoplay: true,
            className: 'Lottie',
         }
   
         await import('lottie-react').then(({ default: Lottie }) => {
            setLottie(<Lottie 
               animationData={options.animationData} 
               loop={options.loop}
               autoplay={options.autoplay}
               className={options.className}
            />)
         })
      }

      LoadLottie()
   }, [errorCode])

   return lottieComp
}

export default Lottie