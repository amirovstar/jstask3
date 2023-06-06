'use strict';

let list = [];

function addTodo() {
    let inp = document.getElementById("inp");
    let listUl = document.getElementById("list");

    const todoText = inp.value.trim();


    if (todoText !== "") {
        list.push(todoText);
        addEncaps();
        inp.value = '';
    }
    else {
        Swal.fire({
            title: 'Please, Do Not Insert Empty Space.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(stars-universe.gif)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("nyan-cat-nyan.gif")
              left top 
              no-repeat
              
            `
          })
    }

}
function removeTodoItem(itemIndex) {
    list.splice(itemIndex, 1);
    addEncaps();
}

function addEncaps() {
    let listUl = document.getElementById("list");
    listUl.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        const listItem = `<li class="list-group-item d-flex justify-content-between align-items-center">${list[i]}<button class="remove-button" onclick="removeTodoItem(${i})">&times;</button></li>`;
        listUl.innerHTML += listItem;
    }
}
    