//Menampung angka
//Looping sebanyak 5 kali
//Data angka disimpan di array dulu 
// setelah disimpan baru diurutin dari kecil kebesar


// var arrAngka = [];


// do {

//     var input = parseFloat(prompt('Masukkan angka'));
//     var check = true;
//     arrAngka.push(input);

//     if ( isNaN(input) ) {
//         check = false;
//     }

// }
// while (check == true)
// arrAngka.splice(arrAngka.length-1, 1);


// function minimal(arr) {
//     return arr.reduce(function (a, b) {
//       return ( a < b ? a : b );
//     });
//   }
  
// function maximal(arr) {
//     return arr.reduce(function (a, b) {
//         return ( a > b ? a : b );
//     });
// }

//   console.log(`Nilai tertinggi: ${minimal(arrAngka)}`);
//   console.log(`Nilai terendah: ${maximal(arrAngka)}`);
    

  var arrayAngka = [];


  do {
  
      var inputAngka = parseFloat(prompt('Masukkan angka'));
      var check = true;
      arrayAngka.push(inputAngka);
  
      if ( isNaN(inputAngka) ) {
          check = false;
      }
  
  }
  while (check == true)
  arrayAngka.splice(arrayAngka.length-1, 1);
  console.log(arrayAngka);    
  

  function arrayMin(arr) {
      return arr.reduce(function (a, b) {
        return ( a < b ? a : b );
      });
    }
    
  function arrayMax(arr) {
      return arr.reduce(function (a, b) {
          return ( a > b ? a : b );
      });
  }
  
    console.log(`Nilai tertinggi: ${arrayMax(arrayAngka)}`);
  console.log(`Nilai terendah: ${arrayMin(arrayAngka)}`);
  
 