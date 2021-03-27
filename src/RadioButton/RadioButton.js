import React from 'react'
import './RadioButton.css'

function RadioButton(props) {

    let wrapperMode = ""

    if (props.placement === "left") {
        wrapperMode = "wrapper-left"
    } else {
        wrapperMode = "wrapper-right"
    }

    return (
        <div className={"wrapper " + wrapperMode}>
            <input type="radio" name="team-real" id="teamReal" />
            <span className="radio-label" htmlFor="teamReal">{props.label}</span>
        </div>
    )
}

export default RadioButton