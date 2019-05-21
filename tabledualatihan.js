var arrManusiaBaru = []
var arrManusia = [
    {nama : "Alex", umur: "22", job:"Dev"},
    {nama : "Alicia", umur: "32", job:"Dev"},
    {nama : "Alona", umur: "25", job:"CEO"},
    {nama : "Batios", umur: "38", job:"PM"},
    {nama : "Bhakti", umur: "25", job:"CTO"},
    {nama : "Charlee", umur: "28", job:"Dev"}
]
var arrPekerjaan = ["Dev","CEO","PM","CTO"]
// Nama Dalam Table Data

var funShow = () => {
    var listManusia = arrManusia.map((val) => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

   document.getElementById("here").innerHTML = listManusia.join("")

   var listPekerjaan = arrPekerjaan.map(val => {
    return `<option>${val}</option>`
})
document.getElementById("kerjaan").innerHTML = listPekerjaan.join("")
    
}

// List Pekerjaan di dalam filter



   

// Input Data masuk ke Table Data
// push ke array manusia

   var fn1 = () => {
    var NAMA = document.getElementById("nama").value
    var UMUR = document.getElementById("umur").value
    var JOB = document.getElementById("jobT").value

    arrManusia.push({
        nama: NAMA,
        umur: UMUR,
        job: JOB

        
    })

console.log(JOB);
console.log(arrPekerjaan.includes(JOB));


// Di check apakah pekerjaan yang ada dan belom.
// Masukan Pekerjaan dari Input Data ke data filter

    if(arrPekerjaan.includes(JOB) == false){
        arrPekerjaan.push(JOB)
    }
    

    funShow()

    }

//Filter Nama

fnNamaFilter = () => {
    var namaFilter = document.getElementById("search").value
    var test = []

     //Mengecilkan setiap nama yang masuk huruf kecil semua agar sama di input user
    for (var i = 0; i< arrManusia.length; i++){
        var name = arrManusia[i].nama.toLowerCase()
        var input = namaFilter.toLowerCase()

        if(name.includes(input)){
            test.push(arrManusia[i])
        }
    }

var list = test.map(val =>{
    return `<tr>
    <td>${val.nama}</td>
    <td>${val.umur}</td>
    <td>${val.job}</td>
    </tr>
    `
})

document.getElementById("here").innerHTML = list.join("")

}

// filter umur
fnUmurFilter = () => {
    var umurFilter = document.getElementById("umur1").value
    var umurFilter2 = document.getElementById("umur2").value

    // Membuat kolom umur jika datanya tidak terisi maka tidak akan muncul ke filter
    //

    if (umurFilter > 0 || umurFilter2 > 0){
        if(umurFilter > 0 && umurFilter2 > 0){
      var umurBaru =  arrManusia.filter(val =>{return val.umur >=umurFilter && val.umur <= umurFilter2})
        
        }
    }
    console.log(umurBaru);

var list1 = umurBaru.map(val =>{
    return `<tr>
    <td>${val.nama}</td>
    <td>${val.umur}</td>
    <td>${val.job}</td>
    </tr>`

})

document.getElementById("here").innerHTML=list1.join("")

}

var fnSearchFilter = () => {
    var inputKerja = document.getElementById("kerjaan").value
    // console.log(input); //misal Dev
    //misal Pembalap

    
    var list = arrManusia.filter(val => {
        return val.job.includes(inputKerja)
        
})

var listbaru = list.map(val => {
    return ` 
    <tr> 
        <td>${val.nama}</td>
        <td>${val.umur}</td> 
        <td>${val.job}</td>
        </tr>`

})

document.getElementById ("here").innerHTML = listbaru.join("")
}





    

    
  















funShow()