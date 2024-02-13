-- Tabel Produk
CREATE TABLE produk (
    id_produk INT PRIMARY KEY AUTO_INCREMENT,
    nama_produk VARCHAR(255) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT NOT NULL
);

-- Tabel Pembeli
CREATE TABLE pembeli (
    id_pembeli INT PRIMARY KEY AUTO_INCREMENT,
    nama_pembeli VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL
);

-- Tabel Pesanan
CREATE TABLE pesanan (
    id_pesanan INT PRIMARY KEY AUTO_INCREMENT,
    id_produk INT,
    id_pembeli INT,
    jumlah_produk INT NOT NULL,
    tanggal_pesan DATE NOT NULL,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk),
    FOREIGN KEY (id_pembeli) REFERENCES pembeli(id_pembeli)
);

-- Tabel Transaksi
CREATE TABLE transaksi (
    id_transaksi INT PRIMARY KEY AUTO_INCREMENT,
    id_pesanan INT,
    total_harga DECIMAL(10, 2) NOT NULL,
    metode_pembayaran VARCHAR(50) NOT NULL,
    tanggal_transaksi DATE NOT NULL,
    FOREIGN KEY (id_pesanan) REFERENCES pesanan(id_pesanan)
);

-- Tabel Inventaris
CREATE TABLE inventaris (
    id_produk INT PRIMARY KEY,
    stok INT NOT NULL,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);
