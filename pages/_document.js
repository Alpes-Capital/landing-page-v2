import AsyncNextScripts from '@components/AsyncNextScripts'
import Document, { Html, Head, Main } from 'next/document'
import { extractCss } from 'goober'

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = await renderPage()
    // Extrach the css for each page render
    const css = extractCss()
    return { ...page, 
      style: (
        <style id='_goober'>
          {css}
        </style>
      )
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