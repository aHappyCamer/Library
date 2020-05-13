let removeBookBtn = document.getElementById('editButton');
let btnAddBook = document.getElementById('#btnAddBook');
// document.querySelector('#btnEditBook').addEventListener('click', () => {
//     updateForm()
// });
let abc;
const table = document.getElementById("listOfBooks");
const list = document.querySelector('#listOfBooks');

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

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pagesRead = document.getElementById("pagesRead").value;
    let pagesTotal = document.getElementById("pagesTotal").value;
    let progress = document.getElementById("progress").value;

    myLibrary.push(new Book(title, author, pagesRead, pagesTotal, progress));
    clearTable(table);
    render();
    closeForm();
    resetForm();
}

function clearTable(table) {
  // var rows = table.rows;
  let i = 0;
for(i; i < table.rows.length; i++){
  document.getElementById("listOfBooks").deleteRow(i);
                    list.innerHTML = `<th class="title">Title</th>
                    <th class="author">Author</th>
                    <th class="pages">Pages</th>
                    <th class="progress">Progress</th>
                    <th class="edit"></th>
                    <th class="remove"></th>`;
}
}


function render () {
    // const row = document.createElement('tr');
    
    let json = JSON.stringify(myLibrary);
    let i = 0;
    for(i; i < myLibrary.length; i++){
        list.innerHTML += `<tr>
                        <td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pagesRead}/${myLibrary[i].pagesTotal}</td>
                        <td>${myLibrary[i].progress}</td>
                        <td><button id="editButton" onclick="openFormEdit(this)">
                        <span class="material-icons">create</span></td>
                        <td><button id="removeButton" onclick="myFunction(this)">
                        <span class="material-icons">delete</span></button></td>
                        </tr>`;

    }
    

}

function clickSubmit(x){
        addBookTolibrary();
}

function openForm() {
    document.getElementById("popupForm").style.display="block";
}

function closeForm() {
    document.getElementById("popupForm").style.display="none";
    document.getElementById("popupForm-edit").style.display="none";
}

function openFormEdit(x){
    document.getElementById("popupForm-edit").style.display="block";
    abc = x.parentNode.parentNode.rowIndex -1;
}

function resetForm(){
    document.getElementById("form").reset();
    document.getElementById("formEdit").reset();

}

function updateForm(){

    submitEdits(abc);
}

function submitEdits(i){
let titleEdit = document.getElementById("titleEdit").value;
let authorEdit = document.getElementById("authorEdit").value; 
let pagesReadEdit = document.getElementById("pagesReadEdit").value;
let pagesTotalEdit = document.getElementById("pagesTotalEdit").value; 
let progressEdit = document.getElementById("progressEdit").value;


    myLibrary[i]["title"] = titleEdit;
    myLibrary[i]["author"] = authorEdit;
    myLibrary[i]["pagesRead"] = pagesReadEdit;
    myLibrary[i]["pagesTotal"] = pagesTotalEdit;
    myLibrary[i]["progress"] = progressEdit;


    console.log(myLibrary);
    closeForm();
    resetForm();
    clearTable(table);
    render();

}

function myFunction(x) {
    let tableIndex = x.parentNode.parentNode.rowIndex;
    let arrayIndex = x.parentNode.parentNode.rowIndex - 1;
    removeBook(arrayIndex);
    document.getElementById("listOfBooks").deleteRow(tableIndex);
}

function removeBook(index){
       myLibrary.splice(index, 1);
       console.log(myLibrary);
    }




