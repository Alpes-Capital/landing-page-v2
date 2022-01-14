import AsyncNextScripts from '@components/AsyncNextScripts'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCss } from 'goober'

import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const css = extractCss()

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  
  render() {
    return (
      <Html lang='pt'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;800&family=Montserrat:wght@100;200;300;400;500;600;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <AsyncNextScripts />
        </body>
      </Html>
    )
  }
}

export default MyDocument