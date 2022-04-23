import utilStyles from '&/styles/util.module.scss'
import styles from './index.module.scss'
import LogoSvg from '&/svgs/logo.svg'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <main className={utilStyles.container}>
      <Head>
        <title>Peladeiros</title>
      </Head>
      <div className={styles.forms}>
        <LogoSvg width={128} height={128} />
        <Image alt="a goalkeeper doing its job" src="/images/goalkeeper.png" width={256} height={256} />
      </div>
    </main>
  )
}
