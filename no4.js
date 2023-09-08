// menggunakan map
// data array
const dataPenjualanPakAldi = [{
            namaProduct: 'Sepatu Futsal Nike Vapor academy B',
            hargaSatuan: 760000,
            kategori: "Sepatu Sport",
            totalTerjual: 90,
        },
        {
            namaProduct: 'Sepatu Warrior Tristan Black Brown High',
            hargaSatuan: 960000,
            kategori: "Sepatu Sneaker",
            totalTerjual: 37,
        },
        {
            namaProduct: 'Sepatu Warrior Tristan Maroon High',
            hargaSatuan: 360000,
            kategori: "Sepatu Sneaker",
            totalTerjual: 90,
        },
        {
            namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
            hargaSatuan: 120000,
            kategori: "Sepatu Sneaker",
            totalTerjual: 90,
        }
    ]
    // function dengan nama getTotalPenjualan dimana didalamnya terdapat parameter dataPenjualanPakAldi
const getTotalPenjualan = (dataPenjualan) => {
    // memeriksa apakah dataPenjualanPakAldi merupakan sebuah array atau bukan 
    if (!Array.isArray(dataPenjualan)) {
        return "Error: Gunakan parameter yang sesuai.";

    }
    let jumlahTotal = 0;
    dataPenjualanPakAldi.map((element) => {
        jumlahTotal += element.totalTerjual
    })
    return jumlahTotal;
}

// pemanggilan fungsi
console.log(getTotalPenjualan(dataPenjualanPakAldi))
console.log(getTotalPenjualan(0))

// menggunakan reduce
// // data array
// const dataPenjualanPakAldi = [{
//             namaProduct: 'Sepatu Futsal Nike Vapor academy B',
//             hargaSatuan: 760000,
//             kategori: "Sepatu Sport",
//             totalTerjual: 90,
//         },
//         {
//             namaProduct: 'Sepatu Warrior Tristan Black Brown High',
//             hargaSatuan: 960000,
//             kategori: "Sepatu Sneaker",
//             totalTerjual: 37,
//         },
//         {
//             namaProduct: 'Sepatu Warrior Tristan Maroon High',
//             hargaSatuan: 360000,
//             kategori: "Sepatu Sneaker",
//             totalTerjual: 90,
//         },
//         {
//             namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
//             hargaSatuan: 120000,
//             kategori: "Sepatu Sneaker",
//             totalTerjual: 90,
//         }
//     ]
//     // function dengan nama getTotalPenjualan dimana didalamnya terdapat parameter dataPenjualanPakAldi
// const getTotalPenjualan = (dataPenjualanPakAldi) => {
//     // memeriksa apakah dataPenjualanPakAldi merupakan sebuah array atau bukan 
//     if (!Array.isArray(dataPenjualanPakAldi)) {
//         return "Error: Gunakan parameter yang sesuai.";

//     }
//     // menggunakan metode reduce untuk menghitung jumlah total penjualan produk dari dalam array
//     let jumlahTotal = dataPenjualanPakAldi.reduce((value, element) => {
//         return value + element.totalTerjual
//     }, 0)
//     return jumlahTotal;
// }

// // pemanggilan fungsi
// console.log(getTotalPenjualan(dataPenjualanPakAldi))
// console.log(getTotalPenjualan(0))