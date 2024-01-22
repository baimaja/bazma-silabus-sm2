function angkaHari(hari) {
  switch (hari) {
    case 1:
      return "Hari senin";
      break;
    case 2:
      return "Hari selasa";
      break;
    case 3:
      return "Hari rabu";
      break;
    case 4:
      return "Hari kamis";
      break;
    case 5:
      return "Hari jumat";
      break;
    default :
      return "Hari sabtu & minggu Libur";
      break;
  }
}






module.exports = {angkaHari}
angkaHari(3)
