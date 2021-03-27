import React from 'react'
import ReactDOM from 'react-dom'
import './TeamInformation.css'

function TeamInformation() {
    return (
        <>
            <h3 className="section-title">TEAM INFORMATION</h3>
            <div className="form-input">
                <label htmlFor="">Team name</label>
                <input type="text" placeholder="Insert team name" />
            </div>
            <div className="form-input">
                <label htmlFor="">Team description</label>
                <textarea name="team-description" cols="30" rows="10"></textarea>
            </div>
            <div className="form-input">
                <label htmlFor="">Team website</label>
                <input type="text" placeholder="http://myteam.com" />
            </div>
            <div className="form-input">
                <label htmlFor="">Team type</label>
                <input type="radio" name="team-real" />
                <input type="radio" name="team-fantasy" />
            </div>
        </>
    )
}

export default TeamInformation