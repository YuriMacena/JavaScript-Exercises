function contar(){
    res = document.getElementById('result')
    res.innerHTML = `<h2>Contando de 1 até 10</h2>`
    for (count = 1; count <=10; count++){
        res.innerHTML += `${count} ➡️`
    }
    res.innerHTML += `🏁`
}