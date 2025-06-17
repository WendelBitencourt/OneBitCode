// Conversor de Medidas

// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

// milímetro (mm)
// centímetro (cm)
// decímetro (dm)
// decâmetro (dam)
// hectômetro (hm)
// quilômetro (km)

// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

let valorEmMetros = parseFloat(prompt("Digite o valor em metros:"));
let unidade = parseFloat(
  prompt(
    "Escolha a unidade para conversão:\n1. milímetro (mm)\n2. centímetro (cm)\n3. decímetro (dm)\n4. decâmetro (dam)\n5. hectômetro (hm)\n6. quilômetro (km)\nDigite o número correspondente à unidade desejada:",
  ),
);

switch (unidade) {
  case 1:
    console.log(
      `${valorEmMetros} metros é igual a ${valorEmMetros * 1000} milímetros.`,
    );
    break;
  case 2:
    console.log(
      `${valorEmMetros} metros é igual a ${valorEmMetros * 100} centímetros.`,
    );
    break;
  case 3:
    console.log(
      `${valorEmMetros} metros é igual a ${valorEmMetros * 10} decímetros.`,
    );
    break;
  case 4:
    console.log(
      `${valorEmMetros} metros é igual a ${valorEmMetros / 10} decâmetros.`,
    );
    break;
  case 5:
    console.log(
      `${valorEmMetros} metros é igual a ${valorEmMetros / 100} hectômetros.`,
    );
    break;
  case 6:
    console.log(
      `${valorEmMetros} metros é igual a ${valorEmMetros / 1000} quilômetros.`,
    );
    break;
  default:
    console.log("Opção inválida. Por favor, escolha uma unidade válida.");
}
