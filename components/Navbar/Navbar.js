import { defaultHead } from "next/head";
import React, {Component} from "react";
import {MenuItems} from "./MenuItems"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@components/Button";


class Navbar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <img src="/gameLogo.png" className="navbar-logo"></img>

                {/* hamburger menu */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <FontAwesomeIcon className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                                    icon={this.state.clicked ? faTimes : faBars} 
                    />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index} onClick={this.handleClick}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                {/* <Button>Steam</Button> */}
            </nav>
        )
    }
}

export default Navbar