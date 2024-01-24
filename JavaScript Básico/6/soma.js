function calcular(){
    n1=Number(window.prompt('Digite um número:'))
    n2=Number(window.prompt('Digite outro número'))
    s=n1+n2
    
    res.innerHTML=`A soma de <mark>${n1}</mark> com <mark>${n2}</mark> é igual a <strong>${s}</strong>.`
}