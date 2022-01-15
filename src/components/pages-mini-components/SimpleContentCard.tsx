import { styled } from 'goober'


const SimpleCardStyle = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   width: 270px;
   padding: 1.4rem;
   border-radius: 0.8rem;
   background-color: var(--palette-background);
   backdrop-filter: var(--mods-blur);
   margin: 0.6rem;
   sub {
      display: inline-flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: stretch;
   }
   .icon {
      width: 3rem;
      height: 3rem;
      position: relative;
      overflow: hidden;
      border-radius: 0.4rem;
      margin-left: 0.3rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
      img {
         z-index: 1;
         width: 80%;
         height: 80%;
         position: absolute;
         top: 10%;
         left: 10%;
      }
      :&&:before {
         position: absolute;
         content: '';
         width: 100%;
         height: 100%;
         background: var(--palette-background);
      }
   }
   .title {
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--palette-accent3);
      margin-bottom: 0.5rem;
      font-family: 'Montserrat Alternates';
   }
   .description {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--palette-textMain);
      opacity: 0.5;
      padding-left: 0.3rem;
   }
   &&[data-has-border='true'] {
      border: 0.09rem solid var(--palette-accent3);
   }
`

type Props = {
   title: string,
   description: string,
   icon?: any,
   hasBackground?: boolean | string,
   hasBorder?: boolean,
   props?: React.HtmlHTMLAttributes<HTMLDivElement>
}

const SimpleCard: React.FC<Props> = ({title, description, icon, hasBorder, hasBackground, props}) => {
   return (
      <SimpleCardStyle 
      {...props}
      style={{background: (hasBackground && typeof hasBackground !== 'boolean') ? 
         hasBackground : 'var(--palette-bgContrast)'}}
         data-has-border={hasBorder ? 'true' : 'false'}>
         {icon && <span className='icon'>{icon}</span>}
         <span className='title'>
            {title}
         </span>
         <p className='description'>
            {description}
         </p>
      </SimpleCardStyle>
   )
}

export default SimpleCard