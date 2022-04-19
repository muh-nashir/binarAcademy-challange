// Soal 3
// Saya belum faham semua kak :(. Ini aja ngarang kak, masih error :(
// Untuk nilai Chapter 2 ini, saya pasrah standar nilai aja udah Alhamdulillah kak :(

function checkEmail(email) {
    if (email == null) {
      return 'ERROR no parameter'
    }
    if (typeof email !== 'string') {
      return 'ERROR have to String'
    }
    if (!email.includes('@')) {
      return 'Error input email'
    }

    return (regExp).test(email) ? 'VALID' : 'INVALID';
}

  // console.log(checkEmail(binaracademy@gmail.com))
  // console.log(checkEmail(binaracademy@gmail.co.id))
  // console.log(checkEmail(binaracademy))
  