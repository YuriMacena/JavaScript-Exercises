function contar(){
    res = document.getElementById('result')
    res.innerHTML += `<h2>Contando de 1 a 10, marcando os pares.</h2>`
    for (count = 1; count <=10; count++){
        if (count %2 == 0) {
            res.innerHTML += `<mark><strong>${count}</strong></mark>➡️`
        } else {
            res.innerHTML += `${count} ➡️`
        }
    }
    res.innerHTML += `🏁`
}