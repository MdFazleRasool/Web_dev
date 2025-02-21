console.log("------ TODOS -----");

function loadTodos(){
    // this function will load Todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos") ) || {"todoList" : []};  // Short Circuiting (if 1st value falsy then return 2nd object always) , if both true return 1st always
    console.log(todos);
    return todos;
}

/*  Chnage Event :- 
        The change event is fired for <input>, <select>, and <textarea>
        elements when the user modifies the element's value. Unlike the 
        input event, the change event is not necessarily fired for each 
        alteration to an element's value.

    Input Event :- 
        The input event fires when the value of an <input>, 
        <select>, or <textarea> element has been changed as a direct result 
        of a user action (such as typing in a textbox or checking a checkbox).

*/ 

// m-1
/*
document.addEventListener("DOMContentLoaded",() =>{
    
    const todoInput=document.getElementById("todoInput");
    //todoInput.addEventListener("change" , () =>{  // input or change -  run and check difference
        //this call back method is fired  everytime there is a  change in the input tag
        // console.log("Something changed",todoInput.value);
    })
    loadTodos();
});

*/


//localStorage.setItem("todos",["todo 1", "todo 2"]);


// m-2
/*
document.addEventListener("DOMContentLoaded",() =>{
    
    const todoInput=document.getElementById("todoInput");
    //todoInput.addEventListener("change" , (event) =>{  
        
        console.log("Something changed",event.target);
        console.log("Something changed",event.target.value);
    })
    loadTodos();
});

*/


// m-3

/*
document.addEventListener("DOMContentLoaded",() =>{
    
    const todoInput=document.getElementById("todoInput");
    
    //todoInput.addEventListener("change" , (event) =>{  
        const todoText = event.target.value;
        event.target.value=todoText.trim();
        console.log(event.target.value);
        
      
    })
    loadTodos();
});

*/ 



// m-4


function addTodoToLocalStorage(todoText){
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos" ,JSON.stringify(todos));
}

function appendTodoInHtml(todoText){
    const todoList = document.getElementById("todoList");
    const todo = document.createElement("li");
    todo.textContent=todoText;
    todoList.appendChild(todo);

}

document.addEventListener("DOMContentLoaded",() =>{
    
    const todoInput=document.getElementById("todoInput");
   
    const submitButton = document.getElementById("addTodo");
    
    const todoList = document.getElementById("todoList");



    submitButton.addEventListener("click",(event) =>{
        const todoText = todoInput.value.trim();
        if(todoText === ' '){
            alert("please write something for the todo")
        }else{
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
            todoInput.value='';
        }
    })

    todoInput.addEventListener("change" , (event) =>{  
        const todoText = event.target.value;
        event.target.value=todoText.trim();
        console.log(event.target.value);
        
      
    })


    const todos = loadTodos();
    todos.todoList.forEach(todo => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent=todo;
        todoList.appendChild(newTodoItem);
    })
});

console.log("END");
