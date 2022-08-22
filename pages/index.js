import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import NewsletterForm from '@components/NewsletterForm'
import NewsletterSubscribe from '@components/NewsletterSubscribe'
// import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='holderForAllSections'>
        <div className='homeSection'>
          <img className="homeBackgroundImage" src="/coverArt.png"></img>
        </div>

        <NewsletterSubscribe />
      </div>
      
    </div>
  )
}
