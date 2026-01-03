let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach((book, index) => {
        list.innerHTML += `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td><button onclick="deleteBook(${index})">Delete</button></td>
        </tr>`;
    });
}

function addBook() {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    if (name === "" || author === "") {
        alert("Please fill all fields");
        return;
    }

    books.push({ name, author });
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

displayBooks();
