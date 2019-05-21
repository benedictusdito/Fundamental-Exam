var lihat = () => {
    


    var macam = document.getElementById('jenisBangunan').value
    var bentuk = document.getElementById('ukuran').value

    if ( jenisBangunan == 1 ) {
        var bintang = '';

        for ( var i = 1 ; i <= bentuk ; i++) {
            for (var j = 1; j <= bentuk; j++) {
                bintang = bintang + ' * '
            }
            bintang = bintang + '<br>'    
        }
    }

    if ( macam == 2 ) {
    
        var bintang = '';
        for (var i = 1 ; i <= bentuk ; i ++) {
            for ( var l = 1 ; l <= i  ; l++) {
                bintang = bintang + ' * '
            }
            bintang = bintang + '<br>'
        }


    } 

    if ( macam == 3 ) {
        // 3. Segitiga Siku2 Rata kanan

        var bintang = '';
        for (var i = 1 ; i <= bentuk ; i ++) {
            for ( var j = i; j <= bentuk ; j++ ) {
                bintang = bintang + '&nbsp&nbsp&nbsp';
                
            }
            for ( var k = 1 ; k <= i  ; k++) {
                bintang = bintang + ' * '
            }
            bintang = bintang + '<br>'
        }
     
    }

    document.getElementById('here').innerHTML = bintang;


}
