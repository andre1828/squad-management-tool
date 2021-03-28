import React from 'react'
import './ConfigureSquad.css'
import TeamFormation from './../TeamFormation/TeamFormation.js'
import SearchPlayers from './../SearchPlayers/SearchPlayers.js'

function ConfigureSquad() {
    return (
        <>
            <h3 className="section-title">Configure Squad</h3>
            <TeamFormation/>
            <SearchPlayers/>
        </>
    )
}

export default ConfigureSquad