function saudacao(){
    console.log('E ai, beleza?');
}

//setTimeout(saudacao, 2000); // 2000 milisegundos

let contador = 0;

const id = setInterval(()=> {
    contador++
    console.log("Tempo decorrido(sem segundos):", contador);
    if(contador == 10){
        clearInterval(id)
    }
}, 1000)