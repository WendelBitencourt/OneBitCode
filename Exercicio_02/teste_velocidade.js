const nome_veiculo = prompt("Digite o nome do primeiro veículo: ");
let velocidade1 = Number(prompt("Digite a velocidade do veículo: "));
let nome_veiculo2 = prompt("Digite o nome do segundo veículo: ");
const velocidade2 = Number(prompt("Digite a velocidade do veículo: "));

if (velocidade1 > velocidade2) {
  alert(
    "A velocidade do " +
      nome_veiculo +
      " " +
      velocidade1 +
      " é maior que a do " +
      nome_veiculo2,
  );
} else if (velocidade1 < velocidade2) {
  alert(
    "A velocidade do " +
      nome_veiculo2 +
      " " +
      velocidade2 +
      " é maior que a do " +
      nome_veiculo,
  );
} else {
  alert("Os veículos possuem a mesma velocidade");
}
