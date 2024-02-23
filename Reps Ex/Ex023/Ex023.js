function count(){
    res = document.getElementById('result')
    res.innerHTML += '<h3>Números pares de 1 até 10</h3>'
    for (count=2; count<=10; count++){
        if (count%2 == 0)
        res.innerHTML+=`${count} ➡️`
    }
    res.innerHTML+=`🏁`
}