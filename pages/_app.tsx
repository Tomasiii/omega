import type { AppProps } from 'next/app'

import { AppContextProvider } from '@/context/AppContext'

import '@/assets/styles/globals.scss'

import { ICurrentCardContext } from '@/utils/types/app.types'

import Layout from '../src/layout/Layout'

function MyApp({ Component, pageProps }: AppProps<ICurrentCardContext>) {
  return (
      <AppContextProvider currentCard={pageProps.currentCard}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
  )
}

export default MyApp
