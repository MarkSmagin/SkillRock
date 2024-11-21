const todoItems = document.getElementById('todoItems');
const addNewTask = document.getElementById('addNewTask');
const deleteTask = document.getElementsByClassName('todo__item-delete');
const todoItem = document.getElementsByClassName('todo__item');
const all = document.getElementById('all');
const active = document.getElementById('active');
const done = document.getElementById('done');
const filterOption = document.getElementsByClassName('todo__filter-option');

addNewTask.addEventListener('click', function(){
    const newTaskText = document.getElementById('newTaskText').value;
    if (newTaskText === '') {
        alert('Введите текст задачи')
    } else {
        let item = document.createElement('li');
        item.classList.add('todo__item', 'active');
        item.innerHTML = `${newTaskText}
                        <button class="todo__item-delete" id="deleteTask"></button>`;
        todoItems.appendChild(item);

        for (let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].addEventListener('click', function(e){
                e.target.closest('.todo__item').remove();
            })
        }
        newTaskText = document.getElementById('newTaskText').value = '';
    }
})

for (let i = 0; i < deleteTask.length; i++) {
    deleteTask[i].addEventListener('click', function(e){
        e.target.closest('.todo__item').remove();
    })
}

todoItems.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
})

all.addEventListener('click', function(e){
    for(let i = 0; i < filterOption.length; i++){
        filterOption[i].classList.remove('checked');
    }
    e.target.classList.add('checked');
    for(let i = 0; i < todoItem.length; i++) {
        todoItem[i].classList.remove('hidden');
    }
})

active.addEventListener('click', function(e){
    for(let i = 0; i < filterOption.length; i++){
        filterOption[i].classList.remove('checked');
    }
    e.target.classList.add('checked');
    for(let i = 0; i < todoItem.length; i++) {
        if (todoItem[i].classList.contains('done')){
            todoItem[i].classList.add('hidden');
        } else {
            todoItem[i].classList.remove('hidden');
        }
    }
})

done.addEventListener('click', function(e){
    for(let i = 0; i < filterOption.length; i++){
        filterOption[i].classList.remove('checked');
    }
    e.target.classList.add('checked');
    for(let i = 0; i < todoItem.length; i++) {
        if (!todoItem[i].classList.contains('done')){
            todoItem[i].classList.add('hidden');
        } else {
            todoItem[i].classList.remove('hidden');
        }
    }
})