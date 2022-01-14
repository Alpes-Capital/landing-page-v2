import { memo } from "react"
import styled from "styled-components"

export const PDFIframe = styled('iframe')`
   max-width: 100%;
   width: 900px;
   min-height: 100vh;
   border-radius: 0.6rem;
`

export const ErrorLoading = styled('div')`
   max-width: 100%;
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   border-radius: 0.4rem;
   background-color: var(--palette-bgContrast);
   color: var(--palette-userAdvise-error);
   font-size: 0.85rem;
   font-weight: 500;
`

type PDFViewerProps = {
   title?: string
   PDFsrc: string
   scrType: 'url'
}

const PDFViewer: React.FC<PDFViewerProps> = ({ title, PDFsrc, scrType }) => {
   return scrType === 'url' ?
      <PDFIframe 
      src={`${PDFsrc}#view=fitW`} 
      title={`Relatório: ${title ? title : 
         PDFsrc.split('/')[PDFsrc.split('/').length - 1].split('.')[0]}`} 
      /> : 
      <ErrorLoading>
         Desculpe-nos, parece que um erro ocorreu ao carregar o PDF. <br/> 
         Parece que os guaxinins comeram o PDF ...
      </ErrorLoading>
}

export default memo(PDFViewer)