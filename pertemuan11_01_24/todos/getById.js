const { getById, todoQuestion } = require("./todos");

const todoId = async () => {
  const id = await todoQuestion("masukan id todo: ");
  getById(id);
};
todoId();
