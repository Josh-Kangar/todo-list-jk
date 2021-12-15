var list = document.getElementById("todo-list");
var addBtn = document.getElementById("todo-add");
var addInput = document.getElementById("todo-input");

function createTodo() {
  var text = addInput.value;

  if(text.length > 35) {
    alert("No more than 35 characters! You entered " + text.length + " characters.")
    addInput.value = "";
  } else {


    if (text == "") {
      return;
    }

    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";

    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = text;

    var remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerHTML = "&cross;";

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);
    list.appendChild(li);

    
    

    addInput.value = "";
 }

}

function showEditInput() {
  // alert('show edit input');
};

function removeTodo(removeElement) {
    // alert('remove todo');
  
    var r = confirm("are you sure ou want to remove '" + removeElement.previousElementSibling.textContent+ "'?");
    if (r) {
      removeElement.parentElement.remove();
    } 
};

function toggleComplete(toggleTarget) {
    // alert("toggle complete");
    if (toggleTarget.checked === false) {
      toggleTarget.parentElement.classList.remove("complete");
    } else {
      toggleTarget.parentElement.classList.add("complete");
    }
};

list.addEventListener("click", function(e){

    switch(e.target.tagName) {
      case "P":
        showEditInput();
        break;
      case "SPAN":
        removeTodo(e.target);
        break;

    }
});

list.addEventListener("change", function (e) {
    if(e.target.tagName === "INPUT" && e.target.type === "checkbox"){
      toggleComplete(e.target);
    };
});



addBtn.addEventListener("click", createTodo);

addInput.addEventListener("keypress", function(e) {
  if(e.key == "Enter"){
    createTodo();
  }
})