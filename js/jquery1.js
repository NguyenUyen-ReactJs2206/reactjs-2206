
/*function numbRandom() {
    // tao gia tri nn tu 0-1 : Math.random() - so le - them Math.round la lam tron so
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    var c = Math.round(Math.random() * 10);

    document.getElementById('inputa').value = a;
    document.getElementById('inputb').value = b;
    document.getElementById('inputc').value = c;
}

function reSult() {
    var a = document.getElementById('inputa').value;
    var b = document.getElementById('inputb').value;
    var c = document.getElementById('inputc').value;
    var delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
    }else if (delta == 0) {//kép
        var x = -b / (2 * a);
        x = x.toFixed(2);
        str = "Phương trình có nghiệm kép"+`${x}`;
        document.getElementById('result').innerHTML = str;
    }else {//2nghiem
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        var str = "Phương trình có 2 nghiệm phân biệt là: x1 = " + `${x1.toFixed(2)}` + " và " + 'x2 =' + `${x2.toFixed(2)}`;
        document.getElementById('result').innerHTML = str;
    }
}*/


function numbRandom() {
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    var c = Math.round(Math.random() * 10);

    $("#inputa").val(a);
    $("#inputb").val(b);
    $("#inputc").val(c);
}

function reSult() {
    var a = $('#inputa').val();
    var b = $('#inputb').val();
    var c = $('#inputc').val();
    var delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        $("#result").html("Phương trình vô nghiệm"); 
    }else if (delta == 0) {//kép
        var x = -b / (2 * a);
        x = x.toFixed(2);
        str = "Phương trình có nghiệm kép"+`${x}`;
        $("#result").html(str);
    }else {//2nghiem
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        var str = "Phương trình có 2 nghiệm phân biệt là: x1 = " + `${x1.toFixed(2)}` + " và " + "x2 = " + `${x2.toFixed(2)}`;
        $("#result").html(str);
    }
} 

