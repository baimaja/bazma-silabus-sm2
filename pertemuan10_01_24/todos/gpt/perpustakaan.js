const {perpustakaan, pertanyaanBuku} = require("./library");

const menuUtama = async () => {
  console.log("Selamat datang di Aplikasi Perpustakaan!");



  while (true) {
    console.log("1. Daftar Buku");
    console.log("2. Tambah Buku");
    console.log("3. Dapatkan Buku berdasarkan ID");
    console.log("4. Perbarui Buku berdasarkan ID");
    console.log("5. Hapus Buku berdasarkan ID");
    console.log("6. Keluar");

    const pilihan = await perpustakaan.pertanyaanBuku("Pilih opsi (1-6): ");

    switch (pilihan) {
      case "1":
        perpustakaan.daftarBuku();
        break;
      case "2":
        await menuTambahBuku();
        break;
      case "3":
        await menuDapatkanBukuById();
        break;
      case "4":
        await menuPerbaruiBukuById();
        break;
      case "5":
        await menuHapusBukuById();
        break;
      case "6":
        console.log("Keluar dari Aplikasi Perpustakaan. Selamat tinggal!");
        process.exit(0);
      default:
        console.log("Pilihan tidak valid. Silakan masukkan angka antara 1 - 6.");
    }
  }
};

const menuTambahBuku = async () => {
  const judul = await perpustakaan.pertanyaanBuku("Masukkan judul buku: ");
  const pengarang = await perpustakaan.pertanyaanBuku("Masukkan nama pengarang: ");
  const genre = await perpustakaan.pertanyaanBuku("Masukkan genre buku: ");

  perpustakaan.tambahBuku(judul, pengarang, genre);
};

const menuDapatkanBukuById = async () => {
  const id = await perpustakaan.pertanyaanBuku("Masukkan ID buku: ");
  perpustakaan.getDapatkanBukuById(id);
};

const menuPerbaruiBukuById = async () => {
  const id = await perpustakaan.pertanyaanBuku("Masukkan ID buku yang ingin diperbarui: ");
  const judul = await perpustakaan.pertanyaanBuku("Masukkan judul baru (tekan Enter untuk tetap menggunakan judul yang ada): ");
  const pengarang = await perpustakaan.pertanyaanBuku("Masukkan pengarang baru (tekan Enter untuk tetap menggunakan pengarang yang ada): ");
  const genre = await perpustakaan.pertanyaanBuku("Masukkan genre baru (tekan Enter untuk tetap menggunakan genre yang ada): ");

  const bukuDiperbarui = {};
  if (judul.trim() !== "") bukuDiperbarui.judul = judul;
  if (pengarang.trim() !== "") bukuDiperbarui.pengarang = pengarang;
  if (genre.trim() !== "") bukuDiperbarui.genre = genre;

  perpustakaan.perbaruiBukuById(id, bukuDiperbarui);
};

const menuHapusBukuById = async () => {
  const id = await perpustakaan.pertanyaanBuku("Masukkan ID buku yang ingin dihapus: ");
  perpustakaan.hapusBukuById(id);
};

menuUtama();