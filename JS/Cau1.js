function taosongaunhien() {
    value1 = parseInt(document.getElementsByName("giatri")[0].value);
    a = parseInt(Math.random() * (value1) + 1);
    document.getElementsByName("kq")[0].value = a;

}
function taodayngaunhien() {
    document.getElementsByName("kq")[0].value = '';
    a = parseInt(document.getElementsByName("giatri")[0].value);

    var b = new Array(a);
    var c = '';
    var m = '';
    var n = '';
    var tam = '';
    for (var i = 0; i < b.length; i++) {
        b[i] = i + 1;
    }
    for (var j = 0; j < b.length; j++) {
        m = parseInt(Math.random() * (a));
        n = parseInt(Math.random() * (a));
        tam = b[m];
        b[m] = b[n];
        b[n] = tam;
    }
    for (var k = 0; k < b.length; k++) {
        if (k == b.length - 1) {
            c += b[k] ;

        }
        else {
            c += b[k] + ',';
        }
        
    }
    
    document.getElementsByName("kq")[0].value += c;
} function xoso() {
    for (var i = 1; i <= 300; i++) {
        setTimeout(taosongaunhien, 50 * i);
    }
}

function xoso1() {
    for (var i = 1; i <= 300; i++) {
        setTimeout(taodayngaunhien, 50 * i);
    }
}