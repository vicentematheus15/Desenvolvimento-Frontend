const camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = {...camila1,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}
camila2.idade = 30

console.log(camila1);
console.log(camila2);

const {nome, ...restante} = camila2

console.log(nome);
console.log(restante);



