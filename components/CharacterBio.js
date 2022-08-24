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
                                <div className="bio-images-column">
                                 <Image className={`${item.colorClass} bio-portrait-image`} width="150%" height="150%" src={item.portrait} />
                                 
                                </div>
                                <div className="bio-info-column">
                                    <h3>{item.fullName}</h3>
                                    <p><b>Element:</b> {item.element}</p>
                                    <p><b>Primary Skill:</b> {item.skillAbility}</p>
                                    <p><b>Likes:</b> {item.likes}</p>
                                    <p><b>Dislikes:</b> {item.dislikes}</p>
                                    <p><b>Hometown:</b> {item.homeTown}</p>
                                    <p className="bio-desc"><i>{item.aboutMe}</i></p>
                                </div>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default CharacterBio