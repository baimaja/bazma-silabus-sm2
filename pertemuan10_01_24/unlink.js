const fs = require('fs');

try {
  // Menghapus file secara sinkronus
  fs.unlinkSync('file.txt');
  console.log('File telah dihapus.');
} catch (err) {
  console.error('Terjadi kesalahan:', err);
}
