let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'Dev'},  // ALVIN -> alvin (/toLowerCase()) 
    {nama: 'Alicia', umur: 32, job: 'Dev'},
    {nama: 'Alona', umur: 26, job: 'Dev'},
    {nama: 'Batios', umur: 33, job: 'CEO'},
    {nama: 'Bakhti', umur: 38, job: 'PM'},
    {nama: 'Charlee', umur: 27, job: 'CTO'}
];

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

// [tr, tr, tr, tr, tr, tr]
// Merender list data ke tabel
var funShow = () => {
    var listManusia = arrManusia.map((val) => { // val = {name, age,  job}
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    var listJob = arrJob.map(val => { // val = string seperti 'All', 'Dev', 'CEO'
        return `<option value='${val}'>${val}</option>`
    })

    document.getElementById('here').innerHTML = listManusia.join('')
    document.getElementById('kerjaan').innerHTML = listJob.join('')

}

// INPUT DATA
var funInputData = () => {
    var NAMA = document.getElementById('nama').value
    var UMUR = document.getElementById('umur').value
    var JOB = document.getElementById('jobInput').value

    arrManusia.push({
        nama: NAMA,
        umur: UMUR,
        job: JOB
    })

    // Cek apakah job yang di input user sudah ada di array 'arrJob'
    if(arrJob.includes(JOB) == false){
        arrJob.push(JOB)
    }

    funShow()

}

funShow ()
