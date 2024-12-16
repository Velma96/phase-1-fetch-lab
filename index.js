
function fetchBooks() {
  // Perform a fetch request and return it to satisfy the tests
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
          renderBooks(data); // Pass the data to renderBooks
      });
}

function renderBooks(books) {
  // Select the main element (or create one if needed)
  const main = document.querySelector('main');
  books.forEach(book => {
      const bookTitle = document.createElement('p'); // Create a paragraph for each book title
      bookTitle.textContent = book.name; // Set the book name as the text content
      main.appendChild(bookTitle); // Append the paragraph to the main element
  });
}

// Call fetchBooks to execute the fetch and render on page load
fetchBooks();
