const fs = require('fs');

try {
  // Membuat direktori secara sinkronus
  fs.mkdirSync('folderBaru');
  console.log('Direktori baru telah dibuat.');
} catch (err) {
  console.error('Terjadi kesalahan:', err);
}
