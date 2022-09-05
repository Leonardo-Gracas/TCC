import React from "react";
import { ImgHTMLAttributes } from "react";

import './Sobre.css'

export default props => {

    return (
        <main>
            <section className="first">
                <img src='https://www.coliseugeek.com.br/wp-content/uploads/2021/07/coliseugeek-wall-e-nostalgia.jpg' alt="fundo" />
                <strong>Sobre</strong>
                <p>Detalhes e propósito do projeto</p>
            </section>
        </main>
    )
}