import type { NextPage, GetStaticPaths, InferGetStaticPropsType, GetStaticProps } from 'next'

//* Importing page components
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/team/sections'
import MemberCard from '@p-components/MemberCard'
import { getTeamSections, getSectionMembers } from '@components/api/team-sections-utils'

//* Static generation functions
type Member = {
   name: string,
   section: string,
   role: string,
   age: string,
   img: string,
   description: string,
   isFounder: boolean,
   institution: string
}

export const getStaticPaths: GetStaticPaths = async () => {
   const sections = await getTeamSections()

   return {
      paths: sections.map(section => ({
         params: { section: section.id },
      })),
      fallback: false,
   }
}

export const getStaticProps: GetStaticProps<{
   sectionMembers: Member[],
   currentSection: string
}> = async ({ params }) => {
   if(!params || !params.section) return { 
      notFound: true 
   }
   const sectionMemberFetch = await getSectionMembers(false, params.section as string)

   const sectionMembers: Member[] = 
      sectionMemberFetch.filter(member => member.section === params.section) as Member[]

   return {
      props: { 
         sectionMembers,
         currentSection: params.section as string
      },
      revalidate: 604800,
   }
}
 
//* Actual page component
const Management: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({sectionMembers, currentSection}) => {
   const SeoTitle = `Time - ${currentSection}`
   const SeoCanonical = `${process.env.NEXT_PUBLIC_BASE_URL}/team/${currentSection}`
   const SeoDescription = `Olá nós somos a Alpes e como falamos em '${process.env.NEXT_PUBLIC_BASE_URL}/team': 
      uma equipe é essencial. Então descubra mais sobre cada um de nós qeu participam do ${currentSection} da AlpesCap!`
   return (
   <>
      <SEOComp 
      title={SeoTitle}
      description={SeoDescription}
      canonical={SeoCanonical}
      keywords={['AlpesCap', 'Time', 'Equipe da AlpesCap', 'Sobre', 'Investimento', 'Fundo de endowment', 'Jovens', 'Sobre', currentSection]}
      openGraph={{
         title: SeoTitle,
         description: SeoDescription,
         url: SeoCanonical,
         image: {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
            width: 1500,
            height: 1500,
            alt: 'AlpesCap Logo',
            type: 'image/png'
         },
      }}
      twitter={{
         url: SeoCanonical,
         title: SeoTitle,
         description: SeoDescription,
         image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/pages/about/header/Logo_mini_bg.jpg`,
      }}
      robotsFollow={true}
      linkTags={[
         {
            rel: 'prev',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team`
         }
      ]} />
      <Container>
         <h1>Essa é a equipe que constitui o {currentSection}</h1>
         <div className='memberCardsContainer'>
         {sectionMembers.map((member, i) => (
            <MemberCard key={i}
            name={member.name}
            description={member.description}
            role={member.role}
            age={member.age}
            img={member.img}
            isFounder={member.isFounder}
            institution={member.institution}
             />
         ))}
         </div>
      </Container>
   </>
   )
}

export default Management