const agora = new Date();

console.log(agora);
console.log('Ano: ',agora.getFullYear() );
console.log('Mês 0-11: ',agora.getMonth() );
console.log('Dia do mês: ',agora.getDate() );
console.log('Hora: ',agora.getHours() );
console.log('Minutos: ',agora.getMinutes() );

const nascimento = new Date('2000-04-15:10:00.000Z');
console.log(nascimento);

console.log('Data formatada: ', nascimento.toLocaleDateString('pt-BR'));