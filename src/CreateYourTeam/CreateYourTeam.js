import React from 'react'
import TeamInformation from './../TeamInformation/TeamInformation.js'
import ConfigureSquad from './../ConfigureSquad/ConfigureSquad.js'
import './CreateYourTeam.css'

function CreateYourTeam() {
    return (
        <div className="create-your-team">
            <h3 className="widget-title">Create your team</h3>
            <div className="title-border"></div>
            <TeamInformation />
            {/* <ConfigureSquad /> */}
        </div>
    )
}

export default CreateYourTeam