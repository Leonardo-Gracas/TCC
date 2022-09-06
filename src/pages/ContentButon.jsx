import React from "react";
import { useState } from "react";

export default props => {

    const [active, setActive] = useState(false)
    const deactivated = (
        <button onClick={() => setActive(true)}>
            {props.svg}
            <p>{props.text}</p>
        </button>
    )

    const content = (
        <div className={active == true ? 'activated' : false}>
            <button onClick={() => setActive(!active)}>
                {props.svg}
                <p>{props.text}</p>
            </button>
            <div className="body" style={active == true ? {display: 'block'} : {display: 'none'}}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam cum nostrum mollitia, dolores reprehenderit inventore. Nobis dolores, error dignissimos eaque, itaque praesentium exercitationem eos, nostrum sapiente harum excepturi. Enim, sint.</p>
            </div>

        </div>
    )

    return (
        <>
            {content}
        </>
    )
}