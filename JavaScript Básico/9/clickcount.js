    n=0
    res=document.querySelector('section.resultado')
function contador(){
    n++
    res.innerHTML=`<p>O contador está com <mark>${n}</mark> cliques.</p>`
}
function zerar(){
    n=0
    res.innerHTML=null
}