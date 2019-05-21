var menu, totalBelanja, uang
produk =["Ayam", "Ikan","Sapi"]
jumlah = [0,0,0]
harga = [25000,50000,75000]
total = [0,0,0]


do {

    do{
    var check2 = false
    menu = parseInt(prompt(
        "Selamat Datang di Pasar Online : " +
        "\n Daftar Menu adalah : " +
        "\n 1. Ayam = Rp.25.000 " +
        "\n 2. Ikan = Rp.50.000 " +
        "\n 3. Sapi = Rp. 75.000 " +
        "\n Mau Beli yang mana? "
        )) -1

        if(!Number.isInteger(menu)){
        check2 = true
        alert("Mohon masukan angka yang benar")
        } else if (menu > 2 || menu < 0){
        (menu > 2 || menu < 0)
        check2 = true
        alert("Mohon Masukan Data Angka Yang Sesuai")
    }
    
    }while(check2)

jumlah [menu] = jumlah [menu] + parseInt(prompt("Masukan jumlah " + produk[menu] + " yang ingin dibeli " ))
var check = confirm (" Apakah mau belanja lagi? ")
           
}while(check)

total[0] = harga [0] * jumlah [0]
total[1] = harga [1] * jumlah [1]
total[2] = harga [2] * jumlah [2]

totalBelanja = total[0] + total[1] + total [2]

do{
    var check = false
    uang = parseInt(prompt(
    "Total Belanja\n" +
    "Ayam\n" +
    harga[0] + " x " + jumlah[0] + " = Rp." + total[0] +
    "\nIkan\n" +
    harga[1] + " x " + jumlah[1] + " = Rp." + total[1] +
    "\nSapi\n" +
    harga[2] + " x " + jumlah[2] + " = Rp." + total[2] +
    "\n\nTotal yang harus dibayar adalah: " + totalBelanja +
    "\n\nMasukkan jumlah uang Anda: "
    ))

    if(uang < totalBelanja){
        var kurang = uang - totalBelanja
        var check = true
    alert(
        "Jumlah yang anda masukan kurang Rp. " + kurang +
        "\nTotal belanja Anda :  Rp. " +  totalBelanja +
        "\nUang yang anda bayar : Rp. " + uang
    )
    
    }else{
        var kembali = uang - totalBelanja
        alert("Kembali anda adalah Rp." + (kembali))
    }



}while(check)

console.log(
"Data Belanja" +
"\n  " + produk[0] + " x " + jumlah[0] + " = Rp." + total[0] +
"\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
"\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
"\n\n  Total belanja  Rp." + totalBelanja +
"\n  Jumlah uang Rp." + uang +
"\n  Kembali Rp. " + kembali +
"\n  Terimakasih"

);

// var input, menu, check, totalHarga, biaya, check3
// produk = ["Ayam","Ikan","Sapi"]
// harga = [25000,50000,75000]
// jumlah = [0,0,0]
// total = [0,0,0]

// do {
//     do{
//     check2 = false
//     var menu = Number(prompt("Selamat Datang di Pasar Online V2 " + "\n" +
//             "Daftar Menu " + 
//             "\n1. Ayam Rp.25.000 " + 
//             "\n2. Ikan Rp.50.000 " + 
//             "\n3. Sapi Rp. 75.000 "+
//             "\n\n Masukan jumlah Ayam/Ikan/Sapi" )
//             ) - 1

//         if(menu > 2 || menu < 0){
//             check2 = true
//             alert("Mohon Masukan Angka yang benar")
//         }
//         else if(!Number.isInteger(menu)){
//             check2 = true
//             alert("Mohon Masukan angka yang benar")
//         }
        
//     }while(check2)


   
   
//     do{
//     var check3 = false
//     var inputUser = Number(prompt("Masukan jumlah " + produk[menu] + " Yang ingin dibeli")) 
//     //jumlah[menu] = 0 + Number("asd") = 0 + NaN = NaN
//     //jumlah[menu] =  NaN + Number(1) = NaN

//     if(!Number.isInteger(inputUser)){
//     var check3 = true
//     alert("Mohon masukan angka yang benar")
//     }
//     else if(inputUser == 0)
//     {
//         alert('Mohon masukan angka yang benar');
//         check3 = true

//     }


// }while(check3 == true) 

//     jumlah[menu] = jumlah[menu] + inputUser
//     var check = confirm(" Apakah ingin belanja lagi?")
    
// } while (check);

// total [0] = jumlah[0] * harga[0]
// total [1] = jumlah[1] * harga[1]
// total [2] = jumlah[2] * harga[2]

// var totalHarga = total[0] + total[1] + total[2]

// do {
//     var check = false
//     var biaya = Number(prompt(" Total Pesanan adalah: " + "\n" +
//     "\nAyam: " +
//     "\n" + harga[0] + " x " + jumlah[0] + " = " + "Rp. " + total[0] +
//     "\nIkan : " +
//     "\n" + harga[1] + " x " + jumlah[1] + " = " + "Rp. " + total[1] +
//     "\nSapi: " +
//     "\n" + harga[2] + " x " + jumlah[2] + " = " + "Rp. " + total[2] +
//     "\n\nTotal yang harus dibayar adalah: "
//     ))

//     if(biaya < totalHarga){
//         var biayaKurang = totalHarga - biaya
//         var check = true
//          alert("Anda memasukan uang sebesar : " + biaya + 
//         "\nTotal yang harus dibayar adalah: " + totalHarga +
//         "\nJumlah uang yang kurang adalah: " + biayaKurang
//         )
//     }
//     else {
//         var kelebihan = biaya - totalHarga
//         alert("Terimakasih sudah membeli di Pasar Online V2" + "\n" +
//         "Total kembalian Anda adalah = " + kelebihan)
//     }


    
// }while (check);

// console.log(" Data belanja: " +
// "\n\n" + produk[0] + " = " + "Rp. " + harga[0] + " x " + jumlah[0] + " = " + " Rp. " + total[0] +
// "\n\n" + produk[1] + " = " + "Rp. " + harga[1] + " x " + jumlah[1] + " = " + " Rp. " + total[1] +
// "\n\n" + produk[2] + " = " + "Rp. " + harga[2] + " x " + jumlah[2] + " = " + " Rp. " + total[2] +
// "\n\nJumlah total " + " Rp. " + totalHarga + 
// "\nTotal bayar " + " Rp. " + biaya + 
// "\nTotal Kembalian " + "Rp. " + kelebihan
// );

           

    




