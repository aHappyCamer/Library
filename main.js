let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pagesRead = document.getElementById("pagesRead").value;
let pagesTotal = document.getElementById("pagesTotal").value;
let progress = document.getElementById("progress").value;

let titleEdit = document.getElementById("titleEdit").value;
let authorEdit = document.getElementById("authorEdit").value; 
let pagesReadEdit = document.getElementById("pagesReadEdit").value;
let pagesTotalEdit = document.getElementById("pagesTotalEdit").value; 
let progressEdit = document.getElementById("progressEdit").value;

const removeBookBtn = document.getElementById('editButton');
const btnAddBook = document.getElementById('#btnAddBook');
const table = document.getElementById("listOfBooks");
const list = document.querySelector('#listOfBooks');
const deleteBookBtn = document.querySelector('#btnCancel');
if (deleteBookBtn){    
        deleteBookBtn.addEventListener('click', closeForm, false);  
    }
const editBtn = document.querySelector('#editButton');
if (editBtn){
    editBtn.addEventListener('click', openFormEdit, false);
}

let abc;

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
    clearTable(table);
    render();
    resetForm();
    closeForm();
}

function clearTable(table) {
  // var rows = table.rows;
    for(i = 0; i < table.rows.length; i++){
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
    let json = JSON.stringify(myLibrary);
    for(i= 0; i < myLibrary.length; i++){
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

function clickSubmit(){
    if (validateForm()){
        addBookTolibrary();
    }
    else{
        alert("All fields must be filled in");
    }
}

function openForm() {
    document.getElementById("popupForm").style.display="block";
}

function closeForm() {
    document.getElementById("popupForm").style.display="none";
    document.getElementById("popupForm-edit").style.display="none";
}

function openFormEdit(x){
    abc = x.parentNode.parentNode.rowIndex-1;
    document.getElementById("popupForm-edit").style.display="block";

    document.forms['formEdit']['titleEdit'].value = myLibrary[abc].title;
    document.forms['formEdit']['authorEdit'].value = myLibrary[abc].author;
    document.forms['formEdit']['pagesReadEdit'].value = myLibrary[abc].pagesRead;
    document.forms['formEdit']['pagesTotalEdit'].value = myLibrary[abc].pagesTotal;
    document.forms['formEdit']['progressEdit'].value = myLibrary[abc].progress;
    
}

function resetForm(){
    document.getElementById("form").reset();
    document.getElementById("formEdit").reset();

}

function updateForm(){

    submitEdits(abc);
}


function submitEdits(i){
    titleEdit = document.getElementById("titleEdit").value;
    authorEdit = document.getElementById("authorEdit").value;
    pagesReadEdit = document.getElementById("pagesReadEdit").value;
    pagesTotalEdit = document.getElementById("pagesTotalEdit").value; 
    progressEdit = document.getElementById("progressEdit").value;

    myLibrary[i]["title"] = titleEdit;
    myLibrary[i]["author"] = authorEdit;
    myLibrary[i]["pagesRead"] = pagesReadEdit;
    myLibrary[i]["pagesTotal"] = pagesTotalEdit;
    myLibrary[i]["progress"] = progressEdit;

    closeForm();
    clearTable(table);
    render();
    resetForm();
}

function myFunction(x) {
    let tableIndex = x.parentNode.parentNode.rowIndex;
    let arrayIndex = x.parentNode.parentNode.rowIndex - 1;
    removeBookFromArray(arrayIndex);
    document.getElementById("listOfBooks").deleteRow(tableIndex);
}

function removeBookFromArray(index){
       myLibrary.splice(index, 1);
    }

let titleInput = document.forms["form"]["title"];
let authorInput = document.forms["form"]["author"];
let pagesReadInput = document.forms["form"]["pagesRead"];
let pagesTotalInput = document.forms["form"]["pagesTotal"];
let progressInput = document.forms["form"]["progress"];

function validateForm() {
  let bookTitle = trim(titleInput.value);
  let bookAuthor = trim(authorInput.value);
  let bookPagesRead = trim(pagesReadInput.value);
  let bookPagesTotal = trim(pagesTotalInput.value);
  let bookProgress = trim(progressInput.value);

  if (bookTitle && bookAuthor && bookPagesRead && bookPagesTotal) {
    titleInput.value = bookTitle;
    authorInput.value = bookAuthor;
    pagesReadInput.value = bookPagesRead;
    pagesTotalInput.value = bookPagesTotal;
    return true;

} else{
    return false;
  }
}

function trim(value) {
    return value.replace(/^\s+|\s+$/g,"");
}

