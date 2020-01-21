const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//add todos

const generateHTML = todo => {
    const temp = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
    list.innerHTML += temp;
};


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = e.target.add.value.trim();
    if(todo.length) {
        generateHTML(todo);
        addForm.reset();
    }
});

//delete todos

list.addEventListener('click', e => {
    console.log("clicked",e.target);
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};


//search todos
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
