//contar quantos numeros pares e quantos numeros impares existem entre 0 e 100

let numPar = 0
let numImpar = 0

for(let i = 0; i<=100; i++){
    (i % 2 == 0) ? numPar++ : numImpar++
}

console.log(`Quantidade de números pares: ${numPar}`);
console.log(`Quantidade de números ímpares: ${numImpar}`);

