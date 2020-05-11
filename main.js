
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pagesRead = document.getElementById("pagesRead").value;
let pagesTotal = document.getElementById("pagesTotal").value;
let progress = document.getElementById("progress").value;
let tableRow = document.querySelector('#listOfBooks');
let bookForm = document.querySelector('#form-popup');
let removeBookBtn = document.getElementById('editButton');
let btnAddBook = document.getElementById('#btnAddBook');

const myLibrary =[];

// Objects & Constructors
function Book (title, author, pagesRead, pagesTotal, progress){

    this.title = title;
    this.author = author;
    this.pagesRead = pagesRead;
    this.pagesTotal = pagesTotal;
    this.progress = progress;
}


function addBookTolibrary() {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pagesRead = document.getElementById("pagesRead").value;
    pagesTotal = document.getElementById("pagesTotal").value;
    progress = document.getElementById("progress").value;

    myLibrary.push(new Book(title, author, pagesRead, pagesTotal, progress));
    render();
    closeForm();
    resetForm();
}


function render () {

    const list = document.querySelector('#listOfBooks')
    const row = document.createElement('tr');

    let json = JSON.stringify(myLibrary);

    for(i = 0; i < myLibrary.length; i++){
        row.innerHTML = `<td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pagesRead}/${myLibrary[i].pagesTotal}</td>
                        <td>${myLibrary[i].progress}</td>
                        <td><button id="editButton" onclick="clickSubmit()">
                        <span class="material-icons">create</span></td>
                        <td><button id="removeButton" onclick="myFunction(this)">
                        <span class="material-icons">delete</span></button></td>`;

                        list.appendChild(row);
    }

}

function clickSubmit(i){
    if(myLibrary.includes(document.getElementById("title"))){
        getDataFromArray();
    }
    else{
        addBookTolibrary();
    }

}

function openForm() {
    document.getElementById("popupForm").style.display="block";
}

function closeForm() {
    document.getElementById("popupForm").style.display="none";
}

function resetForm(){
    document.getElementById("form").reset();

}

function updateForm(i){
    openForm();

    myLibrary[i].title = title; 
    myLibrary[i].author = author; 
    myLibrary[i].pagesRead = pagesRead; 
    myLibrary[i].pagesTotal = pagesTotal; 
    myLibrary[i].progress = progress;
    alert(i);
}

function getDataFromArray(x){
    let i = (x.parentNode.parentNode.rowIndex - 1);

    document.getElementById("title").value = myLibrary[i].title; 
    document.getElementById("author").value = myLibrary[i].author; 
    document.getElementById("pagesRead").value = myLibrary[i].pagesRead; 
    document.getElementById("pagesTotal").value = myLibrary[i].pagesTotal; 
    document.getElementById("progress").value = myLibrary[i].progress;
    
    updateForm(i);
    alert(i)
}

function myFunction(x) {
    let i = (x.parentNode.parentNode.rowIndex);
    removeBook(i);
    document.getElementById("listOfBooks").deleteRow(i);
    alert(i);
}

function removeBook(index){
       myLibrary.splice(index, 1);
       console.log(myLibrary);
    }




