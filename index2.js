// var manusia = {namaDpn = "ben", namaBlkng: "Susilo", usia: 22, job: "Artis"}

// var manusia = {
//     namaDpn: "Baron",
//     namaBlkng: "Pirea jarofm",
//     usia: 22,
//     job: "Maling",

//     namaFull: function() {
//         return this.namaDpn + " " + this.namaBlkng

//     },
//     sayHello: function(nama){
//         console.log("Hai " + nama);
        
//     }

// }

// var namaLengkap = manusia.namaFull()
// console.log(namaLengkap)
// manusia.sayHello("Alex");
// manusia.sayHello(manusia.namaFull())

//object literal

// var orang = {namaDpn:"janice", namaBlkng:"Manuella"}

// var warna = new Object()
// warna.pertama = "Red"
// warna.kedua = "Blue"
// warna.ketiga = "Green"

// console.log(warna);


//keyword 'new'

// var manusia = function (nama, umur, job){ //Template
// //     this.namaDpn = nama
// //     this.usia = umur
// //     this.pekerjaan = job
// // }
// // function manusia2 (nama, umur, job){ // Function Declaration
// // this.namaDpn = nama
// // this.usia = umur;
// // this.pekerjaan = job
// // }

// // var satu = new manusia("Andi", 30, "PNS")
// // var satu2 = new manusia2("Aldi" , 20, "Pengusaha")
// // console.log(satu.usia);
// // console.log(satu2["usia"]);

// var objOne = {
//     propOne: "String biasa",
//     propTwo: {
//         subPropOne: 23,
//         subPropTwo: function() {
//             console.log("Sub Property Two ");
            
//         }
//     }


//     propThree: ["Red", "Green","Blue"],
//     propFour: [
//     12,
//     {insideOne: 44, insideTwo: 45}
// ]

// }


// console.log(objOne.propTwo.subPropOne);
// console.log(objOne.propTwo.subPropTwo())
// console.log(objOne.propFour[1].insideTwo);

// function cons2(arr1, arr2, obj1, obj2) {
//     this.nama = [arr1, arr2]
//     this.usia = {obj1, obj2}
// }

// var obj2 = new cons2 ("ren", "blue", 23, 29)
// console.log(obj2);

// var hari = {
//     pertama : " Senin",
//     kedua : " Selasa",
//     ketiga : " Rabu",
//     keempat : " Kamis",
//     kelima: " Jumat",
//     keenam: "Saptu"
// }

// var angka = {
//     satu : " fdf",
//     dua : " Selasa",
//     ketiga : " Rabu",
//     keempat : " Kamis",
//     kelima: " Jumat",
// }

// var namaProp
// for (namaProp in angka) {
//     console.log(namaProp + " : " + angka[namaProp]);
    
// }

// class

// class manusia {
//     constructor(nama, usia, pekerjaan){
//         this.name =nama
//         this.age = usia
//         this.job = pekerjaan
//     }
//     // tempat method (function)
//     sayHello(){
//         console.log(" Hello, I'm " + this.name);
        
//     }
// }

// var manusia1 = new manusia ("Ben", 22, "Driver")
// console.log(manusia1);
// manusia1.sayHello()

// class mahlukHidup {
//     constructor(tmpt, nyawa){ // Tempat membuat Property
//         this.tempatTinggal = tmpt
//         this.bernyawa = nyawa
//     }
//     // tempat method (function)
//     makan(){
//         console.log("Sedang makan");
        
//     }
//     bernafas(){
//         console.log("Sedang bernafas");
        
//     }
// }
// class manusia extends mahlukHidup{
//     constructor(tmpt, nyawa, mind){
//     super(tmpt, nyawa)
//     this.akal = mind
// }

// bekerja () {
//     console.log("Sedang bekerja");
    
// }
// }

// var manusia2 = new manusia ("Bumi" , true , "Punya")
// console.log(manusia2.tempatTinggal);
// console.log(manusia2.bernyawa);
// console.log(manusia2.akal);
// manusia2.makan()
// manusia2. bernafas ()
// manusia2.bekerja ()

//     class hewan extends mahlukHidup {
//     constructor(tmpt, nyawa, anak, telur){
//     super (tmpt, nyawa)
//     this.beranak = anak 
//     this.bertelur = telur
    
// } 
// berburu (){
// console.log("Sedang berburu");

// }
// }
    

// var harimau = new hewan ("hutan", true, true, false)
// console.log(harimau.tempatTinggal);
// console.log(harimau.bernyawa);
// harimau.bernafas()
// harimau.berburu()

// var  bintang = ''
// for(i=0;i<6;i++){
//     bintang += ("*" + "(\n*)")
// }

// console.log(bintang);

// bintang = ''
// var i;
// var i;

//     for (i=1; i<=6;i++){
//         for (j = 1 ; j <= i ; j++){
//             bintang += " * "
//         }

//         bintang += "\n"
        
//     }
    
//     console.log(bintang);
    
// bintang = ""
// var i;
// var j;

// for (i = 1; i <= 6 ; i++){
//     for ( var j = i ; j <= 6 ; j ++){
//         bintang += " * "
//     }
//     bintang += "\n"
// }
   
// console.log(bintang);
// console.log(i);
// console.log(j);

// console.log(bintang);

// var bintang = ""
// var i,j,k,l;

// for (i = 1 ; i <=5 ; i++){
//     for(j=i; j <=5; j++){
//         bintang += ' * '
//     }

//     bintang += "\n"
// }

// for(k = 2; k <=5 ; k++){
//     for(l = 1; l<=k; l++){
//     bintang += " * "
//     }
//     bintang +="\n"
// }


// console.log(bintang);

var bintang = ''
var i,j,k,l

for (var i = 0; i <10; i++){
    for (var j =i; j <10; j ++){
        bintang += '   '
    }
    for (var k = 1; k <i; k++){
        bintang += " * "

    }
    for (var l = 0; l <i; l++){
        bintang += " * "
    }
    bintang += "\n"
}
console.log(bintang);











