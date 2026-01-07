// Procurando Palíndromos

// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

function capitalizarPrimeiraLetra(word) {
  // Garante que a entrada é uma string e não está vazia
  if (typeof word !== "string" || word.length === 0) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizarPalavra(string) {
  // Garante que a entrada é uma string e não está vazia
  if (typeof string !== "string" || string.length === 0) {
    return "";
  }

  return string
    .split(" ")
    .map((word) => capitalizarPrimeiraLetra(word))
    .join(" ");
}

let palavra = prompt("Digite uma palavra: ").toLowerCase().trim();
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  console.log(`A palavra ${capitalizarPalavra(palavra)} é um palíndromo.`);
} else {
  console.log(
    `A palavra ${capitalizarPalavra(
      palavra,
    )} não é um palíndromo. Ela lida de trás para frente é ${capitalizarPalavra(
      palavraInvertida,
    )}.`,
  );
}

//teste
//teste
