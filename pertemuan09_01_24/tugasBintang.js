function bintangPersegiPanjang(panjang, lebar){
    for(let i = 0; i < panjang; i++){
      let baris = '';
    }
    for(let j = 0; j < lebar; j++){
        baris +="*";
    }
    console.log(baris)
}

module.exports = {bintangPersegiPanjang}
bintangPersegiPanjang(2,4)