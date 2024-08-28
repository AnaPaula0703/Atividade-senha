//Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Acesso negado". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso permitido" e o algoritmo deve ser encerrado. Considere que a senha correta é 2024.


const prompt = require('prompt-sync')();
const entrada = prompt;

var senhaCorreta = 2024;
var senhaUsuario = entrada('Digite a senha: ');

if (senhaUsuario == senhaCorreta){
  console.log(`Acesso Permitido `);
}
while(senhaUsuario != senhaCorreta){
  console.log(`Acesso negado`);
  var senhaTentativa = entrada (` Digite novamente a senha: `);
  if (senhaTentativa == senhaCorreta){
    console.log(`Acesso Permitido`);
    break;
  }
}