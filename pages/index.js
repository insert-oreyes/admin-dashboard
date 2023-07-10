import { MdRocketLaunch } from 'react-icons/md'
import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Admin dashboard</title>
      </Head>
      <Hero />
    </div>
  )
}
