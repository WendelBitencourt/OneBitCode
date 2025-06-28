// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

let saldo = Number(prompt("Informe a quantidade de dinheiro inicial:"));
let opcao;

do {
  opcao = prompt(
    `Saldo disponível: R$ ${saldo.toFixed(2)}` +
      `\n1 - Adicionar dinheiro` +
      `\n2 - Remover dinheiro` +
      `\n3 - Mostrar saldo` +
      `\n4 - Sair` +
      `\nEscolha uma opção:`,
  );

  switch (opcao) {
    case "1":
      {
        const valor = Number(prompt("Informe o valor a ser adicionado:"));
        if (isNaN(valor) || valor <= 0) {
          console.log("Valor inválido.");
        } else {
          saldo += valor;
        }
      }
      break;

    case "2":
      {
        const valor = Number(prompt("Informe o valor a ser removido:"));
        if (isNaN(valor) || valor <= 0) {
          console.log("Valor inválido.");
        } else if (valor > saldo) {
          console.log("Saldo insuficiente.");
        } else {
          saldo -= valor;
        }
      }
      break;

    case "3":
      console.log(`Saldo disponível: R$ ${saldo.toFixed(2)}`);
      break;

    case "4":
      console.log("Saindo...");
      break;

    default:
      console.log("Entrada inválida. Tente novamente.");
      break;
  }
} while (opcao !== "4");
