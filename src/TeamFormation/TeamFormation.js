import React from 'react'
import './TeamFormation.css'
import {useHistory} from 'react-router-dom'

function TeamFormation() {

    let history = useHistory()

    return (
        <>
            <div className="team-formation-inputs">
                <label htmlFor="teamFormation">Formation</label>
                <select name="formation" id="teamFormation">
                    <option value="3-2-2-3">3 - 2 - 2 - 3</option>
                    <option value="3-2-3-1">3 - 2 - 3 - 1</option>
                    <option value="3-4-3">3 - 4 - 3</option>
                    <option value="3-5-2">3 - 5 - 2</option>
                    <option value="4-2-3-1">4 - 2 - 3 - 1</option>
                    <option value="4-3-1-1">4 - 3 - 1 - 1</option>
                    <option value="4-3-2">4 - 3 - 2</option>
                    <option value="4-4-2">4 - 4 - 2</option>
                    <option value="4-5-1">4 - 5 - 1</option>
                    <option value="5-4-1">5 - 4 -1</option>
                </select>
                <div className="field"></div>
                <div className="button-wrapper">
                    <button className="button" onClick={() => history.push("/")}>Save</button>
                </div>
            </div>
        </>
    )
}

export default TeamFormation