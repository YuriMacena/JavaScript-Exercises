let res = document.getElementById('result')
let comp = 0
let player = 0

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let randow = Math.random()
    comp = min + Math.trunc(dif * randow)
}

function jogar(){
    player = Number(window.prompt('Qual é o seu palpite?'))
    if (player < comp) {
        res.innerHTML += `<p>Você escreveu o número ${player}, meu número é <strong>MAIOR!</strong></p>`
    } else if (player > comp) {
        res.innerHTML += `<p>Você escreveu o número ${player}, meu número é <strong>MENOR!</strong></p>`
    } else if (player == comp) {
        res.innerHTML += `<p>Você escreveu o número ${player}, <strong>PARABÉNS!</strong> Você acertou o meu número.</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}