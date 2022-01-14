import type { CSSAttribute } from 'goober'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from 'goober'
import { a, useSpring, config } from '@react-spring/web'

const ImageReferenceCardStyle = styled('a')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-end;
   width: 560px;
   height: 310px;
   border-radius: 0.8rem;
   background-color: var(--palette-background);
   backdrop-filter: var(--mods-blur);
   margin: 0.6rem;
   border-radius: 0.8rem;
   overflow: hidden;
   box-sizing: content-box;
   .background{
      position: fixed;
      width: 100%;
      height: 100%;
      ::after {
         content: '';
         position: absolute;
         top: -1%;
         left: -1%;
         width: 102%;
         height: 102%;
         background: var(--palette-accent3);
         opacity: 0.7;
      }
   }
   .title {
      position: relative;
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--palette-constant-white);
      margin-bottom: 0.5rem;
      font-family: 'Montserrat Alternates';
      z-index: 1;
      margin-right: 1rem;
      margin-left: 1rem;
   }
   .description {
      position: relative;
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--palette-constant-white);
      opacity: 0.7;
      padding-left: 0.3rem;
      z-index: 1;
      margin-left: 1rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
   }
   transition: border 0.4s ease-in-out;
   cursor: pointer;
   &&[data-has-border='true'] {
      border: 0.2rem solid var(--palette-textMain);
   }
   &&[data-has-border='false'] {
      border: 0.2rem solid #ffffff00;
   }
`

type Props = {
   title: string,
   href: string,
   description: string,
   backgroundSrc: string | StaticImageData
   alt?: string,
   props?: React.HtmlHTMLAttributes<HTMLAnchorElement>
   style?: CSSAttribute 
}

const ImageReferenceCard: React.FC<Props> = ({
   title, description, alt, backgroundSrc, props, href, style}) => {
   const [hover, setHover] = useState<boolean>(false)

   const titleSpring = useSpring({
      opacity: 1,
      transform: hover ? 'translateY(-0.3rem)' : 'translateY(1.3rem)',
      from: {
         opacity: 0,
         transform: 'translateY(2rem)'
      },
      config: { ...config.molasses }
   })

   const descriptionSpring = useSpring({
      opacity: hover ? 1 : 0,
      config: { ...config.slow }
   })

   return (
      <Link passHref href={href}>
         <ImageReferenceCardStyle
         style={style}
         onMouseOver={() => setHover(true)}
         onMouseOut={() => setHover(false)}
         {...props} data-has-border={hover ? 'true' : 'false'}>
            <div className='background'>
               <Image src={backgroundSrc} quality={100}
                  layout="fill" objectFit="cover" 
                  alt={alt ? `Ilustração de card de referencia para ${alt}.` : 
                  'Ilustração de um card com informações e referencia a algum local!'} />
            </div>
            <a.span style={titleSpring} className='title'>
               {title}
            </a.span>
            <a.p style={descriptionSpring} className='description'>
               {description}
            </a.p>
         </ImageReferenceCardStyle>
      </Link>
   )
}

export default ImageReferenceCard