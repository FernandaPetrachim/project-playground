// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(numeros) {
  let counter = 0;
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; index += 1) {
    counter = 0;
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let i = 0; i < numeros.length; i += 1) {
      if (numeros[index] === numeros[i]) {
        counter += 1;
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let ddd = `(${numeros[0]}${numeros[1]})`;
  let numero1 = ` ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-`;
  let numero2 = `${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
  return ddd + numero1 + numero2;

}
// Desafio 12 -  Crie a função triangleCheck.

function triangleCheck(lineA, lineB, lineC) {
  let array = [lineA, lineB, lineC];
  for (index = 0; index < (array.length); index += 1) {
    if (array[index] > array[index + 1] + array[index + 2]) {
      return false
    };
    if (array[index] < Math.abs(array[index + 1] - array[index + 2])) {
      return false
    };
  }
  return true;
}

// Desafio 13 - Crie a função hydrate

const hydrate = (bebida) => {
  let numero = bebida.match(/\d+/g);
let numeroValue = [];
for(let v of numero) {
  numeroValue.push(parseInt(v,0));
}
let number = 0;
for(let i = 0; i < numeroValue.length; i +=1){
  number += numeroValue[i];
}
if(number === 1){
  return `${number} copo de água`;
}
return `${number} copos de água`;
 }




/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
