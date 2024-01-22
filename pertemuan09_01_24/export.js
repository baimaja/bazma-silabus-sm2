const {getKelasDescripsi , getKelasAsync} = require("./arsitektur.js")
console.log(getKelasDescripsi(2))


getKelasAsync(1)
  .then((kelasSija) => {
    console.log(kelasSija);
  })

