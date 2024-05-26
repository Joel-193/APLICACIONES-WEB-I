let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    }
];

function addBooks() {
    books.forEach((book) => {
        const formattedDate = new Date(book.published).toLocaleDateString('pt-br');
        document.getElementById('response').innerHTML += `
            <ul>
                <li><strong>Autor:</strong> ${book.author}</li>
                <li><strong>Título:</strong> ${book.title}</li>
                <li><strong>ISBN:</strong> ${book.isbn}</li>
                <li><strong>Fecha de Inserción:</strong> ${formattedDate}</li>
                <a href="#" class="delete">🗑 Deletar</a>
            </ul>
            <br>
        `;
    });
}

function showData(event) {
    event.preventDefault();

    const setAutor = document.getElementById('author').value;
    const setTitulo = document.getElementById('title').value;
    const setISBN = document.getElementById('isbn').value;
    const setPublicacao = document.getElementById('publicationDate').value;
    const setDate = new Date().toLocaleDateString('pt-br');
    const setSchedule = new Date().toLocaleTimeString('pt-br');

    if (setAutor === "" || setTitulo === "" || setISBN === "" || setPublicacao === "") {
        alert("Rellenar los campos");
    } else {
        document.getElementById('response').innerHTML += `
            <ul>
                <li><strong>Autor:</strong> ${setAutor}</li>
                <li><strong>Título:</strong> ${setTitulo}</li>
                <li><strong>ISBN:</strong> ${setISBN}</li>
                <li><strong>Publicación:</strong> ${setPublicacao}</li>
                <li><strong>Fecha de Inserción:</strong> ${setDate}, ${setSchedule}</li>
                <a href="#" class="delete">🗑 Deletar</a>
            </ul>
            <br>
        `;
        clearData();
    }
}

function clearData() {
    document.getElementById('author').value = "";
    document.getElementById('title').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('publicationDate').value = "";
}

document.getElementById('response').addEventListener('click', function(event) {
    if (event.target.className === "delete") {
        event.target.parentElement.remove();
    }
});

addBooks();