import { useEffect, useState } from 'react'
import { Illustration, Shape } from 'zdog'

let illusAnimReload: NodeJS.Timeout
const windowCheck = typeof window !== "undefined"  
? window : false


//? Creating illustration in a separated sub component to prevent
//? prevent animation from stopping when spring changes value
const IllustrationDefaultComponent = () => {
   const [illusAnimState, illusAnimStateSet] = useState<boolean>(true)

   useEffect(() => {
      if(!windowCheck) return

      //* Animated 3D alpes's logo in header
      const headerZdogIllustration = new Illustration({
         // set canvas with selector
         element: '.headerZdogIllustration',
         zoom: 3.2,
         // enable rotating scene with dragging
         dragRotate: true,
         onDragStart: () => {
            illusAnimStateSet(false)
            if(!illusAnimState) {
               if(illusAnimReload) clearTimeout(illusAnimReload)
               if(!illusAnimReload) illusAnimReload = setTimeout(() => {
                  headerZdogIllustration.rotate.x = 0
                  headerZdogIllustration.rotate.y = 0
                  headerZdogIllustration.rotate.z = 0
                  illusAnimStateSet(true)
               }, 6000)
            }
         },
      });
      
      new Shape({
         addTo: headerZdogIllustration,
         path: [ // triangle
            { x: 60, y: -40 },
            { x: 60, y:  40 },
            { x: -20, y:  40 },
         ],
         // closed by default
         stroke: 15,
         fill: true,
         translate: { z: 8 },
         color: '#8DA0E295'
      });

      new Shape({
         addTo: headerZdogIllustration,
         path: [ // triangle
            { x: 20, y: -40 },
            { x: 20, y:  40 },
            { x: -60, y:  40 },
         ],
         // closed by default
         stroke: 15,
         fill: true,
         color: '#8DA0E295'
      });
      
      let ticker = 0
      function animate() {

         if(illusAnimState) {
            headerZdogIllustration.rotate.y = Math.cos(ticker / 80) * Math.PI/8 
            headerZdogIllustration.rotate.z = Math.cos(ticker / 90) * 0.06 
            
            headerZdogIllustration.translate.y = -Math.cos(ticker / 60) * 3
         }

         ticker++;
         headerZdogIllustration.updateRenderGraph();
         requestAnimationFrame( animate );
      }
      
      animate();         
   }, [illusAnimState])

   return <svg className="headerZdogIllustration" width="500" height="500"></svg>
}

export default IllustrationDefaultComponent