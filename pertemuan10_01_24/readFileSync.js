const fs = require('fs');

try {
  // Membaca isi file secara sinkronus
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('Isi file:', data);
} catch (err) {
  console.error('Terjadi kesalahan:', err);
}
