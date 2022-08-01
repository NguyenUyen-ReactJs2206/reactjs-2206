function checkValue() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let birth = document.getElementById('birth').value;
    let address = document.getElementById('email').value;

    if (name != "" && password != "" && email != "" && phone != "" && birth != "" && address != "") {
        //show btn
        document.getElementById('button').disabled = false; //hien
    } else {
        //hide btn
        document.getElementById('button').disabled = true; //an

    }
}
function checkName() {
    var name = document.getElementById("name").value;
    var testName = /[A-Za-z0-9_-]+$/

    if (!testName.test(name)) {
        document.getElementById('spanName').style.display = 'block'
      } else {
        document.getElementById('spanName').style.display = 'none'
      }
}

 function checkPassword() {
      var password = document.getElementById("password").value;
      var testPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!testPass.test(password)) {
        document.getElementById('spanPass').style.display = 'block'
      } else {
        document.getElementById('spanPass').style.display = 'none'
      }
  }

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var testPhone = /^0\d{9}$/;

        if (!testPhone.test(phone)) {
            document.getElementById('spanPhone').style.display = 'block'
          } else {
            document.getElementById('spanPhone').style.display = 'none'
          }
    }
    

function checkEmail() {
    var email = document.getElementById("email").value;
    var testEmail = /^([A-Za-z0-9_-]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
        if (!testEmail.test(email)) {
            document.getElementById('spanEmail').style.display = 'block'
          } else {
            document.getElementById('spanEmail').style.display = 'none'
          }
}

 function checkBirth() {
     var birth = document.getElementById("birth").value;
     var testBirth = /^(0?[1-9]|[1-2][0-9]|3(01))\-(0?[1-9]|1[0-2])-\d{4}$/;
     
     if (!testBirth.test(birth)) {
        document.getElementById('spanBirth').style.display = 'block'
      } else {
        document.getElementById('spanBirth').style.display = 'none'
      }
 }

function checkAddress() {
    var address = document.getElementById("address").value;
    var testAddress = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;

    if (!testAddress.test(address)) {
        document.getElementById('spanAddress').style.display = 'block'
      } else {
        document.getElementById('spanAddress').style.display = 'none'
      }
}

/*var checkGender = function (radio) {
    var check = document.getElementsByName('gender')
    check.forEach((item) => {

        if (item != radio) item.checked = false
    })
  }*/
  
var data = [
    {
        Name: "Nguyen Van A",
        Password: "Abc123",
        Phone: "0123456789",
        Email: "VanA@gamil.com",
        Birth: "01/01/2000",
        Address: "123 Le Gia Dinh, tp. HCM"
    }
]

function showInfoData(abc) {
    var hang = "";

    for (x in data) {
        hang += `<tr>
          <td>${data[x]["Name"]}</td>
          <td>${data[x]["Password"]}</td>
          <td>${data[x]["Phone"]}</td>
          <td>${data[x]["Email"]}</td>
          <td>${data[x]["Birth"]}</td>
          <td>${data[x]["Address"]}</td>
      </tr>`;
    }
    document.getElementById("body").innerHTML = hang;
}
//show list data
showInfoData(data);

function myFunction() {
    var item_name = document.getElementById('name').value
    var item_password = document.getElementById('password').value
    var item_phone = document.getElementById('phone').value
    var item_email = document.getElementById('email').value
    var item_birth = document.getElementById('birth').value
    var item_address = document.getElementById('address').value

    var item = {
        Name: item_name,
        Password: item_password,
        Phone: item_phone,
        Email: item_email,
        Birth: item_birth,
        Address: item_address
    }
    data.push(item) //đưa dữ liệu lên data
    showInfoData(data)
    clearInputData()
}

function clearInputData() {
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "";
    document.getElementById('birth').value = "";
    document.getElementById('address').value = "";
} //khóa lại sau mỗi lần nhập lấy giá trị rỗng 


