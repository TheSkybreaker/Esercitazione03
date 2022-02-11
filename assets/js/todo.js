var aggiungi_task;
var daFare;
var listaUL;
var thisOne;
var tasksList = JSON.parse(localStorage.getItem("Lista"))
  ? JSON.parse(localStorage.getItem("Lista"))
  : [];
// dichiara le variabili
window.addEventListener("load", init);
// al caricamento della pagina chiama la funzione init
function init() {
  aggiungi_task = document.querySelector("#aggiungi");
  daFare = document.querySelector("#ThingToDo");
  listaUL = document.querySelector("#lista");
  // aggancia alle variabili gli oggetti html
  aggiungi_task.addEventListener("click", addTask);
  // si mette in ascolto in attesa di un evento click sul bottone
  // quando avviene il click chiama addtask
  buildList();
}

function addTask() {
  tasksList.push(daFare.value);
  // inserisce nell'array tasklist il valore scritto nell'input
  // chiama le 2 funzioni sotto
  buildList();
  clearForms();
}

function buildList() {
  var list = "";
  // pulisce la stringa
  for (var i = 0; i < tasksList.length; i++) {
    // fa il ciclo sull'array ottenuto sopra
    list +=
      '<li class="list-group-item">' +
      tasksList[i] +
      '<span class="btn-close float-end" onclick="thisOne = this.parentNode.innerText; elimina();"></span></li>';
  }
  // inserisce l'html nella pagina
  listaUL.innerHTML = list;
  localStorage.setItem("Lista", JSON.stringify(tasksList));
}

function elimina() {
    for(let n = 0; n < tasksList.length; n++) {
        if (tasksList[n] === thisOne) {
            tasksList.splice(n, 1);
        }
        break        
    }
  buildList();
}

function clearForms() {
  daFare.value = ""; // pulisce al caricamento
}
