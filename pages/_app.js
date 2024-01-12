import Layout from 'components/layout'
import 'styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => {
  console.log('app.js: ', pageProps)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
