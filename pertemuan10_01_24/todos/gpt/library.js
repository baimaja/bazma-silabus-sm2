const generateRandomId = require("./generateRandomId");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const direktori = "./perpustakaan";
if (!fs.existsSync(direktori)) {
  fs.mkdirSync(direktori);
}

const cekFile = "./perpustakaan/buku.json";
if (!fs.existsSync(cekFile)) {
  fs.writeFileSync(cekFile, "[]", "utf-8");
}

const pertanyaanBuku = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const daftarBuku = () => {
  const fileBuku = fs.readFileSync(cekFile);
  const data = JSON.parse(fileBuku);
  console.log("Daftar Buku Perpustakaan:");
  console.log(data);
};

const tambahBuku = (judul, pengarang, genre) => {
  const id = generateRandomId(10);
  const buku = { id, judul, pengarang, genre };
  const file = fs.readFileSync(cekFile, "utf-8");

  const dataBuku = JSON.parse(file);
  dataBuku.push(buku);
  fs.writeFileSync(cekFile, JSON.stringify(dataBuku));
  console.log(`Buku "${judul}" telah ditambahkan ke dalam perpustakaan.`);
};

const getDapatkanBukuById = (id) => {
  const file = fs.readFileSync(cekFile, "utf-8");
  const data = JSON.parse(file);
  const bukuDitemukan = data.find((buku) => buku.id === id);

  if (bukuDitemukan) {
    console.log("Buku Ditemukan:");
    console.log(bukuDitemukan);
  } else {
    console.log(`Buku dengan ID ${id} tidak ditemukan.`);
  }
};

const perbaruiBukuById = (id, bukuDiperbarui) => {
  const file = fs.readFileSync(cekFile, "utf-8");
  const data = JSON.parse(file);
  const indeks = data.findIndex((buku) => buku.id === id);

  if (indeks !== -1) {
    data[indeks] = { ...data[indeks], ...bukuDiperbarui };
    fs.writeFileSync(cekFile, JSON.stringify(data));
    console.log(`Buku dengan ID ${id} telah diperbarui.`);
  } else {
    console.log(`Buku dengan ID ${id} tidak ditemukan.`);
  }
};

const hapusBukuById = (id) => {
  const file = fs.readFileSync(cekFile, "utf-8");
  let data = JSON.parse(file);
  const panjangAwal = data.length;

  data = data.filter((buku) => buku.id !== id);

  if (data.length < panjangAwal) {
    fs.writeFileSync(cekFile, JSON.stringify(data));
    console.log(`Buku dengan ID ${id} telah dihapus.`);
  } else {
    console.log(`Buku dengan ID ${id} tidak ditemukan.`);
  }
};

module.exports = {
  pertanyaanBuku,
  daftarBuku,
  tambahBuku,
  getDapatkanBukuById,
  perbaruiBukuById,
  hapusBukuById,
};
