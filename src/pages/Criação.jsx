import React from "react";

import './Pages.css'
import Button from './ContentButon'

export default props => {

    return (
        <main>
            <section className="first">
                <strong>Criação</strong>
                <p>Detalhes da criação do projeto</p>
            </section>
            <section className="second">
                <Button 
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>}
                    text='Ideia'
                    content={(
                        <p style={{textAlign: 'justify', paddingInline: '8px'}}>O projeto surgiu de um Brainstorm que foi se aperfeiçoando. A ideia inicial era de um robo vigilante que caminhasse por um terreno aberto alertanto qualquer irregularidade. Porém, um problema (que se tornaria solução) surgiu. Pensamos que seria difícil fazer ele ter na memória todo o terreno caminhável da unasp, por exemplo. Então, ao invéz de dar os dados prontos, pensamos em fazer ele mesmo reconhecer o caminho e desenvolver o próprio mapa que, para nossa felicidade, se tornou o projeto principal.</p>
                    )}
                />
                <Button 
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>}
                    text='Protótipo'
                    content={(
                        <p style={{textAlign: 'justify', paddingInline: '8px'}}>Um robo com oito sensores foi a primeira ideia. Colocariamos um em cada direção e gravaríamos seus resultados. Porém fazer apenas com um sensor surtil o mesmo efeito. Este robô só precisa olhar 180 graus (esquerda para direita) para saber para onde está indo. As rodas e sensores devem mapear enquanto se sincronizam para que funcione bem.</p>
                    )}
                />
                <Button 
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="32" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M77.1,178.9A71.6,71.6,0,0,1,61.7,156a71.6,71.6,0,0,1,0-56A71.6,71.6,0,0,1,77.1,77.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M178.9,77.1A71.6,71.6,0,0,1,194.3,100a71.6,71.6,0,0,1,0,56,71.6,71.6,0,0,1-15.4,22.9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M48.8,207.2a112.9,112.9,0,0,1-24-35.6,112.4,112.4,0,0,1,0-87.2,112.9,112.9,0,0,1,24-35.6" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M207.2,48.8a112.9,112.9,0,0,1,24,35.6,112.4,112.4,0,0,1,0,87.2,112.9,112.9,0,0,1-24,35.6" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>}
                    text={'Sensor'}
                    content={(
                        <p style={{textAlign: 'justify', paddingInline: '8px'}}>O sensor é o "Ultrassônico". Não é um dos mais potentes, mas funciona para o que precisamos. Porém, a falta de precisão dele atrasa um pouco a leitura do mapa em volta de si, uma vez que ele deve olhar para todos os 180 graus um de cada vez, marcando sua distância. Após a leitura, o robô gera um código que, posteriormente, deve ser aplicado em nosso software. Fazemos uma análise utilizando ângulo e distância com trigonometria para saber qual píxel da matriz devemos marcar.</p>
                    )}
                />
                
            </section>
            <section className="footer">
                <p>© copyright - 32A FLAL</p>
            </section>
        </main>
    )
}