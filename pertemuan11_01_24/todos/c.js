const fs = require('fs')

const deleteById = (id) => {
    const file = fs.readFileSync('./database/todos.json', "utf-8");
    const dataTodos = JSON.parse(file);
    const filterTodoId = dataTodos.findIndex((todo) => todo.id === id);

    

    if(filterTodoId !== -1) {
        dataTodos.splice(filterTodoId, 1)
        fs.writeFileSync('./database/todos.json', JSON.stringify(dataTodos, null, 2))
    }else {
        console.log("nhoting data");
    }

    
  
    // if (filterTodoId.lenght < dataTodos.lenght) {
    //   fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
    //   console.log(`Berhasil menghapus todo: ${id}`);
    // } else {
    //   console.log(`todo dengan id ini ${id} tidak di temukan`);
    // }
  };

deleteById('4CU9oNOK03')