const generateRandomId = require("./generateRandomId");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directory = "./library";
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

const checkFile = "./library/books.json"; 
if (!fs.existsSync(checkFile)) {
  fs.writeFileSync(checkFile, "[]", "utf-8");
}

const bookQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const listBooks = () => {
  const fileBooks = fs.readFileSync(checkFile);
  const data = JSON.parse(fileBooks);
  console.log(data);
  rl.close();
};

const addBook = (title, author, genre) => {
  const id = generateRandomId(10);
  const book = { id, title, author, genre };
  const file = fs.readFileSync(checkFile, "utf-8");

  const dataBooks = JSON.parse(file);
  dataBooks.push(book);
  fs.writeFileSync(checkFile, JSON.stringify(dataBooks));
  console.log(`Thank you for adding a book.`);
  rl.close();
};

const getBookById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(file);
  const foundBook = data.find((book) => book.id === id);

  if (foundBook) {
    console.log(foundBook);
  } else {
    console.log(`Book with id ${id} not found.`);
  }
  rl.close();
};

const updateBookById = (id, updatedBook) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(file);
  const index = data.findIndex((book) => book.id === id);

  if (index !== -1) {
    // Update the book at the found index with the new data
    data[index] = { ...data[index], ...updatedBook };
    fs.writeFileSync(checkFile, JSON.stringify(data));
    console.log(`Book with id ${id} has been updated.`);
  } else {
    console.log(`Book with id ${id} not found.`);
  }
  rl.close();
};

module.exports = {
  bookQuestion,
  listBooks,
  addBook,
  getBookById,
  updateBookById,
};
