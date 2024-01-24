function calcular(){
    nome=window.prompt('Qual é o nome do aluno?')
    n1=Number(window.prompt(`Qual é a primeira nota do aluno ${nome}?`))
    n2=Number(window.prompt(`Qual é a segunda nota do aluno ${nome}?`))
    Number(m=(n1+n2)/2)
    res.innerHTML=(`As notas obtidas pelo aluno <mark>${nome}</mark> foram <mark>${n1} e ${n2}</mark>.<br/>
    A média final será <mark>${m}</mark>.`)
}