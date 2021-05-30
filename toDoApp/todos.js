import {
    Todo
} from './todo.js';

let todoList = [];
let mode = 'all';


// if storage exists in localStorage... convert string to object and read into todoList
if (localStorage.getItem('todos')) {
    todoList = JSON.parse(localStorage.getItem('todos'));
}
displayTodos();



function displayTodos() {
    let ul = document.querySelector("ul");
    ul.innerHTML = '';

    todoList.forEach(
        todoItem => {
            ul.innerHTML +=
                `<li>
                <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : '' }>
                <span>${ todoItem.Content }</span>
                <button data-id="${todoItem.Id}"}>X</button>
                </li>`;
        }
    );

    // Handle Checkboxes
    let todoCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    todoCheckboxes.forEach((todoCheckbox) => {
        todoCheckbox.addEventListener('click', (e) => {
            let selectedId = e.target.dataset.id;
            console.log(selectedId)
            let selectedTodo = todoList.find(todo => todo.Id === parseInt(selectedId));

            selectedTodo.Completed = !selectedTodo.Completed; // Changes True and False
            localStorage.setItem("todos", JSON.stringify(todoList));
        });
    });

    // Handle deleting todos
    let todoDeleteButtons = document.querySelectorAll('button');

    todoDeleteButtons.forEach((todoDeleteButton) => {
        todoDeleteButton.addEventListener('click', (e) => {
            console.log(todoDeleteButton)
            let selectedId = e.target.dataset.id;
            console.log(selectedId)
            let selectedTodoIndex = todoList.findIndex(todo => todo.Id === parseInt(selectedId)); // where in list
            console.log(selectedTodoIndex)
            todoList.splice(selectedTodoIndex, 1);

            localStorage.setItem("todos", JSON.stringify(todoList));

            displayTodos();
        });
    });
}

let allButton = document.getElementById('all').addEventListener("click", (e) => {
    let ul = document.querySelector("ul");
    ul.innerHTML = '';

    todoList.forEach(
        todoItem => {
            ul.innerHTML +=
                `<li>
                <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : '' }>
                <span>${ todoItem.Content }</span>
                <button data-id="${todoItem.Id}"}>X</button>
            </li>`;
        //
        //
        //
        //
        // Handle Checkboxes
        let todoCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        todoCheckboxes.forEach((todoCheckbox) => {
            todoCheckbox.addEventListener('click', (e) => {
                let selectedId = e.target.dataset.id;
                console.log(selectedId)
                let selectedTodo = todoList.find(todo => todo.Id === parseInt(selectedId));

                selectedTodo.Completed = !selectedTodo.Completed; // Changes True and False
                localStorage.setItem("todos", JSON.stringify(todoList));
            });
        });

        // Handle deleting todos
        let todoDeleteButtons = document.querySelectorAll('button');

        todoDeleteButtons.forEach((todoDeleteButton) => {
            todoDeleteButton.addEventListener('click', (e) => {
                console.log(todoDeleteButton)
                let selectedId = e.target.dataset.id;
                console.log(selectedId)
                let selectedTodoIndex = todoList.findIndex(todo => todo.Id === parseInt(selectedId)); // where in list
                console.log(selectedTodoIndex)
                todoList.splice(selectedTodoIndex, 1);

                localStorage.setItem("todos", JSON.stringify(todoList));

                displayTodos();
            });
        });
        }

    );
})

let activeButton = document.querySelector('#active').addEventListener("click", (e) => {
    let ul = document.querySelector("ul");
    ul.innerHTML = '';

    todoList.forEach(
        todoItem => {

            if (todoItem.Completed == false) {
                ul.innerHTML +=
                    `<li>
                <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : '' }>
                <span>${ todoItem.Content }</span>
                <button data-id="${todoItem.Id}"}>X</button>
            </li>`;
            }
            //
            //
            //
            //
            // Handle Checkboxes
            let todoCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            todoCheckboxes.forEach((todoCheckbox) => {
                todoCheckbox.addEventListener('click', (e) => {
                    let selectedId = e.target.dataset.id;
                    console.log(selectedId)
                    let selectedTodo = todoList.find(todo => todo.Id === parseInt(selectedId));

                    selectedTodo.Completed = !selectedTodo.Completed; // Changes True and False
                    localStorage.setItem("todos", JSON.stringify(todoList));
                });
            });

            // Handle deleting todos
            let todoDeleteButtons = document.querySelectorAll('button');

            todoDeleteButtons.forEach((todoDeleteButton) => {
                todoDeleteButton.addEventListener('click', (e) => {
                    console.log(todoDeleteButton)
                    let selectedId = e.target.dataset.id;
                    console.log(selectedId)
                    let selectedTodoIndex = todoList.findIndex(todo => todo.Id === parseInt(selectedId)); // where in list
                    console.log(selectedTodoIndex)
                    todoList.splice(selectedTodoIndex, 1);

                    localStorage.setItem("todos", JSON.stringify(todoList));

                    displayTodos();
                });
            });
        }
    );
})

let completedButton = document.querySelector('#completed').addEventListener("click", (e) => {
    let ul = document.querySelector("ul");
    ul.innerHTML = '';

    todoList.forEach(
        todoItem => {

            if (todoItem.Completed == true) {
                ul.innerHTML +=
                    `<li>
                    <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : '' }>
                    <span>${ todoItem.Content }</span>
                    <button data-id="${todoItem.Id}"}>X</button>
                </li>`;
            }
            //
            //
            // Handle Checkboxes
            let todoCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            todoCheckboxes.forEach((todoCheckbox) => {
                todoCheckbox.addEventListener('click', (e) => {
                    let selectedId = e.target.dataset.id;
                    console.log(selectedId)
                    let selectedTodo = todoList.find(todo => todo.Id === parseInt(selectedId));

                    selectedTodo.Completed = !selectedTodo.Completed; // Changes True and False
                    localStorage.setItem("todos", JSON.stringify(todoList));
                });
            });

            // Handle deleting todos
            let todoDeleteButtons = document.querySelectorAll('button');

            todoDeleteButtons.forEach((todoDeleteButton) => {
                todoDeleteButton.addEventListener('click', (e) => {
                    console.log(todoDeleteButton)
                    let selectedId = e.target.dataset.id;
                    console.log(selectedId)
                    let selectedTodoIndex = todoList.findIndex(todo => todo.Id === parseInt(selectedId)); // where in list
                    console.log(selectedTodoIndex)
                    todoList.splice(selectedTodoIndex, 1);

                    localStorage.setItem("todos", JSON.stringify(todoList));

                    displayTodos();
                });
            });
        }
    );
})





let button = document.querySelector("#addTask").addEventListener("click", (e) => {
    let content = document.querySelector("#content");
    let todo = new Todo(content.value);
    todoList.push(todo);

    // add array to local storage
    localStorage.setItem("todos", JSON.stringify(todoList)); // Must make a string to prevent [object, object]

    // Used to reset input box to blank
    content.value = '';
    displayTodos();
});