import React from "react";

import './Perfil.css'

export default props => {

    return (
        <div className="perfil">
            <div id={props.foto} className='foto'></div>
            <div className="text">
                <strong>{props.nome}</strong>
                <p>{props.description}</p>
            </div>
        </div>
    )
}