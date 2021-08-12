// connected

const myForm = document.querySelector("#myForm");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const myList= document.querySelector("#myTasks");
const msg = document.querySelector(".msg");


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (taskInput.value === '') {
        const myMsg = '<h4>Please Insert Text</h4>';
        msg.insertAdjacentHTML('beforeend', myMsg)
        msg.style.backgroundColor="orangered";
        setTimeout(() => msg.remove(), 3000);
        
    } else {
        createItem(taskInput.value);
    }
}

function createItem(x) {
    const ourHTML = `<li class="task">${x} <button class="deleteBtn" onclick='removeItem(this)' >Complete</button></li>`
    myList.insertAdjacentHTML('beforeend', ourHTML);
    taskInput.value = '';
    taskInput.focus();
}

function removeItem(y) {
    y.parentElement.remove();
}



