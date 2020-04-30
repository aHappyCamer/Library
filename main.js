var myLibrary = [

{   
    title: "The Hobbit", author: "J.R.R Tolkien", pages: "295 pages", read: "not read yet"
},
{
    title: "Extremely Loud & Incredibly Close", author: "Jonathan Safaran", pages: "300 pages", read: "read"
}
];

// Objects & Constructors
function book (title, author, pages, read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function(){
        return info = `${title} by ${author}, ${pages} pages, ${read}`;
    }
}


function addBookTolibrary() {
    var title = document.getElementById("title").value;
    var author = document.getElementsById("author").value;
    var pages = document.getElementsById("pages").value;
    var read = document.getElementsById("read").value;

    var newBook = new book (title, author, pages, read);

    myLibrary.push(newBook);
}

    var render = function (template, node) {
    node.innerHTML += template;
    };

    myLibrary.forEach(function(element){
        var template = `<tr>
                            <td>${element.title}</td>
                            <td>${element.author}</td>
                            <td>${element.pages}</td>
                            <td>${element.read}</td>
                        <tr>
                        </br>`;
        render(template, document.querySelector('#list'));
    });

    







