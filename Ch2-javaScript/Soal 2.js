// Soal 2
// Saya belum faham semua kak :(. Ini aja ngarang kak, masih error :(
// Saya Pasrah kak :( Insya Allah diperdalam lagi buay materi dan practice-nya kak :(

/*
    membuat knstan result
    menggunakan moduls % 2, karena untuk menentukan genap ganjil, nilai harus tidak dapat dibagi 2
    kemudian pakai fungsi if... else.. untuk menenentukan
    me return, dan di console..
*/

function checkTypeNumber(givenNumber) {
     //VALIDASI DATA
    const checkTypeNumber = givenNumber => {
     if (givenNumber == null ) {
          return 'Error'
     }
     if ( typeof givenNumber !== 'number' ) {
          return 'Invalid'
     }

     // PROSES
     return givenNumber % 2 ? 'GANJIL' : 'GENAP'
    }
  }
  
    console.log(checkTypeNumber(20)); // Genap
    console.log(checkTypeNumber(5)); //Ganjil
    console.log(checkTypeNumber(""))