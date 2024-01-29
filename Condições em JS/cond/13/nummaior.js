function calcular(){
    n1=window.prompt('Digite um número:')
    n2=window.prompt('Digite outro número:')
    if (n1>n2){
        res.innerHTML=`<p>Comparando ${n1} com ${n2}, o número <mark>${n1}</mark> é <strong>MAIOR</strong>.</p>`
    }
    if (n1<n2){
        res.innerHTML=`<p>Comparando ${n1} com ${n2}, o número <mark>${n2}</mark> é <strong>MAIOR</strong>.</p>`
    }
    if (n1==n2 || n2==n1){
        res.innerHTML=`<p>Comparando ${n1} com ${n2}, ambos os números são <strong>IGUAIS</strong>.</p>`
    }
}