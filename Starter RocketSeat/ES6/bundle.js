"use strict";

var arr = [1, 3, 4, 5, 8, 9]; // MAP

var newArr = arr.map(function (item, index) {
  // O .map retorna um novo array 
  return item * 2;
});
console.log(newArr); // [2, 6, 8, 10, 16, 18]
// REDUCE

var sum = arr.reduce(function (acumulador, proximo) {
  // O .reduce possui o acumulador, que é sempre o valor retornado na últiam iteração
  return acumulador + proximo;
});
console.log(sum); // 30
// FILTER

var filteredArr = arr.filter(function (item) {
  // O filter retorna valores que satisfaçam as condições dentro da função
  return item % 2 === 0;
});
console.log(filteredArr); // [4, 8]

var find = arr.find(function (item) {
  // Procura o elemento que satisfaz a condição da função e o retorna
  return item === 4;
});
console.log(find); // 4
