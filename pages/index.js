import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        
         
          
      </Head>

      <main>
      <navbar>
          <ul class="nav-list">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#">Trailer</a></li>
            <li class="nav-item"><a href="#">About</a></li>
            <li class="nav-item"><a href="#">Characters</a></li>
            <li class="nav-item"><a href="#">Flightless Crew</a></li>
            </ul>
        </navbar>
        <Image src="/coverArt.png" width={1000} height={500} />
        <Header title="Welcome to Arborden!" />
        <p className="description">
          This is the beginning of your journey! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
