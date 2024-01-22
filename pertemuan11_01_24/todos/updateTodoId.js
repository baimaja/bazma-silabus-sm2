const {updateById} = require('./todos');
const { todoQuestion } = require('./todos');

const update = async () => {
    const id = await todoQuestion ('masukan id todo : ');
    const title  = await todoQuestion ('masukan judul todo : ');
    const description = await todoQuestion ('masukan deskripsi todo : ');
    const status = await todoQuestion ('masukan status todo : ');

    updateById(id, {title, description, status});
}
 update();