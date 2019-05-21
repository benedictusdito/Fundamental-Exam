var arrInput = []

// Membuat arrayManusia selalu muncul ketika di refresh

arrInput [0] = {nama: 'Alex', umur: 22, job: 'Dev'},
arrInput [1] = {nama: 'Alicia', umur: 32, job: 'Dev'},
arrInput [2] = {nama: 'Alona', umur: 26, job: 'Dev'},
arrInput [3] = {nama: 'Batios', umur: 33, job: 'CEO'},
arrInput [4] = {nama: 'Bakhti', umur: 38, job: 'PM'},
arrInput [5] = {nama: 'Charlee', umur: 27, job: 'CTO'}

var listsatu = ""
for (var i =0; i<arrInput.length;i++){
    listsatu += `
    <tr>
    <td> ${arrInput[i].nama}</td>
    <td> ${arrInput[i].umur}</td>
    <td> ${arrInput[i].job}</td>
    </tr>`
}
// console.log(listsatu);


document.getElementById("here").innerHTML=listsatu

// Memuncul arrJob di print html
var arrJob = ["All","Dev","CEO","PM","CTO"]
var pekerjaanAwal
        for(var i = 0; i<arrJob.length;i++){
         pekerjaanAwal +=`
         <option value = ${arrJob[i]}> ${arrJob[i]} </option>
        `
    }

var jobBaru =
    if(i=0;i<arrJob.length;i++){
        
    }
document.getElementById("kerjaan").innerHTML= pekerjaanAwal



// // Setiap ada input data (job), cek arrayJob, kalau sudah ada, lanjut proses selanjutnya
// // kalau  belum ada di arrayJob , tambahkan ke arrayJob (arrJob.push(job))
// Menambahkan ke arrayJob jika inputan belom ada
// memakai -.push
// memasukan inputan ke array job
// memakai for loop
// Mengecheck data yang ada di array pekerjaan







// // FILTER NAME
// Membuat nama yang di input menjadi kecil memakai toLowerCase()
// Membuat setiap array itu menjadi string dan memakai true/false memakai includes
// mengambil nama di arrInput


var fnNamaFilter = () => {
    var namaFilter = document.getElementById("search").value.toLowerCase()
    var listtiga = ""
    

for(var i = 0; i<arrInput.length;i++){
    if(arrInput[i].nama.toLowerCase().includes(namaFilter) == true) {
      
        listtiga +=`
        <tr>
        <td> ${arrInput[i].nama}</td>
        <td> ${arrInput[i].umur}</td>
        <td> ${arrInput[i].job}</td>
        </tr>
         `
    }
 
    document.getElementById("here").innerHTML = listtiga
}

    

// // FILTER AGE
    
// // FILTER JOB
//OnClick


}
var fnUmurFilter = () => {
    var umurFilter1 = document.getElementById ("num1").value
    var umurFilter2 = document.getElementById ("num2").value
    console.log(umurFilter1)
    console.log(umurFilter2)
}
var fnSearchFilter = () => {
    var pekerjaan = document.getElementsByName("job")[0].value
    console.log(pekerjaan);
}

var fn1 = () => {
    var nama = document.getElementById("nama").value
    var umur = parseInt(document.getElementById("umur").value)
    var job = document.getElementById("jobT").value

    arrInput.push ({
        nama,
        umur,
        job
    })
// console.log(arrInput);
show(arrInput)
}

var show = (arrei) => {
    var list = ''

    for (var i = 0; i <arrei.length;i++){
        list += `
        <tr>
            <td> ${arrei[i].nama}</td>
            <td> ${arrei[i].umur}</td>
            <td> ${arrei[i].job}</td>
        </tr>`
    }
    document.getElementById("here").innerHTML = list

}


funshow()
   


