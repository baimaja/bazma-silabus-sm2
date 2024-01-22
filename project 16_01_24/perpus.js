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

const checkFile = "./db/perpus.json";
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
  const file = fs.readFileSync('./db/perpus.json', "utf-8");

  const dataTodos = JSON.parse(file);
  dataTodos.push(Todo);
  fs.writeFileSync('db/perpus.json', JSON.stringify(dataTodos));
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
  const data = JSON.parse(file);
  const index = data.findIndex((todo) => todo.id === id);

  if (index !== -1) {
  }
};

module.exports = {
  todoQuestion,
  todos,
  storeTodo,
  getById,
  updateById,
};
