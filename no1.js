// langkah pertama membuat sebuah function bernama changeWord dengan 3 parameter selectedText, changedText, text
const changeWord = (selectedText, changedText, text) => {
    //didalam fungtion tetrdapat metode replace untuk mengganti kata yang akan diganti (selectedText) dengan kata penggatinya (changedText) didalam text
    return text.replace(selectedText, changedText);
}

// variabel kalimat awal 
const kalimat1 = "Lala suka menangis";
const kalimat2 = "Wawa suka tertawa";


console.log(changeWord("menangis", "tertawa", kalimat1))
console.log(changeWord("tertawa", "menangis", kalimat2))

// variabel kalimat untuk memanggil fuction changeWord untuk mengganti suatu kata didalam kalimat
// const Kalimat1Terbaru = changeWord("menangis", "tertawa", kalimat1);
// const Kalimat2Terbaru = changeWord("tertawa", "menangis", kalimat2);


// // console.log() digunakan untuk menampilkan hasil dari kalimat terbaru
// console.log(Kalimat1Terbaru); // Output: "Lala suka tertawa"
// console.log(Kalimat2Terbaru); // Output: "Wawa suka menangis"