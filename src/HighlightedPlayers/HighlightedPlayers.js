import './HighlightedPlayers.css'
import React from 'react'
import ReactDOM from 'react-dom'
import profilePic from './profile-pic.png'

function HighlightedPlayers() {
    return (
        <div className="highlighted-players">
            <div className="highlighted-player">
                <h3>Most picked player</h3>
                <div className="most-picked-player-rim">
                    <img src={profilePic} alt="black profile picture" className="player-picture" />
                </div>
                <p className="player-percentage">75%</p>
            </div>
            <div className="field-line"></div>
            <div className="field-center-circle"></div>
            <div className="highlighted-player">
                <h3>Less picked player</h3>
                <img src={profilePic} alt="black profile picture" className="player-picture" />
                <p className="player-percentage">25%</p>
            </div>
        </div>
    )
}

export default HighlightedPlayers