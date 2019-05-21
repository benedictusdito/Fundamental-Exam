var hariawal = Number(prompt("Masukan Angka Hari: "))

var tahun = Math.floor (hariawal / 360)
hari = hariawal % 360
var bulan = Math.floor(hariawal % 360);
hari = hari % 30
var minggu = Math.floor(hari / 7)
hari = hari % 7

console.log("Jumlah Hari ada: " + hari);
console.log("Ada Berapa Tahun? " + tahun);
console.log(" Ada Berapa Bulan? " + bulan);
console.log("Ada berpa mingg? " + minggu);
console.log(" berapa hari? " + hari);




