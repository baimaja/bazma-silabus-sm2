const generateRandomId = require("./generateRandomId");
const fs = require("fs");
const { title } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const direktory = "./database";
if (!fs.existsSync(direktory)) {
  fs.mkdirSync(direktory);
}

const checkFile = "./database/todos.json";
if (!fs.existsSync) {
  fs.writeFileSync(checkFile, "[]", "utf-8");
}
const todoQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};
const todos = () => {
  const fileTodos = fs.readFileSync(checkFile);
  const data = JSON.parse(fileTodos);
  console.log(data);
  rl.close();
};

const storeTodo = (title, description, status) => {
  const id = generateRandomId(10);
  const Todo = { id, title, description, status };
  const file = fs.readFileSync(checkFile, "utf-8");

  const dataTodos = JSON.parse(file);
  dataTodos.push(Todo);
  fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
  console.log(`Thank you for submit todos`);
  rl.close();
};

const getById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(file);
  const findTodoId = data.find((todo) => todo.id === id);

  if (findTodoId) {
    console.log(findTodoId);
  } else {
    console.log(`todo dengan id ini ${findTodoId} tidak di temukan`);
  }
  rl.close();
};

const updateById = (id, updateTodo) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataTodos = JSON.parse(file);
  const index = dataTodos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    dataTodos[index] = { ...dataTodos[index], ...updateTodo };
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
    console.log("berhasil update todo : " + id);
  } else {
    console.log(`todo dengan id ini ${id} tidak ditemukan`);
  }
  rl.close();
};

const deleteById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataTodos = JSON.parse(file);
  const filterTodoId = dataTodos.filter((todo) => todo.id !== id);

  if (filterTodoId.lenght < dataTodos.lenght) {
    fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
    console.log(`Berhasil menghapus todo: ${id}`);
  } else {
    console.log(`todo dengan id ini ${id} tidak di temukan`);
  }
};

deleteById('4CU9oNOK03')
module.exports = {
  todoQuestion,
  todos,
  storeTodo,
  getById,
  updateById,
  deleteById,
};

fs.close()
