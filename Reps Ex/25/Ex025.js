function calcular(){
    num = document.getElementById('txtnum')
    n = num.value
    res = document.getElementById('result')
    if (num.value.length == 0){
        window.alert('Digite um número')
    } else {
        res.innerHTML += `<h3>Contando de 0 até ${n}</h3>`
        for (count = 0; count <= n; count++){
        res.innerHTML += `${count} ➡️`
        }
        res.innerHTML += `🏁`
    }
}