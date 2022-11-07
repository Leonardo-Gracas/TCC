import React from "react";
import './css/ContentButton.css'

export default props => {

    return (
        <div className='card'>
            <div className="name">
                {props.svg}
                <h1>{props.text}</h1>
            </div>
            <div className="Body">
                {props.content}
            </div>
        </div>
    )
}