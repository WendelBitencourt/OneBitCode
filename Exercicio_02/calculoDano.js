const nomePersonagem1 = prompt(
  "Digite o nome do personagem que realizará o ataque: ",
);
let poderAtaque = Number(
  prompt(`Digite o poder de ataque do personagem ${nomePersonagem1}:`),
);

const nomePersonagem2 = prompt("Digite o nome do segundo personagem: ");
let vidaPersonagem = Number(prompt("Digite a vida do segundo personagem: "));
let defesaPersonagem = Number(
  prompt("Digite a defesa do segundo personagem: "),
);
let escudo =
  prompt("O segundo personagem tem escudo? (sim/não):").toLowerCase() === "sim";

let dano = 0;

if (poderAtaque > defesaPersonagem) {
  dano = escudo
    ? (poderAtaque - defesaPersonagem) / 2
    : poderAtaque - defesaPersonagem;
}

let vidaFinal = vidaPersonagem - dano;

console.log(
  `O personagem ${nomePersonagem1} causou ${dano} de dano no personagem ${nomePersonagem2}, que tinha ${vidaPersonagem} de vida e agora tem ${vidaFinal} de vida restante.${
    escudo ? " O personagem estava com escudo." : ""
  }`,
);
