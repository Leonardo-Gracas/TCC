import React from "react";

import './Pages.css'
import './css/Software.css'

export default props => {

    function readCode() {
        let vetor = new Array(256)
        for (let i = 0; i < 256; i++) {
            vetor[i] = new Array(256)
            vetor[i].fill(0)
        }

        let code = document.getElementById('code').value
        let hips = new Array(180)
        let lastchar = 0
        let nextchar = 0
        let index = -1

        //Separa cada número do código dentro do array "hips"
        for (let c = 0; c < code.length; c++) {
            if (code[c] == ';') {
                index += 1
                nextchar = c
                let width = nextchar - lastchar
                let part = ''
                for (let a = 1; a < width; a++) {
                    part += code[lastchar + a]
                }
                if (!isNaN(part)) {
                    part = Number(part)
                }
                if (part == '+') { console.log(part) }
                hips[index] = part
                lastchar = nextchar
            }
        }

        let ang = -1
        let y = 148

        //calcula as coordenadas dos pontos de colisão baseado em Ângulo e distância
        for (let i = 0; i < hips.length; i++) {
            let hip = hips[i]
            ang++

            if (hip == '+') {
                y -= 15
                ang = -1
            } else {
                if (hip > 15) {
                    hip = 0
                }

                if (hip > 4) {
                    let ca = Math.floor(Math.sin(Math.PI / (180 / (ang + 180))) * hip * 2);
                    let co = Math.floor(Math.cos(Math.PI / (180 / (ang + 180))) * hip * 2);
                    if (Math.abs(ca) <= 128) {
                        if (Math.abs(co) <= 128) {
                            vetor[ca + y][co + 128] = 1

                            for (let p = -1; p <= 1; p++) {
                                for (let q = -1; q <= 1; q++) {
                                    if (vetor[ca + y + p][co + 128 + q] == 0) {
                                        vetor[ca + y + p][co + 128 + q] = 2
                                    }
                                }
                            }

                        }
                    }

                }
            }



        }

        //limpa o desenho anterior e cria um novo
        let main = document.getElementById('map')
        let div = document.getElementById('draw')
        main.removeChild(div)
        div = document.createElement('div')
        div.setAttribute('id', 'draw')
        main.appendChild(div)

        //desenha pixel por pixel uma imagem
        for (let i = 0; i < 512; i++) {
            let line = document.createElement('div')
            line.setAttribute('class', 'line')
            div.appendChild(line)
            for (let j = 0; j < 512; j++) {
                let point = document.createElement('div')
                if (vetor[i][j] == 0) {
                    point.setAttribute('class', 'pointb')
                    line.appendChild(point)
                } else if (vetor[i][j] == 1) {
                    point.setAttribute('class', 'pointw')
                    line.appendChild(point)
                } else if (vetor[i][j] == 2) {
                    point.setAttribute('class', 'points')
                    line.appendChild(point)
                }
            }
        }
    }

    return (
        <main>
            <section className="first">
                <strong>Software</strong>
                <p>App para leitura do código</p>
            </section>
            <section className="Mapping">
                <div className="insert">
                    <p>Insira o código</p>
                    <input type="text" id="code" />
                    <button onClick={() => readCode()}>Ler</button>
                </div>
                <div id="map">
                    <div id="draw">

                    </div>
                </div>
            </section>
            <section className="footer">
                <p>© copyright - 32A FLAL</p>
            </section>
        </main>
    )
}