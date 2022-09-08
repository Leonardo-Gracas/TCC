import React from "react";
import { useState } from "react";

export default props => {

    const [active, setActive] = useState(false)

    const content = (
        <div className="back" onClick={() => setActive(!active)}>
            <div className="pop-up">
                <div className="header"> 
                    <p>{props.svg} {props.text}</p>
                </div>
                <div className="body">
                    {props.content}
                </div>
            </div>
        </div>
    )

    return (
        <div className='card'>
            <button onClick={() => setActive(!active)}>
                {props.svg}
                <p>{props.text}</p>
            </button>
            {active == true ? content : false}
        </div>
    )
}