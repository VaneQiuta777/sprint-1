/*var ul = document.getElementsByTagName("ul")[0]
var ul = document.querySelectorAll("ul")[0];

var ul = document.querySelector("ul");
var ul = document.getElementById ("lista")
var ul = document.getElementsByClassName("ul-class")[0];*/
var ul = document.getElementsByName("ul-name")[0];

for (var i = 0; i< ul.children.length; i++)
    console.log (ul.children[i].textContent);

/*creación de elemento padre*/
/*var padre = ul.firstElementChild.parentElement;
var hijo =  document.createElement("li");
hijo.textContent = "item Nuevo"
var hermano = padre.firstChild;

padre.insertBefore(hijo,hermano);*/

var elemento = document.createElement("li");
var texto = document.createTextNode ("Item new");
elemento.appendChild(texto); 

var padre = document.querySelector("ul");
var hermano = padre.firstElementChild;

padre.in

