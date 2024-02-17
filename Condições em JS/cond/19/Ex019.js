function calcular(){
    res = document.querySelector('div#result')
    n1 = Number(window.prompt('Primeiro valor'))
    n2 = Number(window.prompt('Segundo valor'))
    action = Number(window.prompt(`Os valores informados são ${n1} e ${n2}.
    O que vamos fazer?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))
    res.innerHTML = `<h2>Calculando...</h2>`
    switch (action) {
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = ${n1+n2}</p>`
            break
        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = ${n1-n2}`
            break
        case 3:
            res.innerHTML += `<p>${n1} * ${n2} = ${n1*n2}`
            break
        case 4:
            res.innerHTML += `<p>${n1} / ${n2} = ${n1/n2}`
            break
        default:
            res.innerHTML += `<p>Ação inválida. Digite as uma das opções solicitadas.</p>`
            break
    }
}