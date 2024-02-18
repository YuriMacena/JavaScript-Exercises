function calcular(){
    res = document.getElementById('result')
    v1 = Number(window.prompt ('Digite o primeiro número.'))
    v2 = Number(window.prompt ('Digite o segundo número.'))
    opt = Number(window.prompt (`Os números que recebi foram ${v1} e ${v2}. O que devo fazer com eles?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))
    switch (opt) {
        case 1:
            res.innerHTML = `<h2>O resultado da soma dos números ${v1} e ${v2}!</h2>`
            res.innerHTML += `<p>${v1} + ${v2} = ${v1+v2}</p>`
        break
        case 2:
            res.innerHTML = `<h2>O resultado da subtração dos números ${v1} e ${v2}!</h2>`
            res.innerHTML += `<p>${v1} - ${v2} = ${v1-v2}</p>`
        break
        case 3:
            res.innerHTML = `<h2>O resultado da multiplicação dos números ${v1} e ${v2}!</h2>`
            res.innerHTML += `<p>${v1} x ${v2} = ${v1*v2}</p>`
        break
        case 4:
            res.innerHTML = `<h2>O resultado da divisão dos números ${v1} e ${v2}!</h2>`
            res.innerHTML += `<p>${v1} / ${v2} = ${v1/v2}</p>`
        break
        default:
            window.alert(`Opção inválida, digite uma das opções solicitadas.`)
    }
}