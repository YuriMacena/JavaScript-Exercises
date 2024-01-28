function media(){
    nome=window.prompt('Qual é o nome do aluno?')
    n1=Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    n2=Number(window.prompt(`Qual foi a segunda nota de ${nome}`))
    m=(n1+n2)/2
    res.innerHTML=`<p>A média do aluno <mark>${nome}</mark> foi calculada!<br/>
    A primeira nota de ${nome} foi <mark>${n1}</mark>.<br/>
    A segunda nota de ${nome} foi <mark>${n2}</mark>.<br/>
    A média do aluno ${nome} é <mark>${m}</mark>.</p>`
    if (m<=5){
        res.innerHTML+=`<p><strong>Estude um pouco mais!</strong></p>`
    } else if (m>=6){
        res.innerHTML+=`<p><strong>Meus parabéns!</strong></p>`
    }
}