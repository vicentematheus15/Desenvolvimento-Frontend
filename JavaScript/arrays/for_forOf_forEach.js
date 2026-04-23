const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango'];
console.log(frutas);


frutas.splice(2, 1); //remove a partira do primeiro parametro, a quantidade do segundo parametro;
console.log('depois de retirar: ', frutas);


//for normal
for (let i = 0; i < frutas.length; i++){
    console.log('índice', i)
    console.log(frutas[i]);
}

//forEach
frutas.forEach((valor, indice) => {
    console.log('índice:', indice, valor);
})

//forOf
for(const fruta of frutas){
    console.log('fruta da vez:', fruta);
    
}