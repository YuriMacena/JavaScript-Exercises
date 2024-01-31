function calcular(){
    num=document.getElementById('txtnum')
    res=document.getElementById('result')
    if (num.value.length==0){
        window.alert('Digite um número')
    } else {
        n=Number(num.value)
        res.innerHTML=''
        for(cont=1; cont<=10; cont++){
            item=document.createElement('option')
            item.innerText=`${n} x ${cont} = ${n*cont}`
            item.value=`res${cont}`
            res.appendChild(item)
        }
    }
}