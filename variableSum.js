/*
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

const whatSomaValue = () => {
  const index = 13;
  let k = 0;
  let sum = 0;

  while (k < index) {
    k++;
    sum += k;
  }

  console.log(sum);
};

whatSomaValue();
