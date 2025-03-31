const nomePersonagem1 = prompt(
  "Digite o nome do personagem quue realizará o ataque: "
);
let poderAtaque = Number(
  prompt("Digite o poder de ataque do personagem " + nomePersonagem1 + ":")
);

const nomePersonagem2 = prompt("Digite o nome do segundo personagem: ");
let vidaPersonagem = Number(prompt("Digite a vida do segundo personagem: "));
let defesaPersonagem = Number(
  prompt("Digite a defesa do segundo personagem: ")
);
let escudo =
  prompt("O segundo personagem tem escudo? (sim/não):").toLowerCase() === "sim";

let dano = 0;

if (poderAtaque > defesaPersonagem && escudo === false) {
  dano = poderAtaque - defesaPersonagem;
} else if (poderAtaque > defesaPersonagem && escudo === true) {
  dano = (poderAtaque - defesaPersonagem) / 2;
} else {
  dano = 0;
}
