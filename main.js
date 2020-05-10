
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pagesRead = document.getElementById("pagesRead").value;
let pagesTotal = document.getElementById("pagesTotal").value;
let progress = document.getElementById("progress").value;
let tableRow = document.querySelector('#listOfBooks');
let bookForm = document.querySelector('#form-popup');
let btnAddBook = document.getElementById('#btnAddBook');
    if (btnAddBook){
        btnAddBook.addEventListener('click', addBookTolibrary, false);
    }

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
                        <td><button id="editButton" onclick="editBook()">
                        <span class="material-icons">create</span></td>
                        <td><button id="removeButton" onclick="removeBook()">
                        <span class="material-icons">delete</span></button></td>`;

                        list.appendChild(row);
    }

}



function openForm() {
    document.getElementById("popupForm").style.display="block";
}

function closeForm() {
        document.getElementById("popupForm").style.display="none";
}
console.log(myLibrary);





