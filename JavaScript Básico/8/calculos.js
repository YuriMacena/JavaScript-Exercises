function calcular(){
    n=window.prompt('Digite um número:')
    res=document.querySelector('section#result')
    res.innerHTML+=`<p>O número a ser analisado aqui será o <mark>${n}</mark>.
    <hr></p>`
    res.innerHTML+=`<p>O valor absoluto de ${n} é ${Math.abs(n)}.</p>`
    res.innerHTML+=`<p>A parte inteira de ${n} é ${Math.trunc(n)}.</p>`
    res.innerHTML+=`<p>O valor inteiro mais próximo de ${n} é ${Math.round(n)}.</p>`
    res.innerHTML+=`<p>A raíz quadrade de ${n} é ${Math.sqrt(n)}.</p>`
    res.innerHTML+=`<p>A raíz cúbica de ${n} é ${Math.cbrt(n)}.</p>`
    res.innerHTML+=`<p>O valor de ${n}<sup>2</sup> é ${Math.pow(2, n)}.</p>`
    res.innerHTML+=`<p>O valor de ${n}<sup>3</sup> é ${Math.pow(3, n)}.</p>`
}