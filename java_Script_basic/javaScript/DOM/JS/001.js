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


function addTodoToLocalStorage(todo){
    const todos = loadTodos();
    todos.todoList.push(todo); 
    localStorage.setItem("todos" ,JSON.stringify(todos));
}

function appendTodoInHtml(todo){
    const todoList = document.getElementById("todoList");
    const todoItem = document.createElement("li");
    
    const textDiv = document.createElement("div");

    textDiv.textContent=todo.text;

    todoItem.classList.add("todoItem");//applying css on runtime

    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");
    

    const editBtn = document.createElement("button");
    editBtn.textContent= "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent= "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent= "Completed";
    completedBtn.classList.add("completedBtn");

    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completedBtn);
    wrapper.appendChild(editBtn);
    todoItem.appendChild(textDiv);
    todoItem.appendChild(wrapper);
    
    

    todoList.appendChild(todoItem);

}

function executeFilterAction(event){
    const element = event.target;
    const todoList = document.getElementById("todoList");
    const todos = loadTodos();
    todoList.innerHTML = '';
    const value = element.getAttribute("data-filter") ;
    if(value === 'all'){
        console.log(todoList);
        todos.todoList.forEach(todo => {
            appendTodoInHtml(todo); 
        })
        
    
    }else if(value === 'pending'){
        todos.todoList.forEach(todo => {
            if(todo.isCompleted != true) 
                appendTodoInHtml(todo);
        })
    }else if(value === 'completed'){
        todos.todoList.forEach(todo => {
            if(todo.isCompleted) 
                appendTodoInHtml(todo);
        })
    }
    
}

document.addEventListener("DOMContentLoaded",() =>{
    
    const todoInput=document.getElementById("todoInput");
   
    const submitButton = document.getElementById("addTodo");
    
    const todoList = document.getElementById("todoList");
    const filterBtns = document.getElementsByClassName("filterBtn");
    console.log(filterBtns);
    
    for(btn of filterBtns){
        console.log(btn);
        btn.addEventListener("click", executeFilterAction);

    }


    submitButton.addEventListener("click",(event) =>{
        const todoText = todoInput.value.trim();
        if(todoText === ''){
            alert("please write something for the todo")
        }else{
            addTodoToLocalStorage({text:todoText , isCompleted:false});
            appendTodoInHtml({text:todoText , isCompleted:false});
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
        appendTodoInHtml(todo);
        /*const newTodoItem = document.createElement("li");
        newTodoItem.textContent=todo;
        todoList.appendChild(newTodoItem);*/ 
    })
});

console.log("END");
