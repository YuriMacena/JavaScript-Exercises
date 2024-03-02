function calcular(){
    res = document.getElementById('result')
    num = Number(document.getElementById('txtnum').value)
    res.innerHTML += `<h3>Valor da raíz quadrada de ${num}:</h3>`
    res.innerHTML += `${num} x ${num} = ${num*num}`
}