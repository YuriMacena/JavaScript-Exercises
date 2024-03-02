function calcular(){
    let n = Number(document.getElementById('txtnum').value)
    let res = document.querySelector('section#result')
        res.innerHTML = `<h3>Calculando ${n}!</h3>`
        let fat = 1
        for (let count=n; count>1; count--){
            fat*=count
            res.innerHTML += `${count} x `
        }
        res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    }