const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const newBookBtn = document.querySelector("#new-book-form")
const displayBook = document.querySelector(".bookGrid");

function resetFunction() {
    document.getElementById("new-book-form").reset();
}


openButton.addEventListener("click", () => {
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})

newBookBtn.addEventListener("submit", () => {
    event.preventDefault();
    addBookToLibrary();
    modal.close()

})

const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead()
    createCard()
}




function addBookToLibrary() {
    let title = document.querySelector('#title').value;

    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);
    console.log(newbook)
    createCard()
    resetFunction()

}




function createCard() {
    displayBook.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div')
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const buttonGroup = document.createElement('div')
        const read = document.createElement('button');
        const remove = document.createElement('button');
        let book = myLibrary[i]

        bookCard.classList = 'bookCard';
        buttonGroup.classList = ('button-group')
        read.classList = ('bookBtn')
        remove.classList = ('removeBtn');


        title.textContent += `Title: ${book.title}`
        author.textContent += `Author: ${book.author}`
        pages.textContent += ` ${book.pages} Pages`
        remove.textContent += `Remove`

        function removeBook(index) {
            myLibrary.splice(index, 1)
            createCard()
        }


        remove.addEventListener("click", () => {
            removeBook(i)
        })

        read.addEventListener("click", () => {
            toggleRead(i)
        })


        if (book.read == true) {
            read.textContent += "Read"
            // read.classList = ('btn-light-green')
        }
        else if (book.read == false) {
            read.textContent += "Not Read"
            read.classList = ('btn-light-red')
        }


        bookCard.appendChild(title)
        bookCard.appendChild(author)
        bookCard.appendChild(pages)
        bookCard.appendChild(read)
        bookCard.appendChild(remove)
        displayBook.appendChild(bookCard)

    }
}






// read.addEventListener("click", () => {
//     if (read.textContent = "Read") {
//         read.classList = ('btn-light-red')
//         read.textContent = "Not Read"

//     } else if (read.textContent = "Not Read") {
//         read.addEventListener("click", () => {
//             read.classList = ('btn-light-green')
//             read.textContent = "Read"


//         })
//     }
// })

