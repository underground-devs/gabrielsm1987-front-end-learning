/*{

var input = document.getElementById("userimput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function createLiButton() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function createLiEnter(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

button.addEventListener("click", createLiButton);
input.addEventListener("keypress", createLiEnter);

}*/

// #Variaveis INICIO
// ##Objetos
var list = document.getElementById("list");
var listInput = document.getElementById("list-input");
var listSubmitButton = document.getElementById("list-submit-button");
// ##Colecoes
var listItemsCollection = document.querySelectorAll(".list-item");
var listItemDeleteButtonCollection = document.querySelectorAll(
  ".list-item-delete-button"
);
// #Variaveis FIM

// Funcoes INICIO

// #Funcao para reaproveitar acao de atribuicao de evento
function bindEvent(element, eventType, eventFunction) {
  element.addEventListener(eventType, eventFunction);
}

// #Funcao para obter dinamicamente lenght do input.value
function getListInputLength() {
  return listInput.value.length;
}

// Funcao com responsabilidade unica de criar um novo item da lista
function createListItem() {
  var listItem = document.createElement("li");
  var listItemTitle = document.createElement("p");
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("list-item-delete-button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  listItemTitle.appendChild(document.createTextNode(listInput.value));
  listItemTitle.classList.add("list-item-title");
  listItem.classList.add("list-item");
  listItem.appendChild(listItemTitle);
  listItem.appendChild(deleteButton);

  bindEvent(listItem, "click", listItemStatusToggle);
  bindEvent(deleteButton, "click", deleteListItem);

  return listItem;
}

// Funcao que atribiu a lista um novo item
function appendNewItemToList() {
  list.appendChild(createListItem());
  listInput.value = "";
}

// Funcao que de fato executa a insercao do novo item a lista
function submitNewItem(event) {
  if (getListInputLength() > 0 && event.which === 13) {
    event.preventDefault();
    appendNewItemToList();
    return;
  }

  if (getListInputLength() > 0 && event.type === "click") {
    appendNewItemToList();
    return;
  }
}

// Funcao para toggle de riscar o item
function listItemStatusToggle(listItemEvent) {
  listItemEvent.target.classList.toggle("done");
}

// Funcao para deleter o item
function deleteListItem(listItemButtonEvent) {
  listItemButtonEvent.target.parentElement.remove();
}
// Funcoes FIM

// Atribuicoes INICIO

// Atribuicao da acao de submeter ao click do botao do input
bindEvent(listSubmitButton, "click", submitNewItem);
// Atribuicao da acao de submeter ao pressionar enter no input
bindEvent(listInput, "keypress", submitNewItem);

// Atribuicao do evento de riscar a todos os items ja renderizados
listItemsCollection.forEach(function (listItem) {
  bindEvent(listItem, "click", listItemStatusToggle);
});
// Atribuicao do evento de deletar a todos os botoes ja renderizados
listItemDeleteButtonCollection.forEach(function (deleteButton) {
  bindEvent(deleteButton, "click", deleteListItem);
});

// Atribuicoes FIM
