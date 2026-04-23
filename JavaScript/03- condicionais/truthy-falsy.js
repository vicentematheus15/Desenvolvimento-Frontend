//transforma a condicao do if em true ou false. se for true, entra no if, se for false segue sem entrar
// esses valores sempre sao considerados falsos (falsy):
// - false
// - 0 (o número zero)
// - "" (string vazia)
// - null
// - undefined
// - NaN (Not a Number)

//todo o resto sempre é considerado (truthy) e retorna true

const nome = '';

if (nome) {
    console.log('Olá, ', nome);
} else {
    console.log('Ainda não sei o seu nome');
}


const idade = null;

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade');
    }
}