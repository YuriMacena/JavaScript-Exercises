function contar(){
    res = document.getElementById('result')
    for (count=10;count>=1;count--){
        res.innerHTML += `${count} ➡️`
    }
    res.innerHTML += `🏁`
}