import React, {Component} from "react";


const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={"btn ${checkButtonStyle} ${checkButtonSize}"} onclick="window.location.href='https://store.steampowered.com/app/1941200/Flightless/'" type="button">
        {/* onClick={onClick}
        type={type}> */}
            {children}
            {/* <a href="https://store.steampowered.com/"></a> */}
        </button>
    )
}