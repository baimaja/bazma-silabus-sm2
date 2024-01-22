const { storeTodo, todoQuestion } = require("./todos");

const addTodo = async () => {
  const title = await todoQuestion("masukan judul todo : ");
  const description = await todoQuestion("masukan descripsi todo : ");
  const status = await todoQuestion("masukan status todo : ");
  storeTodo(title, description, status);
};

addTodo();
