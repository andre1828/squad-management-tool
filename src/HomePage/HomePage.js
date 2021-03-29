import './HomePage.css'
import React from 'react'
import MyTeams from './../MyTeams/MyTeams.js'
import Top5 from './../Top5/Top5.js'
import HighlightedPlayers from './../HighlightedPlayers/HighlightedPlayers.js'

function HomePage() {
    return (
        <div className="home-page content">
            <MyTeams />
            <Top5 />
            <HighlightedPlayers />
        </div>
    )
}

export default HomePage