const readline = require('readline-sync');

//var cor = new Array();
//var cor = []; //As duas são formas de declarar um Array, mas essa é mais utilizada.

//Exemplo(Colocar intens na mochila):

var itens = ['Faca' , 'Lanterna' , 'Estilete' , 'Chave'];
var mochila = [];

//Método Push

mochila.push(itens[1]); //Significa que fez um push no item 1, que é a lanterna.
console.log(mochila[0]); //Significa que a posição 0 do vetor mochila é a lanterna, já que em cima foi declarado isso.

mochila.push(2); //Na posição 2 do vetor itens tem 'Estilete'
console.log(itens[mochila[0]]); //Na posição 0 do vetor mochila tem o valor 2, como foi declarado em cima.

//Mais Métodos da Classe Array

//Unshift
itens.unshift('Chave'); //significa que 'chave' vai aparecer na primeira posição, ocupando o lugar de 'faca'.

//pop
itens.pop(); //Remove o final do Array, ou seja, removerá 'Chave'.

//shift
itens.shift(); //Remove o inicio do Array, ou seja, removerá 'Faca'.

//splice
itens.splice(2,1) //Significa que apartir do item 2('Estilete'), vai remover 1 item, removendo então 'Estilete'.










