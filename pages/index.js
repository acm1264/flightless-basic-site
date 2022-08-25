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
          <h2>What is Flightless?</h2>
          <p>Help the flightless bird, Dover, fight his inner demons by teaming up with 7 partners 
            in this turn-based RPG where your timing matters! Solve puzzles, beat baddies, and tackle platforming 
            challenges to uncover the mysteries of a quirky, remote island and save Dover's family!</p>
          <YoutubeEmbed embedId="XeAM_fiWwVY" />
        </div>
          
        <div id="Gameplay">
        <h2>Gameplay!</h2>
          <p>Explore 6 dream-like worlds where you will take on the Mothia, a zombified cult of rock creatures, 
            a corrupt video game company, and more! Uncover the mysteries of the quirky region of Arborden as you 
            aid Dover in his quest to find his family and escape! Don't worry... EVERY WORLD HAS OATMEAL!!!!</p>
          <p>
            Engage in turn-based battles featuring Action Commands: a system that requires special inputs, such as 
            timing a button press or hitting buttons in a sequence, to deal more or take less damage in battle. 
            Learn to strategize with the elemental triangle to change how much damage is dealt too by thinking about 
            elemental strengths/weaknesses. 
          </p>
          <p>
            You can even equip feathers to give you perks in battles… or make combat <b>MORE DIFFICULT</b> 
            if you crave the extra challenge! Numbers are kept small too to allow you to keep track of how 
            much damage different moves will do more easily in your head than traditional RPGs!
          </p>
        </div>

        <div id="Characters">
          <h2>Meet new friends!</h2>
          <CharacterBio />
        </div>

        <NewsletterSubscribe />
        
        <div id='PressKit'>
          <h2>Kit of beans for the press to spill!</h2>
          <div>
            <h3>Assets on Google Drive</h3>
            <a href="#"><button className='googleDriveLink'>Screenshots</button></a>
            <a href="#"><button className='googleDriveLink'>Promo Art</button></a>
            <a href="#"><button className='googleDriveLink'>Trailer</button></a>
          </div>
        </div>
        
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
