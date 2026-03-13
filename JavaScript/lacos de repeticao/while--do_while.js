//verifica a condição no inicio de cada loop e depois executa. caso a condicao seja falsa na primeira execução ele nem entra no loop
let contador = 1;

while (contador <= 10) {
    console.log('Número atual:', contador);
    contador++;
}


//garante que o loop sera executado pelo emnos uam vez, pois ele so verifica a condição no final de cada loop
let numero = 1;
do {
    console.log('Número atual:', numero);
    numero++;
} while (numero <= 10);