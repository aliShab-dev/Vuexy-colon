import { Layout } from '@/component/Layout'
import store from '@/Redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>

        <Layout>
          <Component {...pageProps} />
        </Layout>

    </Provider>
  )
}
