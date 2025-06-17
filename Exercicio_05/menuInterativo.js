// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

let opcao = 0;

do {
  console.log("Escolha uma opção");
  console.log("Opção 1: Digite 1");
  console.log("Opção 2: Digite 2");
  console.log("Opção 3: Digite 3");
  console.log("Opção 4: Digite 4");
  console.log("Sair: Digite 5");

  opcao = prompt("Digite a sua opção: ");

  switch (opcao) {
    case "1":
      console.log("Opção 1 escolhida");
      break;
    case "2":
      console.log("Opção 2 escolhida");
      break;
    case "3":
      console.log("Opção 3 escolhida");
      break;
    case "4":
      console.log("Opção 4 escolhida");
      break;
    case "5":
      console.log("Encerrando o sistema...");
      break;
    default:
      console.log("Opção inválida");
      break;
  }
} while (opcao != 5);
