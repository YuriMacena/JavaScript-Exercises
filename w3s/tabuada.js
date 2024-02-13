function calcular(){
    num = document.getElementById('txtnum')
    res = document.getElementById('result')
    if (num.value.length == 0) {
        window.alert('Digite um número.')
    } else {
        n = Number(num.value)
        res.innerHTML = ''
        for (count=1; count<=10; count++){
            item=document.createElement('option')
            item.innerHTML = `${n} x ${count} = ${n*count}`
            item.value = `count${res}`
            res.appendChild(item)
        }
    }
}