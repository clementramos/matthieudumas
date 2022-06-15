import '../styles/globals.css'
import { AnimateSharedLayout } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { useRef } from 'react'

function MyApp({ Component, pageProps }) {

  return (
    <AnimateSharedLayout>
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
      </AnimateSharedLayout>
  )
}

export default MyApp
