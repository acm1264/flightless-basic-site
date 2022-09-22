import React, {Component} from "react";
import {Bios} from "./Bios"
import Image from 'next/image'

class CharacterBio extends Component{
    render() {
        return(
            <nav className="bio-component-master">
                <ul className="all-bios-list">
                    {Bios.map((item, index) => {
                        return(
                            <li className="single-bio-list-element" key={index}>
                                <div className="portrait-and-info-combo">
                                    <div className="bio-portrait-holder">
                                        <Image className={`${item.colorClass} bio-portrait-image`} width="200%" height="200%" src={item.portrait} />
                                    </div>
                                    <div className="bio-info-holder">
                                        <h3>{item.fullName}</h3>
                                        <p><b>Element:</b> {item.element}</p>
                                        <p><b>Primary Skill:</b> {item.skillAbility}</p>
                                        <p><b>Likes:</b> {item.likes}</p>
                                        <p><b>Dislikes:</b> {item.dislikes}</p>
                                        <p><b>Hometown:</b> {item.homeTown}</p>
                                    </div>
                                </div>
                                <div className="bio-desc-holder">
                                    <p className="bio-desc"><i>{item.aboutMe}</i></p>
                                </div>
                                <div className="bio-gif-holder">
                                    {/* width="600px" height="338px" */}
                                    <img className={`${item.colorClass} bio-gif`}  src={item.gif} />
                                </div>



                                {/* <div className="bio-images-column">
                                 <Image className={`${item.colorClass} bio-portrait-image`} width="150%" height="150%" src={item.portrait} />
                                 <img className={`${item.colorClass} bio-portrait-image`} src={item.portraitPixel}></img>
                                 <Image className={`${item.colorClass} bio-gif`} width="600px" height="338px" src={item.gif} />
                                 <p className="bio-desc"><i>{item.aboutMe}</i></p>
                                </div>
                                <div className="bio-info-column">
                                    <div>
                                        <h3>{item.fullName}</h3>
                                        <p><b>Element:</b> {item.element}</p>
                                        <p><b>Primary Skill:</b> {item.skillAbility}</p>
                                        <p><b>Likes:</b> {item.likes}</p>
                                        <p><b>Dislikes:</b> {item.dislikes}</p>
                                        <p><b>Hometown:</b> {item.homeTown}</p>
                                    </div>
                                    <p className="bio-desc"><i>{item.aboutMe}</i></p>
                                    <Image className={`${item.colorClass} bio-gif`} width="600px" height="338px" src={item.gif} />
                                </div> */}
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default CharacterBio