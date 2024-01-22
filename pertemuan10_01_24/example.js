const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama lengkap :", (nama) => {
  rl.question("Masukan umur anda:", (umur) => {
    rl.question("Masukan sekolah anda:", (sekolah) => {
      console.log("--Data saya--");
      console.log(
        `Nama Lengkapmu adalah ${nama} yang berumur ${umur} dan saya juga sekolah di ${sekolah}`
      );

      const data = {nama, umur, sekolah};
      const fileDb = fs.readFileSync("./db/data.json", "utf8");
      const dataDiri = JSON.parse(fileDb);

      dataDiri.push(data);
      fs.writeFileSync("./db/data.json", JSON.stringify(dataDiri));
      console.log("terima kasih telah memperkenalkan dirinya");
      rl.close();
    });
  });
});
