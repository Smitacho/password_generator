function generate() {

    //num password
    var min = 100;
    var max = 999;
    document.getElementById('mess').innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;

    //alphabet
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var lenString = 4;
    var randomstring = '';
    for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
    }
    var al = document.getElementById('alpha');
    al.innerHTML = randomstring;


    //num password
    var low = 100;
    var high = 999;
    document.getElementById('pass').innerHTML = Math.floor(Math.random() * (high - low + 1)) + low;
}