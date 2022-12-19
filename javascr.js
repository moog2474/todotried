let mainEle = document.getElementById("main");

let div1 = document.getElementById("section1");
div1.className ="one";
let div2 = document.getElementById("section2");

//section 1 title
let title = document.createElement("h1");
title.innerHTML = "To do list app";
div1.appendChild(title);

// div1
let subDiv = document.createElement("div");
subDiv.id = "addTask";


//section 1 div input
let input = document.createElement("input");
input.type = "text";
input.id = "inputTask";
input.placeholder = "Та таскаа оруулна уу";


let btn = document.createElement("button");
btn.innerHTML = "Add";

//btn click
btn.addEventListener("click", fnAddTask);
subDiv.appendChild(input);
subDiv.appendChild(btn);
div1.appendChild(subDiv);

//section 2 title
let listTitle = document.createElement("h1");
listTitle.innerHTML = "List";

//section 2 div tasks
let subdiv2 = document.createElement("div");
subdiv2.id = "tasks";

div2.appendChild(listTitle);
div2.appendChild(subdiv2);

//fnAddTask
function fnAddTask() {
  let aDiv = document.createElement("div");
  aDiv.className = "task";

  let inputTask = document.createElement("input");
  inputTask.readOnly = true;
  inputTask.value = input.value;

  let action = document.createElement("div");
  action.id = "actions";
  action.className = "flex";

  let editBtn = document.createElement("span");
  editBtn.innerHTML = " &#9783";

  editBtn.addEventListener("click", function () {
    inputTask.readOnly = true;
    inputTask.setAttribute("readonly", false);

    console.log("inputTask.readOnly", inputTask.readOnly);
    if (inputTask.readOnly) {
      inputTask.readOnly = false;
    } else {
      inputTask.readOnly = true;
    }
    inputTask.readOnly = !inputTask.readOnly;
  });

  let delBtn = document.createElement("span");
  delBtn.innerHTML = "&#10008";

  delBtn.addEventListener("click", function () {
    subdiv2.removeChild(aDiv);
  });

  action.appendChild(editBtn);
  action.appendChild(delBtn);

  aDiv.appendChild(inputTask);
  aDiv.appendChild(action);

  subdiv2.appendChild(aDiv);
  input.value = "";
}

