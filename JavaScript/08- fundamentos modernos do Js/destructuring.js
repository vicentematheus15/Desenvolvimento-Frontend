const pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
};

// console.log(pessoa.nome);
// console.log(pessoa.idade);

//posso desestruturar um objeto usando {} para guardar algum atributo dele em uma variável.
const { nome, idade } = pessoa

console.log(nome);
console.log(idade);

//também posso usar isso para passar como parametro de alguma função, somente atributos especificos de um objeto

function saudacao({ nome, idade }) {
    console.log('Olá, ', nome);
    if(idade > 18){
        console.log('Maior de idade');
    }
}
saudacao(pessoa)

//também da rpa fazer com arrays, guardando dentro da variável 'primeira' qual é a primeira fruta e assim por diante
const frutas = ['uva', 'banana'];
const [primeira, segunda] = frutas;