import './MyTeams.css'
import React from 'react'
import plusIcon from './plus.png'

function MyTeams() {
    return (
        <div className="my-teams">
            <div className="my-teams-header">
                <h3 className="widget-title">My teams</h3>
                <button className="create-team-button">
                    <img src={plusIcon} alt="" />
                </button>
            </div>
            <div className="title-border"></div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Barcelona</td>
                        <td>Barcelona Squad</td>
                    </tr>
                    <tr>
                        <td>Barcelona</td>
                        <td>Barcelona Squad</td>
                    </tr>
                    <tr>
                        <td>Barcelona</td>
                        <td>Barcelona Squad</td>
                    </tr>
                    <tr>
                        <td>Barcelona</td>
                        <td>Barcelona Squad</td>
                    </tr>
                    <tr>
                        <td>Barcelona</td>
                        <td>Barcelona Squad</td>
                    </tr>
                    <tr>
                        <td>Barcelona</td>
                        <td>Barcelona Squad</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default MyTeams;