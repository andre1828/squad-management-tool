import './SearchPlayers.css'
import React from 'react'

function SearchPlayers() {
    return (
        <div className="search-players">
            <div className="form-input">
                <label htmlFor="searchPlayers">Search players</label>
                <input type="text" id="searchPlayers" />
            </div>
            <ul className="player-list">
                <li className="player">
                    <p>Name:
                        <span className="value">Cristiano Ronaldo</span>
                    </p>
                    <p>Age:
                        <span className="value">32</span>
                    </p>
                    <p>Nationality:
                        <span className="value">Portugal</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default SearchPlayers