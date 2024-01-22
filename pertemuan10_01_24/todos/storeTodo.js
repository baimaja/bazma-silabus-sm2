const { storeTodo, todoQuestion } = require("./todos");

const addTodo = async () => {
  const title = await todoQuestion("masukan judul buku : ");
  const description = await todoQuestion("masukan descripsi buku : ");
  const penulis = await todoQuestion("siapa penulis bukunya : ");

  storeTodo(title, description, penulis);
};

addTodo();
