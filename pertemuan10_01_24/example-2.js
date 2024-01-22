const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const direktory = "./db";
if (!fs.existsSync(direktory)) {
  fs.mkdirSync(direktory);
}

const checkFile = "./db/data.json";
if (!fs.existsSync(checkFile)) {
  fs.writeFileSync(checkFile, [], "utf8");
}

const questionExample = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const addData = async () => {
  const nama = await questionExample("masukan nama anda : ");
  const umur = await questionExample("masukkan umur saat ini : ");
  const hobi = await questionExample("masukkan 1 hobi : ");

  const data = { nama, umur, hobi };
  const fileDb = fs.readFileSync("./db/data.json", "utf-8");
  const dataDiri = JSON.parse(fileDb);

  dataDiri.push(data);
  fs.writeFileSync("./db/data.json", JSON.stringify(dataDiri));
  console.log("terima kasih telah memperkenalkan dirinya");
  rl.close();
};
addData();