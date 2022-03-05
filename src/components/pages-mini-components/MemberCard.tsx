import styled from 'styled-components'
import Image from 'next/image'

//* Default member image
import DefaultMemberImg from '@public/images/global/Logo_mini_bg.png'

//* Defining component styles
export const MemberCardContainer = styled.div`
   width: 450px;
   max-height: 290px;
   max-width: 100%;
   margin: 10px;
   border-radius: 9px;
   overflow: hidden;
   padding: 0.7rem;
   background-color: var(--palette-bgContrast);
   &&[data-is-compact=false] {
      display: inline-flex;
      justify-content: space-between;
      align-items: stretch;
      .leftContent {
         display: flex;
         flex-direction: column;
         position: relative;
         width: 40%;
         overflow: hidden;
         border-radius: 0.5rem;
         justify-content: space-between;
         align-items: space-between;
         .memberMainInf{
            height: calc(100% - 80px - 1.3rem - 1.05rem);
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom: 1rem;
         }
         .memberProfImg {
            align-self: center;
            margin-top: 1.7rem;
         }
      }
      .rightContent {
         width: 56%;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         padding: 0.4rem;
         font-size: 0.84rem;
         .memberInst {
            display: inline-flex;
            justify-content: space-between;
            .memberFounder {
               margin-left: 0.5rem;
               width: min-content;
            }
         }
      }
   }
   &&[data-is-compact='true'] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      .leftContent {
         width: 100%;   
         height: 100px;
         overflow: hidden;
         border-radius: 0.5rem;
         display: inline-flex;
         justify-content: space-between;
         align-items: stretch;
         position: relative;
         .memberProfImg {
            align-self: center;
            margin-left: 1.3rem;
         }
      }
      .rightContent {
         width: 100%;
         display: inline-flex;
         justify-content: space-between;
         align-items: stretch;
         padding: 0.4rem;
         margin-top: 1rem;
         .memberInst {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            .memberFounder {
               margin-top: 0.5rem;
               width: max-content;
            }
         }
      }
   }
   .leftContent {
      .memberBgImg {
         position: absolute;
         width: 100%;
         height: 100%;
         z-index: 0;
      }
      .memberProfImg, .memberMainInf{
         z-index: 2;
         position: relative;
      }
      .memberMainInf{
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: center;
         padding: 0.8rem;
         font-size: 0.9rem;
         font-weight: 500;
         color: var(--palette-constant-white);
         .name {
            font-size: 1.05rem;
         }
      }
      .memberProfImg{
         width: 80px;
         height: 80px;
         border-radius: 50%;
         overflow: hidden;
      }
      ::before {
         content: '';
         position: absolute;
         width: 100%;
         height: 100%;
         background-color: var(--palette-opaque-accent3);
         z-index: 1;
         backdrop-filter: blur(1rem);
         border-radius: 0.5rem;
      }
   }
   .rightContent{
      color: var(--palette-textMain);
      .memberRole{
         font-weight: 600;
      }
      .memberInst{
         align-items: center;
         font-weight: 500;
         .memberFounder {
            background-color: var(--palette-background);
            padding: 0.2rem;
            padding-left: 0.45rem;
            padding-right: 0.45rem;
            border-radius: 0.3rem;
            color: var(--palette-accent3);
         }   
      }
      .memberDesc {
         flex-shrink: 3;
         margin-top: 0.7rem;
         margin-bottom: 0.7rem;
         overflow-x: hidden;
         overflow-y: scroll;
      }
   }
`

type Props = {
   name: string,
   age?: string,
   role?: string,
   institution?: string,
   description?: string,
   isFounder?: boolean,
   img?: string,
   key: number
}

const MemberCard: React.FC<Props> = ({
   name, age, role, institution, description, isFounder, img, key
}) => {
   return (
      <MemberCardContainer 
      data-is-compact={description ? 'false' : 'true'} 
      key={key} className='memberCard'>
         <sub className='leftContent'>
            <div className='memberBgImg'>
               <Image
                  src={img ? img : DefaultMemberImg}
                  alt={`Foto do membro ${name}`}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='50% 50%'
               />
            </div>
            <div className='memberProfImg'>
               <Image
                  src={img ? img : DefaultMemberImg}
                  alt={`Foto do membro ${name}`}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='50% 0%'
               />
            </div>
            <div className='memberMainInf'>
               <span className='name'>{name}</span>
               {age && <span>Idade: {age}</span>}
            </div>
         </sub>
         <sub className='rightContent'>
            <span className="memberRole">
               <span style={{fontSize: '0.97rem'}}>Area:</span><br/> 
               {role ? role : 'N.Inf.'}
            </span>
            {description && <span className='memberDesc'>{description}</span>}
            <div className='memberInst'>
               <span>{institution ? institution : 'N.Inf.'}</span>
               {isFounder && <span className="memberFounder">Co-founder</span>}
            </div>
         </sub>
      </MemberCardContainer>
   )
}

export default MemberCard