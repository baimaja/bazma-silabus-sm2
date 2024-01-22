const {deleteById, deleteQuestoin, todoQuestion} = require ('./todos');

const deleteTodo = async () => {
    const id = await todoQuestion('masukan id todo : ');
    deleteById(id);
}
deleteTodo()