// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

let qtdDinheiro = 0;
let opcao;

do {
  console.log(`Quantidade de dinheiro disponível: ${qtdDinheiro}`);
  console.log("Adicionar Dinheiro: 1");
  console.log("Remover Dinheiro: 2");
  console.log("Mostrar saldo: 3");
  console.log("Sair: 4");

  opcao = prompt("Digite a sua opção: ");

  if (opcao === "1") {
    let adicionar = Number(prompt("O quanto deseja depositar?: "));
    qtdDinheiro = qtdDinheiro + adicionar;
  } else if (opcao === "2") {
    let remover = Number(prompt("O quanto deseja remover?: "));
    qtdDinheiro = qtdDinheiro - remover;
  } else if (opcao === "3") {
    console.log(`Saldo disponível: ${qtdDinheiro}`);
  }
} while (opcao !== "4");
