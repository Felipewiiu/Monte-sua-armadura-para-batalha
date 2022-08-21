
        
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const iniciar = document.querySelector("[data-iniciar]")
const audio = document.querySelector("[data-audio]")
const audio2 = document.querySelector("[data-audio2]")



controle.forEach((valorAtual) =>{// para cada valoratual de controle execute......
    // valor atual é o índice do array do forEach
    valorAtual.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)// textConten serve para capturar um texto
        atualizaEstatisticas(evento.target.dataset.peca)//um dataset acessa o valor do data-atributes
        tocaSomAdd()
    })

})

function manipulaDados (operação, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operação === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }

}

function atualizaEstatisticas (peca){
    // console.log(pecas[peca])// aqui eu não preciso usar as aspas dentro do [] pois o parâmetro já é uma string

    estatisticas.forEach((elemento) => {
        // console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]// esse trecho acessa um valor dentro de um objeto
        
    })

}

iniciar.addEventListener("click", () => {
    tocaSom()
    
})

function tocaSom (){
    audio.play()
}

function tocaSomAdd () {
    audio2.play()
}
