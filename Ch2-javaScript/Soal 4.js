// Maaf aku belum paham semua kak :( Susah bgt kak :( 

    function isValidPassword (givenPassword) {
        //VALIDASI
        if (givenPassword == null) {
            return 'Error input Argument'
        }
        if (typeof givenPassword !== 'string') {
            return 'Error input string argumen'
        }
    
        //PROSES
         return (regExp).test(givenPassword);
    }
    
    console.log(isValidPassword('Meong124'));
    console.log(isValidPassword('meong124'));
    console.log(isValidPassword('@meong124'));
    