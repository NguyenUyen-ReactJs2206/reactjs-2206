// Day cac so chan
function number1() {
    var text = '';
    for (let i = 0; i <= 10 && i % 2 == 0; i++) {
        text += i++ + "<br>";
    }
    document.getElementById("sochan").innerHTML = "Ket qua la " + text;
}

// Day cac so nguyen to
function check_snt(n) {
    if (n < 2) {
        return false;
    }
    else {
        if (n == 2) {
            return true;
        }
        else {
            if (n % 2 == 0) {
                return false;
            }
            else {
                for (var i = 2; i < n; i++) {
                    if (n % i == 0) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
function number2() {
    var text = " ";
    for (var i = 1; i < 100; i++) {
        if (check_snt(i) == true)
            text += i + "<br>";
    }
    document.getElementById("snt").innerHTML = "Kết quả các số nguyên tố là:" + text;
}

//create Order

var listStudent = [
    {name:"Nguyen Van D", score:10},
    {name:"Nguyen Van A", score:2},
    {name:"Nguyen Van V", score:5},
    {name:"Nguyen Van F", score:8},
    {name:"Nguyen Van O", score:3},
    {name:"Nguyen Van M", score:6},
    {name:"Nguyen Van T", score:7},
];
function showlistStudent() {
    var bang = "";
    for ( x in listStudent) {
        bang +=
        "<tr>" +
        "<td>" +
        listStudent[x]["name"] +
        "</td>" +
        "<td>" +
        listStudent[x]["score"] +
        "</td>" +
        "</tr>";
    }
    document.getElementById("table_body").innerHTML = bang;
  }
  showlistStudent();

/*Cach1: function searchName() {
  listStudent.sort(function (a, b) {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    } else if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    } else return 0;
  });
  showlistStudent();
}*/
//Cách2:
function searchName() {
  listStudent.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  showlistStudent();
}


function searchScore() {
  listStudent.sort(function (a, b) {
    return a.score - b.score;
  });
  showlistStudent();
}