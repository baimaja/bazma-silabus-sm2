const { elektronikController } = require('./elektronikController');
const { pertanyaanElektronik } = require('./pertanyaanElektronik');
const { validateInput } = require('./validation');

const elektronikList = elektronikController.daftarElektronik();

const tambahElektronik = async () => {
  const nama = await pertanyaanElektronik('Masukkan nama elektronik: ');
  const jenis = await pertanyaanElektronik('Masukkan jenis elektronik: ');

  const elektronik = { nama, jenis };
  elektronikList.push(elektronik);

  console.log('Elektronik berhasil ditambahkan:', elektronik);
  elektronikController.tulisElektronikData(elektronikList);
  menuUtama();
};

const tampilkanDaftarElektronik = () => {
  console.log('Daftar Elektronik:');
  elektronikList.forEach((elektronik, index) => {
    console.log(`${index + 1}. Nama: ${elektronik.nama}, Jenis: ${elektronik.jenis}`);
  });
  menuUtama();
};

const cariElektronik = async () => {
  const namaCari = await pertanyaanElektronik('Masukkan nama elektronik yang dicari: ');
  const hasilCari = elektronikList.filter((elektronik) => elektronik.nama.toLowerCase() === namaCari.toLowerCase());

  if (hasilCari.length > 0) {
    console.log('Hasil Pencarian Elektronik:');
    hasilCari.forEach((elektronik) => {
      console.log(`Nama: ${elektronik.nama}, Jenis: ${elektronik.jenis}`);
    });
  } else {
    console.log('Elektronik tidak ditemukan.');
  }

  menuUtama();
};

const menuUtama = async () => {
  console.log('\nSelamat datang di Aplikasi Tokoh Elektronik!');
  console.log('1. Tambah Elektronik');
  console.log('2. Tampilkan Daftar Elektronik');
  console.log('3. Cari Elektronik');
  console.log('4. Keluar');

  const pilihan = await pertanyaanElektronik('Pilih opsi (1-4): ');

  switch (pilihan) {
    case '1':
      await tambahElektronik();
      break;
    case '2':
      tampilkanDaftarElektronik();
      break;
    case '3':
      await cariElektronik();
      break;
    case '4':
      console.log('Keluar dari Aplikasi Tokoh Elektronik. Sampai jumpa!');
      rl.close();
      break;
    default:
      console.log('Pilihan tidak valid. Silakan masukkan angka antara 1 - 4.');
      menuUtama();
  }
};

menuUtama();
