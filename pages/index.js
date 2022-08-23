import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import NewsletterForm from '@components/NewsletterForm'
import NewsletterSubscribe from '@components/NewsletterSubscribe'
// import Image from 'next/image'
import CharacterBio from '@components/CharacterBio'
import YoutubeEmbed from '@components/YoutubeEmbed'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='holderForAllSections'>
        <div id="home" className='homeSection'>
          <img className="homeBackgroundImage" src="/coverArt.png"></img>
        </div>

        <div id="About">
          <h2>ABOUT</h2>
          <YoutubeEmbed embedId="rokGy0huYEA" />

          <iframe
            className='video-responsive'
            src={`https://www.youtube.com/embed/rokGy0huYEA`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <CharacterBio id="Characters" />
        
        <div id='PressKit'>

        </div>
        <NewsletterSubscribe />
      </div>
    </div>
  )
}
