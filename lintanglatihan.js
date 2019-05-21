// Soal Latighan No.1

function kpk_fpb (num1,num2){
  var hasilKpk1 = []
  var hasilKpk2 = []
  for ( var i = 0; i < 20;i++){
    hasilKpk1.push(num1 *i)
  }
  for ( var i = 0; i < 20; i++){
    hasilKpk2.push(num2 *i)
  }

  var sama = []
  for (var i = 0; i < hasilKpk1.length; i++){
    for (var j = 0; j <hasilKpk2.length; j++){
      sama.push(hasilKpk1[i])
    }
  }
  console.log(sama);
  
}
kpk_fpb(2,3)

// Soal Latihan No.2
// Menentukan x bilangan apa saja
// Menentukan suatu bilangan tergolong bilangan apa saja


function bilangan (num){
  var angka = []
  if (num <=0 || num ==0 || num >=0){
    angka.push("bulat")
  }
  if (num >= 0){
    angka.push("cacah")
  }
  if (num < 0){
    angka.push("negatif")
  }
  if (num == 0){
    angka.push("nol")
  }
  if (num > 0 ){
    angka.push("asli")
  }
  if(num % 2 !== 0){
    angka.push("ganjil")
}
if(num % 2 == 0){
    angka.push("genap")
}
  if(num == 1){
    // continue
} else if(num == 2){
    angka.push("prima")
} 
  console.log(angka);
  
}

bilangan(10)












console.log(bilangan(13));



