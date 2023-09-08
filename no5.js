// data array
const dataPenjualanNovel = [{
        idproduct: 'B00K002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idproduct: 'B00K002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idproduct: 'B00K002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idproduct: 'B00K002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Ardea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
]

// membuat function dengan nama getInfoPenjualan dengan parameter dataPenjualan  
const getInfoPenjualan = (dataPenjualan) => {

        //  memeriksa apakah getInfoPenjualan merupakan sebuah array atau bukan 
        if (!Array.isArray(dataPenjualan)) {
            return "Gunakan parameter yang sesuai.";
        }
        //mendeklarasikan variabel 
        let totalModal = 0;
        let totalKeuntungan = 0;
        let presentaseKeuntungan = 0;
        let terjualTerbanyak = 0;
        let produkTerlaris;
        let penulisTerlaris;
        let hasil = {};

        // menggunakan metode map untuk melakukan iterasi
        dataPenjualan.map((element) => {

                // menghitung total modal
                // operator += untuk menambahkan nilai pada variabel tertentu
                totalModal += element.hargaBeli * (element.totalTerjual + element.sisaStok);

                // menghitung total keuntungan
                // hasil keuntungan = total terjual - total modal
                totalKeuntungan += (element.hargaJual * element.totalTerjual) - (element.hargaBeli * (element.totalTerjual + element.sisaStok))

                // menghitung presentasi keuntungan
                // presentase keuntungan = total keuntungan/total modal*100
                presentaseKeuntungan += (((element.hargaJual * element.totalTerjual) - (element.hargaBeli * (element.totalTerjual + element.sisaStok))) / (element.hargaBeli * (element.totalTerjual + element.sisaStok))) * 100

                //memeriksa apakah total terjual dari produk saat ini lebih besar dari terjualTerbanyak
                // dimana terjualTerbanyak = element.totalTerjual
                //  Jika ya, maka akan memperbarui produkTerlaris, dan penulisTerlaris
                if (element.totalTerjual > terjualTerbanyak) {
                    terjualTerbanyak = element.totalTerjual;
                    produkTerlaris = element.namaProduk;
                    penulisTerlaris = element.penulis;
                }

                // membuat variabel hasil yang didalamnya terdapat hasil perhitungan yang telah dilakukan sebelumnya kedalam sebuah objek yang nantinya akan diretun
                hasil = {
                    //formatRupiah digunakan untuk mengubah nilai totalModal dan totalKeuntungan menjadi format mata uang rupiah 
                    totalModal: formatRupiah(totalModal),
                    totalKeuntungan: formatRupiah(totalKeuntungan),
                    presentaseKeuntungan: `${presentaseKeuntungan.toFixed()}%`, //.toFixed() agar tidak ada koma (dibulatkan)
                    produkTerlaris,
                    penulisTerlaris,
                }
            })
            // mengembalikan nilai hasil yang didalamnya terdapat perhitungan totalModal, totalkeuntungan, presentasekeuntungan, produkTerlaris, dan penulisTerlaris yang dimasukkan kedalam sebuah objek
            // agar dapat dipanggil
        return hasil;
    }
    // membuat function formatRupiah agar output totalModal dan totalKeuntungan ditampilkan dalam format rupiah
const formatRupiah = (angka) => {
    // mengkonversi angka menjadi string
    // menggunakan reguler expression untuk menambahkan titik (ribuan) 
    // \B(?=(\d{3})+(?!\d)) adalah pola/kode reguler expression yang memberikan titik setiap 3 digit dari belakang
    let rupiahFormat = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return `Rp ${rupiahFormat}`;
}


console.log(getInfoPenjualan(dataPenjualanNovel))