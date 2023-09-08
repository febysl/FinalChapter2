// function dengan nama getAngkaTerbesarKedua yang terdapat satu parameter dataNumber
const getAngkaTerbesarKedua = (dataNumber) => {
    // memeriksa apakah datanumber memiliki nilai null atau undefined
    if (dataNumber === null || dataNumber === undefined) {
        return "Error: Gunakan parameter bray";
        // memeriksa apakah dataNumber merupakan sebuah array atau bukan 
    } else if (!Array.isArray(dataNumber)) {
        return "Error: Gunakan parameter yang sesuai.";
    }
    // jika kedua kondisi diatas tidak terpenuhi, maka kode akan melanjutkaneksekusi

    // menggunakan metode set untuk  menghapus elemen-elemen duplikat pada array dataNumber
    // kemudian menggunakan metode sort untuk mengurutkan secara descending(terbesar ke terkecil)
    let antiDuplikat = new Set(dataNumber.sort((function(a, b) { return b - a })));
    // mengembalikan nilai array index ke1 karena yang dicari adalah nilai terbesar kedua
    return Array.from(antiDuplikat)[1];
}

// data array
const dataNumber = [9, 4, 7, 7, 4, 3, 2, 2, 8];

// memanggil function
console.log(getAngkaTerbesarKedua(dataNumber)); // Output: 8
console.log(getAngkaTerbesarKedua(0)); // Output: "Error: Gunakan parameter yang sesuai."
console.log(getAngkaTerbesarKedua()); // Output: "Error: Gunakan parameter bray"