export function selectBook (book) {
  console.log('this book is selected', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
