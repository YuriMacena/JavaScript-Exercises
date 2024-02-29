function calcular(){
    num = document.querySelector('input#txtnum')
    n = Number(num.value)
    res = document.querySelector('div#result')
    res.innerHTML = ''
    res.innerHTML += `<h3>Tabuada de ${n}</h3>`
    for (count = 1; count<=10; count++){
        item = document.createElement ('sequenciaCount')
        item.innerHTML = `<p>${n} x ${count} = <strong>${n*count}</strong>`
        item.value = `res${count}`
        res.appendChild(item)
    }
}