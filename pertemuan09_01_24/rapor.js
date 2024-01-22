function nilaiRapor(nilai){
    switch(nilai){
        case 100:
        return "nilai terbaik"
        break;
        case 90:
        return "lumayan baik"
        break;
        case 80:
        return "baik"
        break;
        case 75:
        return "lebih semangat lagi"
        break;
        case 60:
        return "hmmmmm"
        break;
        default:
        break;
                            

    }
}
module.exports = {nilaiRapor}