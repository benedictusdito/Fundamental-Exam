let arrManusia =[

    {nama: 'Alex', umur: 22, job: 'Dev', kelamin: 'Wanita'},
    {nama: 'Charlee', umur: 27, job: 'CTO', kelamin: 'Pria'},
    {nama: 'Alicia', umur: 32, job: 'Dev', kelamin: 'Wanita'},
    {nama: 'Batios', umur: 33, job: 'CEO', kelamin:'Pria'},
    {nama: 'Alona', umur: 26, job: 'Dev', kelamin: 'Wanita'},
    {nama: 'Bhakti', umur: 38, job: 'PM', kelamin: 'Pria'}
    ]; // semua ini adalah array yang memiliki objek yaitu (nama,umur,job)
    
    let arrJob = ["All","Dev","CEO","PM","CTO"];
    
    // Mempunyai (6<tr>)
    var funShow = () => {
        var listManusia = arrManusia.map((val) => { // array .map Function yang masuk ke.map tidak harus menghasilkan TRUE/FALSE
                                // Dalam val ada = {nama,age,job,kelamin}
            return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.kelamin}</td>
            </tr>`
    
        });

        console.log(listManusia);
        
    
    
        var listJob = arrJob.map(val => { // yang masuk kedalam val adalah string biasa, seperti 'all','dev','ceo'
            return`<option>${val}</option>`

       
    
    
        })


    
    document.getElementById("here").innerHTML=listManusia.join("")
    document.getElementById("kerjaan").innerHTML=listJob.join("")
    
    
    }
    
    
    var fn1 = () => {
        var NAMA = document.getElementById("nama").value;
        var UMUR = document.getElementById("umur").value;
        var JOB = document.getElementById("jobT").value;
        


        NAMA = NAMA.charAt(0).toUpperCase() + NAMA.slice(1).toLocaleLowerCase()
    
    if (JOB.length <= 3) {
        JOB = JOB.toUpperCase()
    }
    else {
        JOB = JOB.charAt(0).toUpperCase() + JOB.slice(1).toLowerCase()
    }    
    
    arrManusia.push({ //PUSH INI BERADA DI DALAM funInputData, 
        nama: NAMA, 
        umur: UMUR,
        job: JOB,
    
    }) // Apa yang mau di push? yaitu sebuah objek
    
    // console.log(JOB);
    // console.log(arrJob.includes(JOB));
    
    if(arrJob.includes(JOB)==false){
        arrJob.push(JOB) // Menambahkan pekerjaan yang belom ada
                        // includes digunakan untuk menghasilkan True/False yang dimana jika false akan ditambahkan ke pekerjaan baru.
    }
    // console.log(arrManusia);
    // console.log(KELAMIN);
    
    
    funShow()
    
    }
    
    // Filter Name
    
    fnNamaFilter = () => {
        var filter = document.getElementById("search").value
        var test = []
        var list = ""
    
        for (var i =0; i <arrManusia.length;i++){
            var name = arrManusia[i].nama.toLocaleLowerCase(); // Mengecilkan huruf dalam array 'arrManusia.nama'
            var input = filter.toLocaleLowerCase() // mengecilkan huruf yang ada didalam variable filter
    
    // Hasil pengecheckan hasilnya adalah True or False
    // Apakah name mengandung huruf yang ada di input user
    
            if(name.includes(input)){ // Menghasilkan True of False
                test.push(arrManusia[i])
            }
    
        
    }
    
     list = test.map(val => { // dari array of object menjadi <tr>
           return `<tr>
           <td>${val.nama}</td>
           <td>${val.umur}</td>
           <td>${val.job}</td>
           <td>${val.kelamin}</td>
           </tr>`
       })
    
    document.getElementById("here").innerHTML=list.join("")
    
    }
    
    // Filter Umur
    
    fnUmurFilter = () => {
        var num1 = document.getElementById("num1").value
        var num2 = document.getElementById("num2").value
    
        if(!(num1 ==''||num2 =='')){   // True or False untuk memfilter umur. 
        //'!' dibuat untuk menghasilkan data false, agar jika kolom tidak terisi maka tidak akan muncul filternya.
        // Tetapi akan true jika dua kolom dalam filter tersisi dan menghasilkan data filter dibawah.
             
            var list = arrManusia.filter(val => {
                return (val.umur >= num1 && val.umur <=num2)
            })
    
       
    
           list = list.map(val => {
               return `
               <tr> 
               <td>${val.nama}</td>
               <td>${val.umur}</td> 
               <td> ${val.job}</td>
               <td>${val.kelamin}</td>
               </tr>
               `
           })
        
    
        }
    
        else {
            funShow ()
        }
    
    
       document.getElementById("here").innerHTML=list.join("")
    }
    
    // Fiter Pekerjaan
    
    funFilterJob = () => {
    // var selectedJob = document.getElementsByName("job").value
    //     // Mengambil data pada Menu Dropdown yang ada pada filter pekerjaan
    //    var list =  arrManusia.filter = (val => {
    //         return (val.job.includes(selectedJob))
                
                
    //     })
    
    //     list = list.map (val => {
    //         return`
    //         <tr> 
    //         <td>${val.nama}</td>
    //         <td>${val.umur}</td> 
    //         <td>${val.job}</td>
    //         <td>${val.kelamin}</td>
    //         </tr>
    //         `
    //     })
    
    //     document.getElementById("here").innerHTML= list

    var jobFilter = document.getElementById('jobT').value;

    if ( jobFilter == 'All' ) {
        funshow();
    } else {
        var kerjaBaru = arrManusia.filter( val => {
        return ( val.job.includes(kerjaBaru) )})
        
        var list = kerjaBaru.map( val => {
            return `<tr>
                <td>${val.nama}</td>
                <td>${val.umur}</td>
                <td>${val.job}</td>
                <td>${val.kelamin}</td>
            </tr>
            `
        })
        document.getElementById('here').innerHTML = list.join('');
    }
    }
    
// filter Gender

var filterKelamin = () => {
    var kelamin = document.getElementsByName("kelamin")
    console.log(kelamin);

    for(var i = 0; i < kelamin.length; i++){
        if(kelamin[i].checked === true){
            kelamin = kelamin[i].value
        }
    }
    console.log(kelamin);  // Mendapatkan value kelaminnya.

    var filterKelamin = arrManusia.filter( val => {
        return (val.kelamin.includes(kelamin))
    })
    console.log(filterKelamin);
    var list = filterKelamin.map( val => {
        return `<tr>
                <td>${val.nama}</td>
                <td>${val.umur}</td>
                <td>${val.job}</td>
                <td>${val.kelamin}</td>
            </tr>
            `
    })
    document.getElementById('here').innerHTML = list.join('');
    
    
}

var filSex = () => {
    var selectedSex = document.getElementsByName("kelamin");
  
    for (var i = 0; i < selectedSex.length; i++) {
      if (selectedSex[i].checked == true) {
        selectedSex = selectedSex[i].value;
      }
    }
  
    var list = arrManusia.filter(val => {
      return val.kelamin.includes(selectedSex);
    });
  
    list = list.map(val => {
      return `<tr>
      <td>${val.nama}</td>
      <td>${val.umur}</td>
      <td>${val.job}</td>
      <td>${val.kelamin}</td>
      </tr>
      `;
    });
    document.getElementById("here").innerHTML = list.join("");
  };

// Mensorting Data yang ada

function namaAscending() {
    console.log('masuk');
    var namaAscending = arrayData.sort(function(a,b) {
        var namaA = a.nama
        var namaB = b.nama

        var comparison = 0;
        if (namaA > namaB) {
            comparison = 1;
        }
        else if (namaA < namaB) {
            comparison = -1;
        }
        return comparison
    })

    funShow(namaAscending);
}

function namaDescending() {
    console.log('masuk');
    var namaDescending = arrayData.sort(function(a,b) {
        var namaA = a.nama
        var namaB = b.nama

        var comparison = 0;
        if (namaB > namaA) {
            comparison = 1;
        }
        else if (namaB < namaA) {
            comparison = -1;
        }
        return comparison
    })

    funShow(namaDescending);
}

function usiaAscending() {
    console.log('masuk');
    var usiaAscending = arrayData.sort(function(a,b) {
        var umurA = a.umur
        var umurB = b.umur

        var comparison = 0;
        if (umurA > umurB) {
            comparison = 1;
        }
        else if (umurA < umurB) {
            comparison = -1;
        }
        return comparison
    })

    funShow(usiaAscending);
}

function usiaDescending() {
    var usiaDescending = arrayData.sort(function(a,b) {
        var umurA = a.umur
        var umurB = b.umur

        var comparison = 0;
        if (umurB > umurA) {
            comparison = 1;
        }
        else if (umurB < umurA) {
            comparison = -1;
        }
        return comparison
    })

    funShow(usiaDescending);
}


function kelaminAscending() {
    console.log('masuk');
    var kelaminAscending = arrayData.sort(function(a,b) {
        var a = a.kelamin
        var b = b.kelamin

        var comparison = 0;
        if (a > b) {
            comparison = 1;
        }
        else if (a < b) {
            comparison = -1;
        }
        return comparison
    })

    funShow(kelaminAscending);
}

function pekerjaanAscending() {
    console.log('masuk');
    var pekerjaanAscending = arrayData.sort(function(a,b) {
        var a = a.pekerjaan
        var b = b.pekerjaan

        var comparison = 0;
        if (a > b) {
            comparison = 1;
        }
        else if (a < b) {
            comparison = -1;
        }
        return comparison
    })

    funShow(kelaminAscending`);
}


funShow();