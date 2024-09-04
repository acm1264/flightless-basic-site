import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import NewsletterForm from '@components/NewsletterForm'
import NewsletterSubscribe from '@components/NewsletterSubscribe'
// import Image from 'next/image'
import CharacterBio from '@components/CharacterBio'
import YoutubeEmbed from '@components/YoutubeEmbed'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'



export default function Home() {
  return (
    <div className='masterDiv'>
      <Navbar />
      <div className='holderForAllSections'>
        <div id="home" className='homeSection'>
          <img className="homeBackgroundImage" src="/coverArt.png"></img>
          {/* <Image className="homeBackgroundImage" layout='fill' src={"/coverArt.png"} /> */}
        </div>

        <div>
          <a href="https://store.steampowered.com/app/1941200/Flightless/"><h2 className="nav-links-mobile">WISHLIST ON STEAM!</h2></a>
        </div>

        <div id="About">
          <h2>What is Flightless?</h2>
          <p>Help the flightless bird, Dover, build confidence by teaming up with 5 partners in this turn-based RPG where your timing matters! Solve puzzles, beat baddies, and tackle platforming challenges to uncover the mysteries of a quirky island, save Dover's family, and... dethrone the Mothia?!</p>
          <YoutubeEmbed embedId="vUOcYn0azgI" />
        </div>
          
        <div id="Gameplay">
        <h2>Gameplay!</h2>
          <p>Explore 5 dream-like islands throughout the archipelago of Arborden! Take on the Mothia, zombified rock creatures, a corrupt video game company, and more! Uncover the mysteries of these quirky places as you aid Dover in his quest to find his family and escape... and hopefully make some silly friends along the way!</p>
            <div className="gameplay-image-group-holder">
              
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS3-LottoAbility-forest.png" />
                </div>
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS9-minecart.jpg" />
                </div>
            </div>
          <p>
          Engage in turn-based battles featuring <b>Action Commands:</b> a system that requires special inputs, such as timing a button press or hitting buttons in a sequence, to deal more or take less damage in battle. Learn to strategize with the elemental triangle, equipable feathers, and more to turn the tide of battles! 
          </p>
          <div className="gameplay-image-group-holder">
              {/* <img className={`gameplay-image`} width="450px" height="253.5px" src="/LD5-spillBeans-opt.gif" />
              <img className={`gameplay-image`} width="450px" height="253.5px" src="/LD5-spillBeans-opt.gif" /> */}
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS2-lavaStompa.png" />
                </div>
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS8-ThunderWhacked.png" />
                </div>
            </div>
          <p>
            You can even equip feathers to give you perks in battles... or make combat <b>MORE DIFFICULT </b> 
            if you crave the extra challenge! Numbers are kept small too to allow you to keep track of how 
            much damage different moves will do more easily in your head than traditional RPGs!
          </p>
          <div className="gameplay-image-group-holder">
              {/* <img className={`gameplay-image`} width="450px" height="253.5px" src="/LD5-spillBeans-opt.gif" />
              <img className={`gameplay-image`} width="450px" height="253.5px" src="/LD5-spillBeans-opt.gif" /> */}
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS6-dover-attack-v2.png" />
                </div>
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS10-Feathers-menu.png" />
                </div>
            </div>

            <p>If Dover wants to save his family and rebuild their airplane, he'll need to build some confidence to make that happen. Help Dover gain <b>Confidence Points (CP)</b> through overcoming battles to unlock his true potential!</p>
            <div className="gameplay-image-group-holder">
              {/* <img className={`gameplay-image`} width="450px" height="253.5px" src="/LD5-spillBeans-opt.gif" />
              <img className={`gameplay-image`} width="450px" height="253.5px" src="/LD5-spillBeans-opt.gif" /> */}
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS5-dunder.png" />
                </div>
                <div className='gameplay-image-wrap'>
                  <img className={`gameplay-image`} width="450px" height="253.5px" src="/SS10-Feathers-menu.png" />
                </div>
            </div>
        </div>

        <div id="Characters">
          <h2>Meet new friends!</h2>
          <CharacterBio />
        </div>

        <NewsletterSubscribe />
        
        <div id='PressKit'>
          <h2>Press Kit full of beans to be spilled!</h2>
          <div>
            <h3>Trailer, gifs, screenshots, and more descriptions on Google Drive</h3>
            <a href="https://drive.google.com/drive/folders/1nvKIo6Y5S8t2zZrMUDxCzysgTEgaoB0q?usp=sharing"><button className='googleDriveLink'>Flightless Press Kit Google Drive</button></a>
          </div>
          <div>
            <h3>Quick Facts</h3>
            <div className='quickFactsPressKit'>
              <div className='single-fact'><b>Created by:</b> Mole Team 6</div>
              <div className='single-fact'><b>Published by:</b> Mole Team 6</div> 
              <div className='single-fact'><b>Promo Art by:</b> <a href='https://pathofpixels.de/'>Path of Pixels</a></div> 
              <div className='single-fact'><b>Platforms:</b> <a href='#Steam'>Steam</a></div> 
              <div className='single-fact'><b>Price:</b> TBD</div> 
              <div className='single-fact'><b>Release:</b> TBD</div> 
              <div className='single-fact'><b>Languages:</b> English | More TBD</div> 
              <div className='single-fact'><b>Contact:</b> contact@moleteam6.com</div> 
              <div className='single-fact'><b>Twitter:</b> <a href='https://twitter.com/flightless_game/'>@flightless_game</a></div> 
              <div className='single-fact'><b>Youtube:</b> <a href='https://www.youtube.com/channel/UC_bpfFMOLG3nnjErpk_fbPg'>Mole Team 6 Youtube</a></div> 
            </div>
          </div>
          
        </div>
        
      </div>

      <div className='copyright-section'>
        <FontAwesomeIcon icon={faCopyright} />Mole Team 6. Rice and Rye Games LLC. ALL RIGHTS RESERVED.
      </div>
      <div className='social-section'>
        <a className="single-social-button"  href="https://store.steampowered.com/app/1941200/Flightless/">
                   <FontAwesomeIcon icon={faSteam} />
        </a>
        <a className="single-social-button"  href="https://www.youtube.com/channel/UC_bpfFMOLG3nnjErpk_fbPg">
                   <FontAwesomeIcon icon={faYoutube} />
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