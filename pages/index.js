import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import NewsletterForm from '@components/NewsletterForm'
import NewsletterSubscribe from '@components/NewsletterSubscribe'
import Image from 'next/image'
import CharacterBio from '@components/CharacterBio'
import YoutubeEmbed from '@components/YoutubeEmbed'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSteam } from '@fortawesome/free-brands-svg-icons'



export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='holderForAllSections'>
        <div id="home" className='homeSection'>
          <img className="homeBackgroundImage" src="/coverArt.png"></img>
          {/* <Image className="homeBackgroundImage" layout='fill' src={"/coverArt.png"} /> */}
        </div>

        <div id="About">
          <h2>Welcome to Arborden!</h2>
          <p>Help the flightless bird, Dover, fight his inner demons by teaming up with 7 partners 
            in this turn-based RPG where your timing matters! Solve puzzles, beat baddies, and tackle platforming 
            challenges to uncover the mysteries of a quirky, remote island and save Dover's family!</p>
          <YoutubeEmbed embedId="XeAM_fiWwVY" />
        </div>
        <div id="Characters">
          <h2>Meet your friends!</h2>
          <CharacterBio />
        </div>
        
        <div id='PressKit'>

        </div>
        <NewsletterSubscribe />
      </div>

      <div className='copyright-section'>
        <FontAwesomeIcon icon={faCopyright} />RICE AND RYE GAMES LLC. ALL RIGHTS RESERVED.
      </div>
      <div className='social-section'>
        <a className="single-social-button"  href="https://store.steampowered.com/">
                   <FontAwesomeIcon icon={faSteam} />
        </a>
        <a className="single-social-button"  href="https://twitter.com/flightless_game/">
                   <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="single-social-button"  href="https://www.instagram.com/flightless.game/">
                   <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  )
}
