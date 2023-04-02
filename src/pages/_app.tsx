import '../styles/audioplay.css'
import type { AppProps } from 'next/app'
import { Quicksand } from '@next/font/google'

import { Providers } from '@/context/Providers'
import { GlobalStyle } from '@/styles/globals.styles'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <style jsx global>
        {`
          html {
            font-family: ${quicksand.style.fontFamily};
          }
        `}
      </style>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  )
}
