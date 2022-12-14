let rowDiv = document.createElement("div");
let rowDiv1 = document.createElement("div");
let rowDiv2 = document.createElement("div");
let col1 = document.createElement("div");
let col2 = document.createElement("div");
let col3 = document.createElement("div");
let col4 = document.createElement("div");


let h1El = document.createElement("h1");
let inputEl = document.createElement("input");
let h1El2 = document.createElement("h1");
inputEl.type = "text";
inputEl.placeholder = "Task to be done";

let pEl = document.createElement("p");
pEl.id = "demo";
let d = new Date();
pEl.innerHTML = d;

col3.appendChild(rowDiv2);
rowDiv2.classList.add("row");

// button
let btnEl = document.createElement("button");
btnEl.textContent = "Add"
btnEl.id = "push";

rowDiv2.appendChild(inputEl);
rowDiv2.appendChild(btnEl);

// image
let imgEl = document.createElement("img");
col3.appendChild(imgEl);
imgEl.src = "./todo.jpeg"
imgEl.width = "400";


let labelEl = document.createElement("label");
let ulEl = document.createElement("ul");

let liEl = document.createElement("li");

let con = document.getElementById("container");

con.appendChild(rowDiv);
rowDiv.classList.add("row");
rowDiv.classList.add("one");
rowDiv.appendChild(col1);
col1.classList.add("col-2")
rowDiv.appendChild(col2);
col2.classList.add("col-2")

col1.appendChild(h1El);
col1.appendChild(pEl);
h1El.textContent = "To Do List";
col1.appendChild(rowDiv1);
rowDiv1.classList.add("row")
rowDiv2.id = "hi"
rowDiv1.appendChild(col3);
col3.classList.add("col-2");


rowDiv1.appendChild(col4);
col4.classList.add("col-2");
col2.classList.add("second");
col2.appendChild(h1El2);
col2.appendChild(ulEl);
// ulEl.appendChild(liEl);
h1El2.textContent = "Task list"


function add() {

}
