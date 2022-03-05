import type { NextPage } from 'next'
import Image from 'next/image'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import SimpleContentCard from '@p-components/SimpleContentCard'
import ImageReferenceCard from '@p-components/ImageReferenceCard'
import SocialCard from '@components/react-mini-components/socialCard'

//* All images imports
import HowAlpes from '@p-images/index/icon8-how-you-do-alpes.png'
import TheAlpesWay from '@p-images/index/icons8-the-alpes-cap-way.png'
import AlpesAboutCard from '@p-images/index/alpes-about-card.jpg'
import AlpesTeamCard from '@p-images/index/alpes-team-card.jpg'
import AlpesDonateArrastao from '@p-images/index/alpes-donate-arrastao.jpg'

const Home: NextPage = () => (
  <>
    <SEOComp 
    title='Home'
    description='Olá, nós somos a Alpes Capital, um fundo de endowment que tem como objetivo ajudar diversas ONGs. E essa é nossa pagina principal! Prazer 👋😄!!'
    canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
    keywords={['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro']}
    locale='pt-BR'
    openGraph={{
      title: 'AlpesCap - Home',
      description: 'Olá, nós somos a Alpes Capital, um fundo de endowment que tem como objetivo ajudar diversas ONGs. E essa é nossa pagina principal! Prazer 👋😄!!',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      image: {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
        width: 1500,
        height: 1500,
        alt: 'AlpesCap Logo',
        type: 'image/png'
      }
    }}
    twitter={{
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      title: 'AlpesCap - Home',
      description: 'Olá, nós somos a Alpes Capital, um fundo de endowment que tem como objetivo ajudar diversas ONGs. E essa é nossa pagina principal! Prazer 👋😄!!',
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`
    }}
    linkTags={[
      {
        rel: 'next',
        href: `${process.env.NEXT_PUBLIC_SITE_URL}/about`
      }
    ]}
    robotsFollow={true} />
    
    <Header 
    title="Olá da AlpesCap !" subTitle="Investimos em um futuro melhor!😄" 
    illustrationDisplay={true} optionalButton={{url: '/about', text: 'Saiba mais'}}
     />
    <Container>
      <sub className='twoLayers' style={{maxWidth: '1300px'}}>
        <div className='under'>
          <Image 
          objectFit='contain'
          src={HowAlpes} alt='Illustração para a pergunta: Nosso objetivo?' />
          <Image 
          objectFit='contain'
          src={TheAlpesWay} alt='Illustração para a reposta: De comos faremos isso?' />
        </div>
        <SimpleContentCard
        props={{className: 'over'}}
        // eslint-disable-next-line @next/next/no-img-element
        icon={<img alt='Card nosso objetivo, icone de illustração' src="data:image/png;base64,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"/>}
        title='Nosso proposito?'
        description='Disseminar conhecimento financeiro para jovens do ensino médio e fazer o BEM!' />
        <SimpleContentCard
        props={{className: 'over'}}
        // eslint-disable-next-line @next/next/no-img-element
        icon={<img alt='Card como faremos isso, icone de illustração' src="data:image/png;base64,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"/>}
        title='Como faremos isso?'
        hasBackground='#ffffff0'
        hasBorder
        description='Através do primeiro fundo de endowment, formado por DOAÇÕES que serão investidas, cujo rendimento será 100% doado à ONGs.' />
      </sub>
      <sub style={{width: '100% !important', paddingLeft: '5%', paddingRight: '5%', paddingTop: '16rem'}}>
        <ImageReferenceCard 
        href='/about'
        style={{width: '100%', marginBottom: '1.5rem'}}
        backgroundSrc={AlpesAboutCard}
        title='O fundo do bem'
        description='Saiba como funciona nosso projeto, um pouco da nossa história e um pouco sobre a estrutura do fundo.' />
        <ImageReferenceCard 
        href='/team'
        style={{flex: '1 1 auto', marginBottom: '1.5rem'}}
        backgroundSrc={AlpesTeamCard}
        title='A equipe:'
        description='Conheça um pouco mais sobre os jovens pros trás dessa iniciativa e os profissionais nos ajudando em nossa jornada.' />
        <ImageReferenceCard 
        href='/donate'
        style={{flex: '1 1 auto', marginBottom: '1.5rem'}}
        backgroundSrc={AlpesDonateArrastao}
        title='Faça parte da mudança:'
        description='Você pode fazer parte desse projeto doando para o nosso fundo. O rendimento é doado para  ONGs, como o Projeto Arrastão.' />
      </sub>
      <span style={{fontWeight: '500', fontFamily: 'Montserrat Alternates', color: "var(--palette-textMain)"}}>
        Se quiser, segue lá no insta??!! {"("}pode ser em qualquer outra se quiser{")"} 😉</span>
      <sub>
        <SocialCard
           iconType='sourceData'
           IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTU4Ljc4MTI1LDE3LjgxMjVjLTIyLjU4OTgxLDAgLTQwLjk2ODc1LDE4LjM3ODk0IC00MC45Njg3NSw0MC45Njg3NXY1My40Mzc1YzAsMjIuNTg5ODEgMTguMzc4OTQsNDAuOTY4NzUgNDAuOTY4NzUsNDAuOTY4NzVoNTMuNDM3NWMyMi41ODk4MSwwIDQwLjk2ODc1LC0xOC4zNzg5NCA0MC45Njg3NSwtNDAuOTY4NzV2LTUzLjQzNzVjMCwtMjIuNTg5ODEgLTE4LjM3ODk0LC00MC45Njg3NSAtNDAuOTY4NzUsLTQwLjk2ODc1ek0xMjEuMTI1LDQyLjc1YzMuOTM2NTYsMCA3LjEyNSwzLjE4ODQ0IDcuMTI1LDcuMTI1YzAsMy45MzMgLTMuMTg4NDQsNy4xMjUgLTcuMTI1LDcuMTI1Yy0zLjkzNjU2LDAgLTcuMTI1LC0zLjE5MiAtNy4xMjUsLTcuMTI1YzAsLTMuOTM2NTYgMy4xODg0NCwtNy4xMjUgNy4xMjUsLTcuMTI1ek04NS41LDQ5Ljg3NWMxOS42NDM2MywwIDM1LjYyNSwxNS45ODEzOCAzNS42MjUsMzUuNjI1YzAsMTkuNjQzNjMgLTE1Ljk4MTM3LDM1LjYyNSAtMzUuNjI1LDM1LjYyNWMtMTkuNjQzNjIsMCAtMzUuNjI1LC0xNS45ODEzNyAtMzUuNjI1LC0zNS42MjVjMCwtMTkuNjQzNjIgMTUuOTgxMzgsLTM1LjYyNSAzNS42MjUsLTM1LjYyNXpNODUuNSw2MC41NjI1Yy0xMy43NzI2LDAgLTI0LjkzNzUsMTEuMTY0OSAtMjQuOTM3NSwyNC45Mzc1YzAsMTMuNzcyNiAxMS4xNjQ5LDI0LjkzNzUgMjQuOTM3NSwyNC45Mzc1YzEzLjc3MjYsMCAyNC45Mzc1LC0xMS4xNjQ5IDI0LjkzNzUsLTI0LjkzNzVjMCwtMTMuNzcyNiAtMTEuMTY0OSwtMjQuOTM3NSAtMjQuOTM3NSwtMjQuOTM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
           text="Instagram"
           url='https://www.instagram.com/alpes_capital_/' />
        <SocialCard
           iconType='sourceData'
           IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTEzMC4wMzEyNSwyMS4zNzVoLTg5LjA2MjVjLTEwLjgwMTUsMCAtMTkuNTkzNzUsOC43OTIyNSAtMTkuNTkzNzUsMTkuNTkzNzV2ODkuMDYyNWMwLDEwLjgwMTUgOC43OTIyNSwxOS41OTM3NSAxOS41OTM3NSwxOS41OTM3NWg4OS4wNjI1YzEwLjgwMTUsMCAxOS41OTM3NSwtOC43OTIyNSAxOS41OTM3NSwtMTkuNTkzNzV2LTg5LjA2MjVjMCwtMTAuODAxNSAtOC43OTIyNSwtMTkuNTkzNzUgLTE5LjU5Mzc1LC0xOS41OTM3NXpNNjQuMTI1LDEyMS4xMjVjMCwxLjk3MDA2IC0xLjU5MjQ0LDMuNTYyNSAtMy41NjI1LDMuNTYyNWgtMTAuNjg3NWMtMS45NzAwNiwwIC0zLjU2MjUsLTEuNTkyNDQgLTMuNTYyNSwtMy41NjI1di00Ni4zMTI1YzAsLTEuOTcwMDYgMS41OTI0NCwtMy41NjI1IDMuNTYyNSwtMy41NjI1aDEwLjY4NzVjMS45NzAwNiwwIDMuNTYyNSwxLjU5MjQ0IDMuNTYyNSwzLjU2MjV6TTU1LjIxODc1LDY0LjEyNWMtNC45MTk4MSwwIC04LjkwNjI1LC0zLjk4NjQ0IC04LjkwNjI1LC04LjkwNjI1YzAsLTQuOTE5ODEgMy45ODY0NCwtOC45MDYyNSA4LjkwNjI1LC04LjkwNjI1YzQuOTE5ODEsMCA4LjkwNjI1LDMuOTg2NDQgOC45MDYyNSw4LjkwNjI1YzAsNC45MTk4MSAtMy45ODY0NCw4LjkwNjI1IC04LjkwNjI1LDguOTA2MjV6TTEyNC42ODc1LDEyMS4xMjVjMCwxLjk3MDA2IC0xLjU5MjQ0LDMuNTYyNSAtMy41NjI1LDMuNTYyNWgtMTAuNjg3NWMtMS45NzAwNiwwIC0zLjU2MjUsLTEuNTkyNDQgLTMuNTYyNSwtMy41NjI1di0yNi43MTg3NWMwLC00LjkxMjY5IC0zLjk5MzU2LC04LjkwNjI1IC04LjkwNjI1LC04LjkwNjI1Yy00LjkxMjY5LDAgLTguOTA2MjUsMy45OTM1NiAtOC45MDYyNSw4LjkwNjI1djI2LjcxODc1YzAsMS45NzAwNiAtMS41OTI0NCwzLjU2MjUgLTMuNTYyNSwzLjU2MjVoLTEwLjY4NzVjLTEuOTcwMDYsMCAtMy41NjI1LC0xLjU5MjQ0IC0zLjU2MjUsLTMuNTYyNXYtNDYuMzEyNWMwLC0xLjk3MDA2IDEuNTkyNDQsLTMuNTYyNSAzLjU2MjUsLTMuNTYyNWgxMC42ODc1YzEuOTcwMDYsMCAzLjU2MjUsMS41OTI0NCAzLjU2MjUsMy41NjI1djEuOTI3MzFjMy43ODY5NCwtMy40MDIxOSA4Ljc3MDg4LC01LjQ4OTgxIDE0LjI1LC01LjQ4OTgxYzExLjc4ODMxLDAgMjEuMzc1LDkuNTg2NjkgMjEuMzc1LDIxLjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
           text="LinkedIn"
           url='https://www.linkedin.com/company/alpes-capital/' />
        <SocialCard
           iconType='sourceData'
           IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTg1LjUsMTQuMjVjLTM5LjI4NzI1LDAgLTcxLjI1LDMxLjk2Mjc1IC03MS4yNSw3MS4yNWMwLDM1LjY0NjM4IDI2LjM0MTEzLDY1LjE3NTk0IDYwLjU2MjUsNzAuMzU5Mzh2LTUyLjU0Njg3aC0xNC4yNWMtMS45NjY1LDAgLTMuNTYyNSwtMS41OTI0NCAtMy41NjI1LC0zLjU2MjV2LTEwLjY4NzVjMCwtMS45NzAwNiAxLjU5NiwtMy41NjI1IDMuNTYyNSwtMy41NjI1aDE0LjI1di0xMi45MzljMCwtMTYuOTI1NDQgOC42NDYxOSwtMjYuMjQ4NSAyNC4zNDYxMywtMjYuMjQ4NWM2LjM2MjYzLDAgMTEuMzgyMTksMC40NDE3NSAxMS41OTIzOCwwLjQ1OTU2YzEuODM4MjUsMC4xNjM4OCAzLjI0OSwxLjcwMjg3IDMuMjQ5LDMuNTQ4MjV2MTIuMDIzNDRjMCwxLjk3MDA2IC0xLjU5NiwzLjU2MjUgLTMuNTYyNSwzLjU2MjVoLTcuMTI1Yy0zLjkyOTQ0LDAgLTcuMTI1LDMuMTk1NTYgLTcuMTI1LDcuMTI1djEyLjQ2ODc1aDE0LjI1YzEuMDIyNDQsMCAxLjk5NSwwLjQzODE5IDIuNjcxODgsMS4yMDQxM2MwLjY3Njg4LDAuNzY5NSAwLjk5MDM4LDEuNzg4MzcgMC44NjU2OSwyLjgwMDEzbC0xLjMzNTk0LDEwLjY4NzVjLTAuMjI0NDQsMS43ODEyNSAtMS43NDIwNiwzLjEyMDc1IC0zLjUzNzU2LDMuMTIwNzVoLTEyLjkxNDA2djUyLjU0Njg4YzM0LjIyMTM3LC01LjE4MzQ0IDYwLjU2MjUsLTM0LjcxMyA2MC41NjI1LC03MC4zNTkzN2MwLC0zOS4yODcyNSAtMzEuOTYyNzUsLTcxLjI1IC03MS4yNSwtNzEuMjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
           text="Facebook"
           url='https://web.facebook.com/alpescapital' />
        <SocialCard
           iconType='sourceData'
           IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTE1Ni43NSw4NS41YzAsMzEuOTIgLTIwLjk0NzUsNTguOTIzNzUgLTQ5Ljg3NSw2Ny45NzI1di0xOC4wOTc1YzAsLTYuMDkxODggLTIuNTY1LC0xMS41NDI1IC02LjYyNjI1LC0xNS40NjEyNWMxOC42Njc1LC0zLjM4NDM4IDI4LjAwMTI1LC0xNC4yNSAyOC4wMDEyNSwtMzQuNDEzNzVjMCwtOC43MjgxMiAtMS43ODEyNSwtMTUuNjM5MzcgLTUuMjcyNSwtMjEuMDE4NzVjMS41Njc1LC02LjA5MTg3IDIuNDkzNzUsLTE0Ljc0ODc1IC0xLjg1MjUsLTIxLjczMTI1Yy04LjQwNzUsMCAtMTQuMjg1NjIsNC45NTE4OCAtMTcuNzQxMjUsOS4wMTMxM2MtNS4xNjU2MiwtMS4yNDY4NyAtMTEuMTE1LC0xLjg4ODEyIC0xNy44ODM3NSwtMS44ODgxMmMtNi40MTI1LDAgLTEyLjMyNjI1LDAuNzEyNSAtMTcuNTk4NzUsMi4xNzMxMmMtMy40MiwtNC4wOTY4NyAtOS40MDUsLTkuMjk4MTIgLTE4LjAyNjI1LC05LjI5ODEyYy01LjA1ODc1LDguMTIyNSAtMi45OTI1LDE2Ljg4NjI1IC0xLjA2ODc1LDIxLjgwMjVjLTMuODQ3NSw1LjM3OTM3IC02LjA1NjI1LDEyLjI5MDYyIC02LjA1NjI1LDIwLjk0NzVjMCwyMC4xNjM3NSA5LjMzMzc1LDMxLjAyOTM4IDI4LjAwMTI1LDM0LjQxMzc1Yy0yLjM4Njg4LDIuMzE1NjIgLTQuMjM5MzgsNS4xMyAtNS4zNzkzOCw4LjMzNjI1aC04LjM3MTg3Yy01LjEzLDAgLTcuMTI1LC0yLjI4IC05Ljg2ODEyLC01Ljk4NWMtMi43NDMxMiwtMy43MDUgLTUuNywtNi4xOTg3NSAtOS4yMjY4NywtNy4yMzE4OGMtMS44ODgxMiwtMC4yMTM3NSAtMy4xNzA2MywxLjMxODEyIC0xLjQ5NjI1LDIuNjcxODhjNS41OTMxMyw0LjAyNTYzIDUuOTg1LDEwLjYxNjI1IDguMjI5MzcsMTQuOTI2ODdjMi4wMzA2MiwzLjg4MzEzIDYuMjM0MzcsNi4zMDU2MyAxMC45NzI1LDYuMzA1NjNoOC41MTQzOHYxNC41MzVjLTI4LjkyNzUsLTkuMDQ4NzUgLTQ5Ljg3NSwtMzYuMDUyNSAtNDkuODc1LC02Ny45NzI1YzAsLTM5LjM2NTYyIDMxLjg4NDM4LC03MS4yNSA3MS4yNSwtNzEuMjVjMzkuMzY1NjIsMCA3MS4yNSwzMS44ODQzOCA3MS4yNSw3MS4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
           text="Github"
           url='https://github.com/Alpes-Capital/' />
        <SocialCard
           iconType='sourceData'
           IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTU0LjExMjQzLDIxLjM3NWMtNi42MjEwNiwwIC0xMi44MDg5OCwzLjM1ODI4IC0xNi40MjA5LDguOTEzMjFsLTE2Ljg4MDEzLDI1LjkzMjVsMC4yMDg3NCwtMC4yODUyOGMtMi4wNzgyNywyLjc3MjgxIC0zLjIwNzY0LDYuMTQ1NjggLTMuMjA3NjQsOS42MTU5N3Y2NC40Nzk4NmMwLDguNzkwNDcgNy4yNDA3OCwxNi4wMzEyNSAxNi4wMzEyNSwxNi4wMzEyNWgxOS41OTM3NXYxMi40Njg3NWMwLjAwMDMsMi45NTExNSAyLjM5MjYsNS4zNDM0NSA1LjM0Mzc1LDUuMzQzNzVoNC4xNzQ4YzMuMzA2NCwwIDYuNDc4OTUsLTEuMzE2MTEgOC44MTU3OSwtMy42NTI5NmwxNC4xNTk1NSwtMTQuMTU5NTRoMjEuNTYyODZjNC41MTU0MiwwIDguODIwMTcsLTEuOTExMjQgMTEuODU2NDUsLTUuMjQ2MzRsMjYuODkyNywtMjkuNTc4NDloLTAuMDA2OTZjNC40NzEzLC00LjkxNjQ2IDYuOTUxMDUsLTExLjMyNzAzIDYuOTUxMDUsLTE3Ljk3MjUzdi01NS44NTg4OWMwLC04Ljc5MDQ3IC03LjI0MDc4LC0xNi4wMzEyNSAtMTYuMDMxMjUsLTE2LjAzMTI1ek01NC4xMTI0MywzMi4wNjI1aDI3LjgyNTA3aDU1LjIxODc1YzMuMDE1NjUsMCA1LjM0Mzc1LDIuMzI4MSA1LjM0Mzc1LDUuMzQzNzV2NTUuODU4ODljMCwzLjk5MjEyIC0xLjQ4NTQ4LDcuODM1MzcgLTQuMTY3ODUsMTAuNzg0OTFsLTEuNjM1MTMsMS43OTUxN2wwLjEwNDM3LC0wLjIxNTdsLTkuNzU1MTMsMTAuNzk4ODNjLTIuNzAzOTQsMi45OTI1IC02LjU0MzQyLDQuNjk2NjUgLTEwLjU3NjE3LDQuNjk2NjVoLTI5LjE4ODg0bC0xOS41OTM3NSwxNy44MTI1di0xNy44MTI1aC0xNC4yNWMtMy45MTg3NSwwIC03LjEyNSwtMy4yMDYyNSAtNy4xMjUsLTcuMTI1di03NC44MTI1YzAsLTEuOTI1NTMgMC43NzA3MywtMy42NjUxOSAyLjAxMDg2LC00Ljk0NzE0YzEuNTk0MDYsLTEuMzcxIDMuNjI3NjYsLTIuMTc3ODYgNS43ODkwNiwtMi4xNzc4NnpNODMuNjM1MjUsNTMuMzYwOTZjLTIuOTQ4NTQsMC4wNDYwNiAtNS4zMDI1NSwyLjQ3MTY5IC01LjI2MDI1LDUuNDIwMjl2MjguNWMtMC4wMjcyNSwxLjkyNzE1IDAuOTg1MjYsMy43MTk2OCAyLjY0OTgyLDQuNjkxMjFjMS42NjQ1NywwLjk3MTUzIDMuNzIzMjksMC45NzE1MyA1LjM4Nzg2LDBjMS42NjQ1NywtMC45NzE1MyAyLjY3NzA4LC0yLjc2NDA2IDIuNjQ5ODIsLTQuNjkxMjF2LTI4LjVjMC4wMjA3MywtMS40NDUwMiAtMC41NDQ2NCwtMi44MzY4MyAtMS41NjcxOCwtMy44NTgwNmMtMS4wMjI1NCwtMS4wMjEyMyAtMi40MTUwOCwtMS41ODQ4MSAtMy44NjAwNywtMS41NjIyM3pNMTEyLjEzNTI1LDUzLjM2MDk2Yy0yLjk0ODU0LDAuMDQ2MDYgLTUuMzAyNTUsMi40NzE2OSAtNS4yNjAyNSw1LjQyMDI5djI4LjVjLTAuMDI3MjUsMS45MjcxNSAwLjk4NTI2LDMuNzE5NjggMi42NDk4Miw0LjY5MTIxYzEuNjY0NTcsMC45NzE1MyAzLjcyMzI5LDAuOTcxNTMgNS4zODc4NiwwYzEuNjY0NTcsLTAuOTcxNTMgMi42NzcwOCwtMi43NjQwNiAyLjY0OTgyLC00LjY5MTIxdi0yOC41YzAuMDIwNzMsLTEuNDQ1MDIgLTAuNTQ0NjQsLTIuODM2ODMgLTEuNTY3MTgsLTMuODU4MDZjLTEuMDIyNTQsLTEuMDIxMjMgLTIuNDE1MDgsLTEuNTg0ODEgLTMuODYwMDcsLTEuNTYyMjN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
           text="Twitch TV"
           url='https://www.twitch.tv/alpescapital' />
      </sub>
    </Container>
  </>
)

export default Home
