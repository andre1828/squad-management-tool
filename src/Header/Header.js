import './Header.css'
import React from 'react'
import ReactDOM from 'react-dom'
import logo from './venturus.png'
import avatar from './avatar.png'

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo-name-container">
                    <img src={logo} alt="logo venturus" className="logo" srcSet="" />
                    <h3 className="app-name">Squad Management Tool</h3>
                </div>
                <p>John Doe</p>
                <img src={avatar} alt="user avatar" className="avatar" srcSet="" />
            </header>
        </>
    )
}

export default Header