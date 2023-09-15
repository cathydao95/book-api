// OBTAIN DATA VIA FETCH
let booksContainer = document.getElementsByClassName("books-container")[0];

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const booksResponse = await response.json();
  console.log(booksResponse);
  let books = booksResponse.books;
  console.log(books);
  books.forEach((book) => {
    const { id, title, author, img, summary } = book;
    let bookContainer = `
    <div class="book-container">
      <image class="book-img" src=${img} alt=${title}/>
      <h2 class="book-title">${title} by ${author}</h2>
  
      <p class="summary">${summary}</p>
    </div>
    `;

    booksContainer.insertAdjacentHTML("beforeend", bookContainer);
  });
};

getBooks();
