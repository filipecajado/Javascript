let num = [0, 1, 2]
let pos = 0

console.log(`Nosso vetor é o ${num}`)

// Acresenta na posição 3 um valor
num[3] = 5

//acresenta valores
num.push(7)

// Conta a quantidade de elementos em uma Array
num.length

// Se retornar valor -1 numero não encontrado na lista
num.indexOf(10) = -1

//Deixa a su Array em ORdem Crescente
num.sort


console.log(`Nosso vetor é o ${num}`)


console.log(`Nosso 1 elemento é o ${num[0]}`)

for (pos; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(pos in num){
  console.log(num[pos])
}

//buscar posição de um valor
num.indexOf(5)