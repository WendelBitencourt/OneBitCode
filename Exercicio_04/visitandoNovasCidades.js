// Visitando Novas Cidades

// Escreva um programa em javascript que peça o nome de um turista e
// então pergunte se ele já visitou alguma cidade.
// Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável,
// e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não.
// No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

let nomeTurista = prompt("Qual é o seu nome?: ");
let visitouCidade = prompt("Você já visitou alguma cidade?: ");
let nomeCidade = "";
let cidades = "";
let contagemCidade = 0;

while (visitouCidade === "Sim" || visitouCidade === "sim") {
  nomeCidade = prompt("Digite o nome da cidade visitada: ");
  cidades += ` - ${nomeCidade} \n`;
  contagemCidade++;
  visitouCidade = prompt("Você já visitou alguma cidade?: ");
}

console.log(
  `Turista: ${nomeTurista}
  \nQuantidade de cidades: ${contagemCidade}
  \nCidades Visitadas:\n${cidades} `,
);
