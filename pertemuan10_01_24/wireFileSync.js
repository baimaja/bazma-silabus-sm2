const fs = require('fs');

try {
  // Menulis ke file secara sinkronus
  fs.writeFileSync('file.txt', 'Ini adalah tulisan ke dalam file.');
  console.log('File telah ditulis.');
} catch (err) {
  console.error('Terjadi kesalahan:', err);
}
