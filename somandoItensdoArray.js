//Faça um programa que calcule e imprima na tela a soma dos elementos de um array.

//Criando o array com úmeros aleatórios e fazendo a estrutura do "for de c".
const lista = [2 , 4 , 6 , 8 , 10];
let soma = 0;
for (let i = 0; i < lista.length; i++){
soma += lista[i];
}
console.log(soma);