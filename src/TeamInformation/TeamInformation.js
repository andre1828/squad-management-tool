import React from 'react'
import './TeamInformation.css'
import RadioButton from './../RadioButton/RadioButton.js'
import TagList from './../TagList/TagList.js'

function TeamInformation() {
    return (
        <>
            <h3 className="section-title">TEAM INFORMATION</h3>
            <div className="form-input">
                <label htmlFor="teamName">Team name</label>
                <input type="text" placeholder="Insert team name" id="teamName" />
            </div>
            <div className="form-input">
                <label htmlFor="teamDescription">Team description</label>
                <textarea name="team-description" cols="30" rows="10" id="teamDescription"></textarea>
            </div>
            <div className="form-input">
                <label htmlFor="teamWebsite">Team website</label>
                <input type="text" placeholder="http://myteam.com" id="teamWebsite" />
            </div>
            <div className="form-input-radio">
                <label>Team type</label>
                <RadioButton label="Real" placement="left" />
                <RadioButton label="Fantasy" placement="right" />
            </div>
            <div className="form-input">
                <label>Tags</label>
                <TagList/>
            </div>
        </>
    )
}

export default TeamInformation