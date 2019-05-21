// var nilai = 5
// var nilai = 5

// console.log(nilai);

// let angka = 10
// angka = 15

// console.log(angka);

// const baku = 2.14
// baku = 2.14

// console.log(baku);

// var nama = " CJJD", umur = 22, pekerjaan = "Wirausaha"
// var teks1 = `Nama saya adalah${nama} umur saya${umur} pekerjaan${pekerjaan} ` 
// console.log(teks1);

// var nama = ['andi','budi','caci']
// var hari = [

// let number = [1,2,3,]
// function jumlah (x,y,z){
// console.log(x+y+z);

// }
// jumlah (number [0],number[1], number[2])
// jumlah(...number)

// function jumlah(a,b =1 ,c=2){
//     return(a+b) * c
// }

// console.log(jumlah(2))
// console.log(jumlah(2,1,1));
// ;

//Arrow function

// function jumlah (a,b=2,c=3){
//     return (a+b)*c
// }
// var hitung = (a,b=2,c=4) => {
//     return (a+b) *c
// }

// let haiii = () => {console.log("hai")}
// let halo = () => console.log("Halo")
// let hai = (nama) => {console.log(`huui ${nama}`)}
// let hei = nama => console.log(`hei ${nama}`);

// const pai =  () => {return 3.14}
// const paipai = () => (3*5) + 144

// haiii(); halo (); console.log(paipai());


// var hitung = (x,y,fn) => {
// return fn(x,y)
// }

// var kali = (a,b){
// return (a*b)
// }

// var

// ;

// var arrNumb = [1,4,9,16,25]

// var hasilMap1 = arrNumb.map(val => val * 2)
// var hasilMap2 = arrNumb.map(val => val > 4)

// console.log(hasilMap1);
// console.log(hasilMap2);

// var jumlah = (x,y) => {
//     hasil = x + y
//     return hasil
// }
// var kali = (a,b) => {
//     set = a*b
// }
// var hasilJumlah = jumlah(4,5)
// jumlah (4,5)
// var kaliHasil = (hasilJumlah,5)
// kali (hasilJumlah,5)
// console.log(`Hasil Jumlah adalah ${hasilJumlah}`)
// console.log(`Hasil kali adalah ${set}`);
;

//Jawaban Map

let dataArr = [2,4,6,8]
let hasilArr = []

let hasilData = dataArr.map(val => val * 4)
console.log(hasilData);

for(i=0;i<dataArr.length;i++){
    hasilArr.push(dataArr[i] * 4)
}
console.log(hasilArr);

let pangkat = [1,2,3] 

    function jumlahHasil (x,y,z) => {
        console.log( x + y + z)
    }


// let number = [1,2,3]

// function jumlah(x, y, z) {
//     console.log(x + y +z);
    
// }

// jumlah(number[0], number[1], number[2])
// jumlah(...number)

// console.log(jumlah);

// var arr = [0,1,2,3,4,5]
// var hasilFilter = arr.filter((val) => {return val >3})
// var hasilGenap = arr.filter((val) => {return val % 2 == 0})
// var hasilGanjil = arr.filter((val) => {return val % 2!=0})


// console.log(hasilFilter);
// console.log(arr);
// console.log(hasilGenap)
// console.log(hasilGanjil);

// var data =[0,1,2,3,4,5]
// var hasilFilter = data.filter((val) => {return val >3}) 
// console.log(hasilFilter);

// var funFilter = (arr,fn) =>{
// var newArr = []

// for (var i = 0; i < arr.length; i++){
//     if(fn(arr[i])){
//         newArr.push(arr[i])
//     }
// }

// return newArr
// }

// var angka = [0,1,2,3,4,5]

// var hasilFun = funFilter(angka,(val) => {return val % 2!==0})
// var hasilJS = angka.filter((val) => {return val % 2!==0})

// console.log(hasilFun)
// console.log(hasilJS);
// ;

// var funMap = (arr,fn) => {
// var newArr = []

// for(var i =0; i < arr.length; i++){
//     newArr.push(fn(arr[i]))
// }

// return newArr
// }

// angka = [1,4,6,16,25]

// var hasilMapJS = angka.map(val => val *2);
// var hasilMapSendiri = funMap(angka, val => val *2)

// console.log(hasilMapJS)
// console.log(hasilMapSendiri);
;

//PROMISE

// var library = new Promise((berhasil,gagal) => {
//     var buku = ['Matematika', 'Fisika']
    
//     if(buku.length == 0){
//         gagal("Produk tidak ada")
//     }
//     else {
//         berhasil("Buku tersedia")
//     }
// })

// library.then((res) => {console.log(res)})
// library.catch((err) => {console.log(err)})

// var andi = {
//     nama: "ANDI",
//     umur: 24,
//     job: "Wirausaha"
// }

// var {nama,umur,job} = andi
// console.log(nama)
// console.log(umur);
// console.log(job);
// ;


















