/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const isPartOfFibonacci = (number) => {
  let previousNumber = 0;
  let currentNumber = 1;

  if (number === 0) {
    console.log("The number provided belongs to the Fibonacci sequence.");
    return true;
  }

  while (currentNumber <= number) {
    if (currentNumber === number) {
      console.log("The number provided belongs to the Fibonacci sequence.");
      return true;
    }
    [previousNumber, currentNumber] = [
      currentNumber,
      previousNumber + currentNumber,
    ];
  }

  console.log("The number provided does not belong to the Fibonacci sequence.");
  return false;
};

console.log(isPartOfFibonacci(7));
