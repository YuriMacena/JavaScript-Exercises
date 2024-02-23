function iniciar(){
    res = document.getElementById('result')
    n1 = Number(window.prompt('Digite o primeiro número'))
    n2 = Number(window.prompt('Digite o segundo número'))
    opt = Number(window.prompt(`Os números que recebi foram ${n1} e ${n2}. O que devo fazer com eles?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))
    switch (opt){
        case 1:
        res.innerHTML = `<p>A soma de <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <mark>${n1+n2}</mark>.</p>`
        break
        case 2:
        res.innerHTML = `<p>A subtração de <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <mark>${n1-n2}</mark>.</p>`
        break
        case 3:
        res.innerHTML = `<p>A multiplicação de <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <mark>${n1*n2}</mark>.</p>`
        break
        case 4:
        res.innerHTML = `<p>A divisão de <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <mark>${n1/n2}</mark>.</p>`
        break
        default:
        window.alert('Digite uma das opções solicitadas.')
    }
}