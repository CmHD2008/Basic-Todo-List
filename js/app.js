const TODOFORM = document.getElementById('todoForm');
const TODOINPUT = document.getElementById('todoInputValue');
const TODOLIST = document.getElementById('todoListContainer');

class TodoItem {
    constructor(title) {
        this.title = title;
    }

    buildNewTodoItem() {
        const div = document.createElement('div');
        div.classList.add('todoItem');

        const todoTitle = document.createElement('p');
        todoTitle.id = "todoItemTitle";
        todoTitle.innerText = this.title;

        const deleteButton = document.createElement('button');
        const icon = document.createElement('icon');
        icon.classList.add('fas');
        icon.classList.add('fa-trash');
        deleteButton.appendChild(icon);
        deleteButton.id = "deleteButton";
        deleteButton.onclick = () => div.remove();

        div.appendChild(todoTitle);
        div.appendChild(deleteButton);

        TODOLIST.appendChild(div);
    }
}

TODOFORM.onsubmit = $event => {
    $event.preventDefault();
    if (TODOINPUT.value.length > 0) {
        console.log('Hello World');
        const todoItem = new TodoItem(TODOINPUT.value);
        todoItem.buildNewTodoItem();
        TODOINPUT.value = '';
    }
}