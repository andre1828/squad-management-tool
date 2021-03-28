import React from 'react'
import MyTeams from './../MyTeams/MyTeams.js'
import Top5Teams from './../Top5Teams/Top5Teams.js'
import HighlightedPlayers from './../HighlightedPlayers/HighlightedPlayers.js'

function HomePage() {
    return (
        <>
            <MyTeams />
            <Top5Teams />
            <HighlightedPlayers />
        </>
    )
}

export default HomePage