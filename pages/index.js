import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Head>
        
      </Head>

      <main>
        <Image src="/coverArt.png" width={1000} height={500} />
        <Header title="Welcome to Arborden!" />
        <p className="description">
          This is the beginning of your journey! <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
