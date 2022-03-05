import Image from 'next/image'
import styled from 'styled-components'

import SimpleContentCard from '@p-components/SimpleContentCard'

const WideContentCardStyle = styled.div`
   display: inline-flex;
   justify-content: flex-end;
   align-items: stretch;
   width: 100%;
   position: relative;
   border-radius: 0.5rem;
   overflow: hidden;
   && > .card {
      width: 550px;
      max-width: 90vw;
      background-color: white;
      position: relative; 
      z-index: 1;
      margin: 3rem;
      margin-right: 7%;
      border-radius: 0.8rem;
      overflow: hidden;
   }
   && > .background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--palette-opaque-accent3);
      z-index: 0;
   }
   &&[data-display-left='true'] {
      justify-content: flex-start;
      && > .card {   
         margin-left: 7%;
         margin-right: 0;
      }
   }
   @media (max-width: 950px) {
      justify-content: center !important;
      && > .card {
         margin-left: 0px !important;
         margin-right: 0px !important;
      }
   }
   @media (max-width: 670px) {
      width: 95vw;
      && > .card {
         max-width: 100%;
         width: 100%;
         margin: 0px !important;
         border-radius: 0px !important;
      }
   }
`

type Props = {
   title: string
   description: string
   displayLeft?: boolean
   icon?: any
   bgImage: StaticImageData | string,
   alt?: string,
   props?: React.HtmlHTMLAttributes<HTMLDivElement>
   style?: React.CSSProperties
}

const WideContentCard: React.FC<Props> = ({
   title, description, displayLeft, icon, bgImage, alt, props, style
}) => {
   return (
      <WideContentCardStyle 
      {...props}
      style={style}
      data-display-left={displayLeft ? 'true' : 'false'}>
         <SimpleContentCard 
         title={title}
         description={description}
         hasBackground={'var(--palette-opaque-bgContrast)'}
         icon={icon}
         props={{className: 'card'}} />
         <div className='background'>
            <Image src={bgImage} 
            objectFit='cover'
            layout='fill'
            quality={100}
            alt={alt ? alt : 'Background de ilustração de um card na pagina Alpes Capital'} />
         </div>
      </WideContentCardStyle>
   )
}

export default WideContentCard