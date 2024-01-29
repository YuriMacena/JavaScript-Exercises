function calcular(){
    num=window.prompt('Digite um número:')
    if (num%2==0){
        res.innerHTML=`<p>O número <strong>${num}</strong> digitado é <mark>par</mark>.</p>`
    } else {
        res.innerHTML=`<p>O número <strong>${num}</strong> digitado é <mark>ímpar</mark>.</p>`
    }
}