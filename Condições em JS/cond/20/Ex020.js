function month(){
    res = document.getElementById('result')
    mes = window.prompt('Digite o nome de um mês (Exemplo: setembro)')
    switch (mes){
        case 'Janeiro', 'janeiro':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark>.</p>`
        break
        case 'Fevereiro', 'fevereiro':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark>.</p>`
        break
        case 'Março', 'março':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark>.</p>`
        break
        case 'Abril', 'abril':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark>.</p>`
        break
        case 'Maio', 'maio':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark>.</p>`
        break
        case 'Junho', 'junho':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark>.</p>`
        break
        case 'Julho', 'julho':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>VERÃO</strong></mark>.</p>`
        break
        case 'Agosto', 'agosto':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>VERÃO</strong></mark>.</p>`
        break
        case 'Setembro', 'setembro':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>VERÃO</strong></mark>.</p>`
        break
        case 'Outubro', 'outubro':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark>.</p>`
        break
        case 'Novembro', 'novembro':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark>.</p>`
        break
        case 'Dezembro', 'dezembro':
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark>.</p>`
        break
        default:
            res.innerHTML = `<p>No mês  de <mark>${mes}</mark>, estamos na estação <mark><strong>INDEFINIDA</strong></mark>.</p>`
    }
}