import React from "react";

import './Pages.css'
import Button from './ContentButon'

export default props => {

    return (
        <main>
            <section className="first">
                <strong>Sobre</strong>
                <p>Detalhes e propósito do projeto</p>
            </section>
            <section className="second">
                <Button
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>}
                    text={'Peças'}
                    content={(
                        <>
                            <p>Utilizamos uma quantidade de peças pensada para não gastarmos demais com a construção do Trabalho de Conclusão de Curso</p>
                            <li><strong>1</strong> Placa ARDUINO</li>
                            <li><strong>1</strong> Sensor Ultrassônico HS04</li>
                            <li><strong>1</strong> Ponte H</li>
                            <li><strong>2</strong> Motores</li>
                            <li><strong>1</strong> Rodas</li>
                        </>
                    )}
                />
                <Button
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>}
                    text={'Custo'}
                    content={(
                        <p>Os gastos foram um pouco maiores do que o esperado por conta de que tivemos que repor algumas peças que não funcionavam. Mas o valor total de projeto ficou em torno de R$120,00</p>
                    )}
                />
                <Button
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="88" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="128" y1="20" x2="128" y2="60" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="20" y1="128" x2="60" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="236" x2="128" y2="196" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="236" y1="128" x2="196" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="128" r="32" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>}
                    text={'Propósito'}
                    content={(
                        <p>A ideia é de criar algo pra ajudar engenheiros a fazer trabalhos mais precisos. O robo indicaria as medidas de distância na planta criada e assim facilitaria o processo de construção ou reforma de algum lugar.</p>
                    )}
                />
            </section>
            <section className="footer">
                <p>© copyright - 32A FLAL</p>
            </section>
        </main>
    )
}