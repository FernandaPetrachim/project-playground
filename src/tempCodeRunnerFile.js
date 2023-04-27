function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; numeros += 1) {
    if (numeros[index] > 9 || numeros[index] < 0) {
      return 'não é possivel gerar um numero de telefone com esses valores';
    }
    //numeroDeTelefone = numeroDeTelefone.replace('1', numeros[index]);
  }
  let ddd = `(${numeros[0]}${numeros[1]})`;
  let numero1 = ` ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-`;
  let numero2 = `${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;

  return ddd + numero1 + numero2;
}
console.log(generatePhoneNumber([1, 3, 4, 6, 8, 2, 9, 1, 5, 7, 8]));