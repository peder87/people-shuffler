import '@/styles/global.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />
  </GeistProvider>
  )
}
