import React from "react";
import { useState } from "react";

export default props => {

    const [active, setActive] = useState(true)

    const content = (
        <div className="pop-up" onClick={() => setActive(!active)}>
            <div className="header">
                <p>{props.text}</p>
                {props.svg}
            </div>
            <div className="body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro quod distinctio doloribus accusantium iure vel adipisci voluptatibus, necessitatibus velit asperiores quos temporibus reprehenderit ad, natus quidem ex facilis eum?</p>
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