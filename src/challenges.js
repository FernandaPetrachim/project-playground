// Desafio 1 - Crie a função compareTrue
function compareTrue(parametro1, parametro2) {
  if (parametro1 === false && parametro2 === true || parametro1 === true && parametro2 === false) {
    return false
  }
  if (parametro1 === false && parametro2 === false) {
    return false
  }
  if (parametro1 === true && parametro2 === true) {
    return true
  }
}

console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2 - Crie a função splitSentence
//split sentence recebe uma string como parametro-
//deve retornar um array com as palavras separadas.
//exemplo de string 'go Trybe',
function splitSentence(parametro1) {
  let palavraSeparada = parametro1.split(" ")
  return palavraSeparada
};
console.log(splitSentence('go Trybe'))

// Desafio 3 - Crie a função concatName

const concatName = (parametro1) => `${parametro1[parametro1.length - 1]}, ${parametro1[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => wins * 3 + ties * 1;

// Desafio 5 - Crie a função highestCount

const highestCount = (maiorNumero) => {
  let numeroRepetido = maiorNumero.reduce((contador, valor) => {
    if (!contador) {
      return valor;
    }
    return contador >= valor ? contador : valor;
  });
  return maiorNumero.filter(valor => valor === numeroRepetido).length;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => base * height / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`

  } else return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'

}

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if (cat1 === cat2) { return 'os gatos trombam e o rato foge' };
  if (cat1 === cat2 - mouse) { return 'os gatos trombam e o rato goe' };
  if (cat1 < cat2) {
    return 'cat1'
  };
  if (cat2 < cat1) { return 'cat2' };
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numero) {
  let lista = [];
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] % 3 === 0 && numero[index] % 5 === 0) {
      lista.push('fizzBuzz');
    } else if (numero[index] % 3 === 0) {
      lista.push('fizz');
    } else if (numero[index] % 5 === 0) {
      lista.push('buzz');
    } else {
      lista.push('bug!');
    }
  }
  return lista;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (vogais) => {
  let letrasNumeros = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
  vogaisLista = vogais.split('');
  return vogaisLista.map(letras => {
    if (Object.keys(letrasNumeros).includes(letras)) {
      return letrasNumeros[letras];
    }
    return letras;
  }).join('');
}

const decode = (vogais) => {
  let numeros = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
  vogaisLista = vogais.split('');
  return vogaisLista.map(letras => {
    if (Object.keys(numeros).includes(letras)) {
      return numeros[letras];
    }
    return letras;
  }).join('');
}

// Desafio 10 - Crie a função techList
function techList(tecnologia, name) {
  return tecnologia.sort().map(tech => {
return {
  tech: tech,
  name: name
}
  });
}


// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
