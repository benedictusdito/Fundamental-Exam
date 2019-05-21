function fpb_kpk(num1,num2){

    var hasilKpk1 = []
    var hasilKpk2 = []
    for(var i = 1; i<20; i++){
        hasilKpk1.push(num1*i)
    }
    for(var i = 1; i<20; i++){
        hasilKpk2.push(num2*i)
    }

    var sama = []
    for(var i = 0; i<hasilKpk1.length; i++){
        for(var j = 0; j<hasilKpk2.length; j++){
            if(hasilKpk1[i] == hasilKpk2[j]){
                sama.push(hasilKpk1[i])
                
            }
        }
    }
  
    sama = sama[0]
    console.log(`KPK dari ${num1} & ${num2} = ${sama}`)

    var hasilFpb1 = []
    var hasilFpb2 = []

    for(var i = 1; i<=num1 ; i++){
        if(num1 % i == 0){
            hasilFpb1.push(i)
        }
    }
    

    for(var i = 1; i<=num2 ; i++){
        if(num2 % i == 0){
            hasilFpb2.push(i)
        }
    }
    

    var sama1 = []
    for(var i = 0; i<hasilFpb1.length; i++){
        for(var j = 0; j<hasilFpb2.length; j++){
            if(hasilFpb1[i] == hasilFpb2[j]){
                sama1.push(hasilFpb1[i])
                
            }
        }
    }

    sama1 = sama1.slice(-1)
    console.log(`FPB dari ${num1} & ${num2} = ${sama1}`)
}

fpb_kpk(10,25)

// function bilangan(num ){
//     var hasil = []
//     if(num <= 0 || num == 0 || num >= 0){
//         hasil.push("bulat")
//     }
//     if(num < 0){
//         hasil.push("negatif")
//     }
//     if(num >= 0){
//         hasil.push("cacah")
//     }
//     if(num > 0){
//         hasil.push("asli")
//     }
//     if(num = 0){
//         hasil.push("nol")
//     }
//     if(num % 2 !== 0){
//         hasil.push("ganjil")
//     }
//     if(num % 2 == 0){
//         hasil.push("genap")
//     }
//     if(num == 1){
//         // continue
//     } else if(num == 2){
//         hasil.push("prima")
//     } 
//     console.log(hasil)
// }

// bilangan(10)