import Head from 'next/head'
import '&/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js PWA Example</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="keywords" content="Keywords" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
