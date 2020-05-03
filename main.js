const myLibrary = [

{   
    title: "The Hobbit", author: "J.R.R Tolkien", pagesRead: "195", pagesTotal: "200", progress: "Reading"
},
{
    title: "Extremely Loud & Incredibly Close", author: "Jonathan Safaran", pagesRead: "295", pagesTotal: "300", progress: "Dropped"
}
];

// Objects & Constructors
function book (title, author, pagesRead, pagesTotal, progress){

    this.title = title;
    this.author = author;
    this.pagesRead = pagesRead;
    this.pagesTotal = pagesTotal;
    this.progress = progress;
    this.bookInfo = function(){
        return info = `title: ${title}, author: ${author}, pagesRead: ${pagesRead}, pagesTotal: ${pagesTotal}, progress: ${progress}`;
    }
}
var addBtn = document.getElementById('button');

addBtn.addEventListener("submit", addBookTolibrary);

function addBookTolibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementsById("author").value;
    let pagesRead = document.getElementsById("pagesRead").value;
    let pagesTotal = document.getElementsById("pagesTotal").value;
    let progress = document.getElementsById("progress").value;

    let newBook = new book (title, author, pagesRead, pagesTotal, progress);
    myLibrary.push(newBook);
}

    var render = function (template, node) {
        node.innerHTML += template;
    };

    myLibrary.forEach(function(element){
        let template = `<tr>
                            <td>${element.title}</td>
                            <td>${element.author}</td>
                            <td>${element.pagesRead}/${element.pagesTotal}</td>
                            <td>${element.progress}</td>
                        <tr>`;
        render(template, document.querySelector('#listOfBooks'));
    });

function openForm() {
    document.getElementById("popupForm").style.display="block";
}

      function closeForm() {
        document.getElementById("popupForm").style.display="none";
      }


// function addRow(){
//     addToLibrary();
//         myLibrary.forEach(function(element){
//             const i = 1;

//             let table = document.getElementById("listOfBooks");
//             let row = table.insertRow(i);
//             let cell0 = row.insertCell(0);
//             let cell1 = row.insertCell(1);
//             let cell2 = row.insertCell(2);
//             let cell3 = row.insertCell(3);
//             let cell4 = row.insertCell(4);

//             cell0.innerHTML = ${element.title};
//             cell1.innerHTML = ${element.author};
//             cell2.innerHTML = ${element.pagesRead};
//             cell2.innerHTML = ${element.pagesTotal};
//             cell3.innerHTML = ${element.progress};
//                 i++;
//         }
// }





