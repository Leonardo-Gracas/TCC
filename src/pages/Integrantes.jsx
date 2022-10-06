import React from "react";

import './Pages.css'

import Perfil from "./Perfil";

export default props => {

    return (
        <main>
            <section className="first">
                <strong>Integrantes</strong>
                <p>Detalhes sobre os integrantes</p>
            </section>
            <section className="second">
                <Perfil 
                    foto = 'Leo'
                    nome = 'Leonardo'
                    description = 'Desenvolvedor do software e do site'
                />
                <Perfil 
                    foto = 'Felipe'
                    nome = 'Felipe ADM'
                    description = 'Designer e construtor'
                />
                <Perfil 
                    foto = 'Kadri'
                    nome = 'Arthur Kadri'
                    description = 'Construtor e CEO'
                />
                <Perfil 
                    foto = 'Lucas'
                    nome = 'Lucas Evangelista'
                    description = 'CEO e fornecedor'
                />
                <Perfil 
                    foto = 'Elon'
                    nome = 'Elon Musk'
                    description = 'Investidor'
                />
            </section>
            <section className="footer">
                <p>© copyright - 32A FLAL</p>
            </section>
        </main>
    )
}