var todoList = []
var count = 1;
var completedCounter = 1;
var incompleteCounter = 1;

function initialize() {
    document.getElementById("myInput")
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                // document.getElementById("create-li-item").click();v
                addTodo(event.target.value);
                // newListItem();

            }
        });
}

// 

// 
function addTodo(value) {
    var todoItem = {
        id: count,
        text: value,
        is_checked: false
    }
    todoList.push(todoItem);
    count++;
    console.log(todoList);
    console.log(count);
    newListItem(todoItem);
    for (let i = 0; i <= todoList.length; i++) {
        if (todoItem.is_checked === false) {
            completedCounter++;

        } else {
            incompleteCounter++;
        }
    }
    console.log(completedCounter);
    console.log(incompleteCounter);
}

function newListItem(todoItem) {
    console.log(todoItem.text);
    var li = document.querySelector("#ul");
    li.innerHTML += `
    <li id="${todoItem.id}" class="list-group-item  text-wrap d-flex">
     
  
        <div class="icon color-light-grey mr-1 pr-3">
            <i class="fas  fa-check"></i>
        </div>
        <div class="text text-wrap pl-4">
            ${todoItem.text} &nbsp;
            <i class="fas fa-times  color-light-grey" id="close" onclick="removeTodo(event)"></i>
        </div>
    </li>
  `;

}

function removeTodo(event) {
    console.log('from removeTodo', event.target.parentNode.parentNode.id);

    todoList.forEach((item, index) => {
        if (item.id == event.target.parentNode.parentNode.id) {
            todoList.splice(index, 1);
        }

    })
    console.log(todoList);

    // console.log('from removeTodo', id);
    // var items = [ 
    //     { "id": 3.1, "name": "test 3.1"}, 
    //     { "id": 22, "name": "test 3.1" }, 
    //     { "id": 23, "name": "changed test 23" } 
    //     ]
    //   const results=items.filter(item=> item.id!==23);
    //   console.log(results);

}


// var li = document.createElement("li");
// var inputValue = document.getElementById("myInput").value;
// var t = document.createTextNode(inputValue);
// li.appendChild(t);
// if (inputValue === '') {
//     alert("You must write something!");
// } else {
//     document.getElementById("myUL").appendChild(li);
// }
// document.getElementById("myInput").value = "";