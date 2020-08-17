"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// REST 
var pessoa = {
  nome: 'Fábio',
  idade: 16,
  cidade: 'Recife'
};

var nome = pessoa.nome,
    resto = _objectWithoutProperties(pessoa, ["nome"]);

console.log(nome); // Fábio

console.log(resto); // { idade: 16, cidade: 'Recife }
// SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3bugado = [arr1, arr2]; // [[1, 2, 3],[4, 5, 6]]

var arr3 = [].concat(arr1, arr2); // [1, 2, 3, 4, 5, 6]
