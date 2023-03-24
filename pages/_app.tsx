import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-fundo min-h-screen max-h-fit'>
      <Component {...pageProps} />
    
    </div>
  )
}
