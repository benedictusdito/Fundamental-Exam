var arrManusia =[], arrHewan = []

var myFunction = () => {
    var namaMan = document.getElementById("name").value
    var umurMan = document.getElementById("age").value
    var kelaminManusia = document.getElementsByName("kelamin")
    var job = document.getElementsByName("pekerjaan")[0].value
    var kelaminValue = ''

    for(var i = 0 ; i<kelaminManusia.length;i++){
        if(kelaminManusia[i].checked == true){
            kelaminValue = kelaminManusia[i].value
        }
    }


arrManusia.push({
    name: namaMan,
    age: umurMan,
    kelamin: kelaminValue,
    pekerjaan : job
})


    console.log(`Name: ${namaMan}
    Umur: ${age}
    Kelamin: ${kelaminValue}
    Pekerjaan: ${job}`);

    // console.log(kelaminManusiaValue);   
    
// var table = document.getElementById("manusia")
// var row = table.insertRow(0)
// var cell1 = row.insertCell(0)
// var cell2 = row.insertCell(1)
// var cell3 =row.insertCell(2)
// var cell4 = row.insertCell(3)

// var output = cell

show(arrManusia, "mans")

}
var show = (arrei, target) => {
    var list = ""

    for(var i = 0;i<arrei.length;i++){
        list += `
        <tr>
            <td> ${arrei[i].name}</td>
            <td> ${arrei[i].age}</td>
            <td> ${arrei[i].kelamin}</td>
            <td> ${arrei[i].pekerjaan}</td>
        </tr>`
    }
document.getElementById(`${target}`).innerHTML = list

}



var myFunction2 = () => {
var namaHewan = document.getElementById("name1").value
var umurHewan = document.getElementById("age1").value
var kelaminHewan = document.getElementsByName("kelamin1")
var kelaminHewanBaru = ''
    for(var i = 0; i<kelaminHewan.length;i++){
        if(kelaminHewan[i].checked == true){
            kelaminHewanBaru = kelaminHewan[i].value
        }
    }
var status = document.getElementsByName("habitat")
var statusHewan = ''
for(var i = 0; i<status.length;i++){
    if(status[i].checked == true){
        statusHewan = status[i].value
    }
}


console.log(`Name: ${namaHewan}
    Umur: ${umurHewan}
    Kelamin: ${kelaminHewanBaru}
    Habitat: ${statusHewan}`);

arrHewan.push({
    name,age,kelamin,
})

show(arrHewan,"hews")
}