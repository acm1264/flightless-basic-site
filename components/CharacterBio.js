import React, {Component} from "react";
import {Bios} from "./Bios"

class CharacterBio extends Component{
    render() {
        return(
            <nav className="all-bios-holder">
                <ul className="single-bio-holder">
                    {Bios.map((item, index) => {
                        return(
                            <li key={index}>
                                <h3>{item.fullName}</h3>
                                
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default CharacterBio