function inicio(){
    nome=window.prompt('Qual é o seu nome?')
    res=document.getElementById('resultado')
    res.innerHTML=`Olá, <strong>${nome}!</strong>`
}