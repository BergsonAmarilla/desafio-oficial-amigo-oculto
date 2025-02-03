// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
                
let nome = ['ana', 'bia', 'carlos', 'daniel', 'elaine', 'fernanda', 'gabriel', 'hugo', 'igor', 'juliana', 'kelly', 'lucas', 'maria', 'nathan', 'olivia', 'pedro', 'quiteria', 'rafael', 'sabrina', 'thiago', 'ursula', 'vitor', 'wesley', 'xuxa', 'yuri', 'zelda'];
let nomesSorteados = [];
 // Função para exibir texto em uma tag HTML específica
 function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento da tag
    campo.innerHTML = texto; // Define o conteúdo do elemento com o texto
}
function exibirTextoNaTela (tag){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  exibirTextoNaTela('h1', 'Amigo Secreto');
  exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}
 // Função para adicionar um novo amigo à lista
 function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim(); // Pega o valor do input e remove espaços extras
    if (amigo === "") { // Verifica se o campo está vazio
        alert("Digite um nome válido!"); // Exibe um alerta se o campo estiver vazio
    } else if (nome.includes(amigo)) { // Verifica se o nome já existe na lista
        alert("Este nome já foi adicionado!"); // Exibe uma mensagem de alerta caso o nome já esteja na lista
    } else {
        nome.push(amigo); // Adiciona o nome à lista se não estiver lá
       // atualizarListaNaTela(); // Atualiza a lista de amigos na tela
        document.getElementById('amigo').value = ''; // Limpa o campo de entrada
    }
}
function list(array) {
    // Cria a lista do elemento
    var listElement = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        // Cria a lista de item
        var itemElement = document.createElement('li');
        // Define seu conteudo
        itemElement.appendChild(document.createTextNode(array[i]));
        // Adiciona um item a lista
        listElement.appendChild(itemElement);
    }
    return listElement;
}
function gerarNomeAleatorio() {
   return parseInt(Math.random() * length - 1);
const index_maximo = nome.length + 1;
const index_aleatorio = random(index_maximo);
alert(nome[index_aleatorio]);
}
function sortearAmigo() {
    const sorteado = Math.floor(Math.random() * nome.length);
    alert(nome[sorteado]);
    return;
}
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
   // Função que atualiza a lista de amigos na tela
   function atualizarListaNaTela() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // Seleciona o elemento da lista
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual
      // Cria uma nova lista HTML com os nomes
      nome.forEach(amigo => {
        const li = document.createElement('li'); // Cria um item da lista
        li.textContent = amigo; // Define o conteúdo do item
        listaAmigosElement.appendChild(li); // Adiciona o item à lista
    });
}


 