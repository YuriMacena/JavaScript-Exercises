let n = [8, 2, 3, 5, 7, 1, 9]
n.push(4)
n.sort()
console.log(n)
console.log(`O primeiro elemento do vetor é ${n[0]}.`)
console.log(`O vetor tem ${n.length} elementos.`)
for (let pos in n){
    console.log(`A posição ${pos} tem o valor ${n[pos]}.`)
}

let pos=n.indexOf(8)
    if (pos==-1){
        console.log(`O valor não foi encontrado!`)
    } else {
        console.log(`O valor foi encontrado na posição ${pos}.`)
    }