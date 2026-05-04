const idade = 15
//a interrogação é o operador if e os : separa as condicoes true e false
idade <= 18 ? console.log('Maior de idade') : console.log('Menor de idade');



const notaDoAluno = 3

notaDoAluno >= 9 ? console.log('nota excelente') : //a ? é o if e o log é o true.   os : separa o que acontece se for false que ja seria a proxima linha com outro if
    notaDoAluno >= 7 ? console.log('nota boa') :
        notaDoAluno >= 4 ? console.log('nota mediana') :
            console.log('nota ruim');
            