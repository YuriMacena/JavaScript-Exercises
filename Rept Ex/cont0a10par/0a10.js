function start(){
    res = document.getElementById('result')
    res.innerHTML = `<h2>Resultado:</h2>`
    for (count=1; count<=10; count++){
        if (count%2 == 0){
            res.innerHTML += `<strong><mark>${count}</mark></strong> ➡️`
        } else {
            res.innerHTML += `${count} ➡️`
        }
    }
    res.innerHTML += `🏁`
}