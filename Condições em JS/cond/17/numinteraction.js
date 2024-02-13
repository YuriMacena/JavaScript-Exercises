function numGerador(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    
    let res = document.getElementById('result')
    res.innerHTML += `<p>Pensei no número <mark>${num}</mark>...`     
}

function erase(){
    res=document.querySelector('div#result')
    res.innerHTML = '<p>Cada vez que você clicar no botão acima, eu irei gerar um número entre 0 a 100.</p>'
}