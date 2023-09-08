// function dengan nama checkTypeNumber dan terdapat 1 variabel yaitu  
const checkTypeNumber = (givenNumber) => {
    // memeriksa apakah  givenNumber tidak ada atau kosong
    if (!givenNumber) { // givenNumber === null || givenNumber === undefined
        // maka fungsi akan mengembalikan nilai 
        return "Error: Bro where is the parameter"
            // memeriksa jenis type data dari givenNumber, jika givenNumber bukan tipe data number
    } else if (typeof givenNumber !== 'number') { //isNaN
        // maka function akan mengembalikan nilai
        return "Error: Invalid data type";
    }
    // jika kedua kondisi diatas tidak terpenuhi maka function akan memeriksa givenNumber
    // jika givenNumber habis dibagi 2
    if (givenNumber % 2 === 0) {
        // maka function akan mengebalikan nilai bahwa givenNumber adalah genap
        return "GENAP";
    }
    // dan jika givenNumber tidak habis dibagi dua maka function akan mengembalikan nilai bahwa givenNumber adalah ganjil
    return "GANJIL";

};
// memanggil fuction checkTypeNumber 
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())