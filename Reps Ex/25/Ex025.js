function calcular(){
    num = document.getElementById('txtnum')
    n = num.value
    res = document.getElementById('result')
    res.innerHTML += `<h3>Contando de 0 até ${n}</h3>`
    for (count = 0; count <= n; count++){
        res.innerHTML += `${count} ➡️`
    }
    res.innerHTML += `🏁`
}