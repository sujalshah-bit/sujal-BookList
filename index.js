
// fetching input element 
const tittle = document.querySelector('#tittle');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn_no');

const list = document.querySelector('.list');
const button = document.querySelector('.add');
// const parent = document.querySelector('.list it')
const deleting = document.querySelector('.cancel');

// adding task 

button.addEventListener('click',() =>{
    let new_list = document.createElement('div');
    new_list.classList.add('list_item');
    
    new_list.innerHTML = `
    <h4 class="list_sub_item">${tittle.value}</h4>
    <h4 class="list_sub_item">${author.value}</h4>
    <h4 class="list_sub_item">${isbn.value}</h4>
    <h4 class="list_sub_item"><i class="fa fa-times cancel" aria-hidden="true"></i></h4>
    `;
    list.appendChild(new_list);
    tittle.value ='';
    author.value = '';
    isbn.value = '';

    // console.log(deleting);
})

// deleting task


list.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa')) {
        e.target.parentElement.parentElement.remove();
    }
})
