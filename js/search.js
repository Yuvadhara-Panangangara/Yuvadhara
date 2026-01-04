
// This page is custom created by shan-for search function in Library




// Get a reference to the search input field
const searchInput = document.getElementById('search-input');

// Get a reference to all the book items
const books = document.querySelectorAll('.book');

// Add an event listener to the search input
searchInput.addEventListener('input', (event) => {
    // Get the search term and convert it to lowercase for case-insensitive searching
    const searchTerm = event.target.value.toLowerCase();
    
    // Loop through each book item
    books.forEach(book => {
        // Get the title and author from the book-info div
        const title = book.querySelector('h4').textContent.toLowerCase();
        const author = book.querySelector('p').textContent.toLowerCase();
        
        // Check if the search term is included in either the title or the author
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            // If it matches, show the book by removing the 'hidden' class
            book.style.display = 'inline-block';
        } else {
            // If it doesn't match, hide the book
            book.style.display = 'none';
        }
    });
});