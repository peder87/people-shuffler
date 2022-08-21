import '@/styles/global.css'
import { ThemeProvider } from '@/styles/ThemeProvider'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
