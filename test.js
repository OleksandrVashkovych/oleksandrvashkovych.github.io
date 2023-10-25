// Click handler for search button
const captureSearchValue = () => {
    const searchInput = document.getElementById('search-bar');
    return searchInput.value.toLowerCase();
  };
  
  // Filter books based on search input and render filtered books to the DOM
  const filterBooks = (searchValue, books) => {
    return books.filter(book => {
      const { title, author, tags } = book;
      return (
        title.toLowerCase().includes(searchValue) ||
        author.toLowerCase().includes(searchValue) ||
        tags.some(tag => tag.toLowerCase() === searchValue)
      );
    });
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
  const structureBooksAsHtml = (filteredBooks) => {
    const formattedBooks = filteredBooks.map(book => structureBookAsHtml(book));
    return formattedBooks;
  };
  
  // Handler triggered when a user clicks the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (books) => {
    const searchValue = captureSearchValue();
    const filteredBooks = filterBooks(searchValue, books);
    const formattedBooks = structureBooksAsHtml(filteredBooks);
    renderBooksToDom(formattedBooks);
  }
  
  // Grab search button from the DOM
  const searchBtn = document.getElementById('search-btn');
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
  