const entrada1 = parseFloat(prompt("Informe o primeiro número:"));
const entrada2 = parseFloat(prompt("Informe o segundo número:"));

const soma = entrada1 + entrada2;
const subtracao = entrada1 - entrada2;
const multiplicacao = entrada1 * entrada2;
const divisao = entrada1 / entrada2;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
