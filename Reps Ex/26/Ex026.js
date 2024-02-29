function calcular(){
    numInc = document.getElementById('txtnumInc')
    nInc = Number((numInc.value))
    numEnd = document.getElementById('txtnumEnd')
    nEnd = Number((numEnd.value))
    res = document.querySelector('section#result')
    res.innerHTML += `<h3>Contando de ${nInc} até ${nEnd}</h3>`
    if (nInc == nEnd){
        res.innerHTML += 'Não é possível contar, pois os números são iguais.'
    } else {
    for (count = nInc; count <= nEnd; count++){
        res.innerHTML += `${count} ➡️`
    }
    for (count = nInc; count >= nEnd; count--){
        res.innerHTML += `${count} ➡️`
    }
    res.innerHTML += '🏁'
    }
}