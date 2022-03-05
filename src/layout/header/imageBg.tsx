import { memo } from 'react'
import Image from 'next/image'
import type { ImageProps } from 'next/image'

//* Typing that ensures that the correct bg type source is passed to the image component
//* in function of the chosen bg type
export interface CustomImgBg<T extends ImgBgsType> {
   imgSourceType: T
   imgSource: ImgBgParameterMap[T]
}
type ImgBgParameterMap = {
   'externalUrl': string
   'internalUrl': string
   'import': StaticImageData
}
type ImgBgsType = keyof ImgBgParameterMap

//*Common props that are used on header option as well as here in the actual component
type CommonProps = {
   customPlaceholder?: ImageProps['placeholder'],
   customBlurDataURL?: ImageProps['blurDataURL'],
   bgAlt?: string
}

//*Props that will be accessed on header in case an custom background image is required
export type CustomImgBgProps = CustomImgBg<ImgBgsType> & CommonProps

//*Props for the actual background component
export type BgImgElemProps = CommonProps & {
   imgSource: StaticImageData | undefined | string
}

import DefaultImg from '@p-images/defaultHeaderBg.jpg'

const HeaderImgBackground = ({imgSource, customPlaceholder, customBlurDataURL, bgAlt}: BgImgElemProps) => (
   <Image 
      src={imgSource ? imgSource : DefaultImg} 
      alt={bgAlt? bgAlt : 'Background do cabeçalho de pagina do site da Alpes Capital.'}
      layout="fill"
      objectFit="cover"
      loading='eager'
      priority={true}
      placeholder={customPlaceholder ? customPlaceholder : 'blur'}
      blurDataURL={customBlurDataURL ? customBlurDataURL : undefined}
      quality={95} />
)

export default memo(HeaderImgBackground)