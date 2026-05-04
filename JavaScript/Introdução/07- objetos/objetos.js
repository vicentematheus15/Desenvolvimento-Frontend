let pessoa = {
    nome: 'Ana',
    idade: 25,
    temCNH: true
};

pessoa.sobrenome = 'Paula'

console.log('nome: ', pessoa.nome);
console.log('sobrenome: ', pessoa.sobrenome);


const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
};
livro.publicado = true;
livro.idiomas = ['Inglês', 'Português', 'Espanhol'];
livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes:', livro)
delete livro.paginas
console.log('Livro depois:', livro)

const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

livro.autor = autor

console.log(livro);
console.log(livro.autor.nacionalidade);

