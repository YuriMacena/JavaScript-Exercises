meses=new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
semanas=new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
data=new Date
dia=data.getDate()
mes=data.getMonth()
ano=data.getFullYear()
semana=data.getDay()
horas=data.getHours()
minutos=data.getMinutes()
segundos=data.getSeconds()
function analise(){
    res.innerHTML=`<p>Dia:<mark>${dia}</mark></p>
    <p>Mês:<mark>${meses[mes]}</mark></p>
    <p>Ano:<mark>${ano}</mark></p>
    <p>Dia da semana:<mark>${semanas[semana]}</mark></p>
    <p>Horas:<mark>${horas}</mark></p>
    <p>Minutos:<mark>${minutos}</mark></p>
    <p>Segundos:<mark>${segundos}</mark></p>`
}