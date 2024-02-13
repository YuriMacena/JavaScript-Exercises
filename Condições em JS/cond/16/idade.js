function calcular(){
    data = new Date().getFullYear()
    res=document.querySelector('div.result')
    let year = window.prompt('Qual ano você nasceu?')
    age = `${data - year}`
    res.innerHTML = `<p>Quem nasceu em ${year} vai completar <strong>${age}</strong> em ${data}.</p>`
}