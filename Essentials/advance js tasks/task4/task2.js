const books = [
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

function Title(books, title) {
  return books.find(book => book.title === title);
}
console.log(Title(books, '1984'));