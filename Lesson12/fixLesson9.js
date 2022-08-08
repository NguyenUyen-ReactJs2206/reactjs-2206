
//Delete hang vua nhap
function checkValue() {
  let name = $('#name').val();
  let password = $('#password').val();
  let phone = $('#phone').val();
  let email = $('#email').val();
  let birth = $('#birth').val();
  let address = $('#address').val();

  if (name != "" && password != "" && email != "" && phone != "" && birth != "" && address != "") {
      //show btn
      document.getElementById('button').disabled = false; //hien
  } else {
      //hide btn
      document.getElementById('button').disabled = true; //an

  }
}
if (name != "" && password != "" && email != "" && phone != "" && birth != "" && address != "") {
  //show btn
  $('#button').disabled = false; //hien
} else {
  //hide btn
  $('#button').disabled = true; //an

}

function checkName() {
var name =  $('#name').val();
var testName = /[A-Za-z0-9_-]+$/

if (!testName.test(name)) {
  $('#spanName').show();
} else {
  $('#spanName').hide();
}
}

function checkPassword() {
var password = $('#password').val();
var testPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

if (!testPass.test(password)) {
  $('#spanPass').show();
} else {
  $('#spanPass').hide();
}
}

function checkPhone() {
var phone = $('#phone').val();
var testPhone = /^0\d{9}$/;

  if (!testPhone.test(phone)) {
      $('#spanPhone').show();
    } else {
      $('#spanPhone').hide();
    }
}


function checkEmail() {
var email = $("#email").val();
var testEmail = /^([A-Za-z0-9_-]+@([\w-]+\.)+[\w-]{2,4})?$/;

  if (!testEmail.test(email)) {
      $('#spanEmail').show();
    } else {
      $('#spanEmail').hide();
    }
}

function checkBirth() {
var birth = $("#birth").val();
var testBirth = /^(0?[1-9]|[1-2][0-9]|3(01))\-(0?[1-9]|1[0-2])-\d{4}$/;

if (!testBirth.test(birth)) {
  $('#spanBirth').show();
} else {
  $('#spanBirth').hide();
}
}

function checkAddress() {
var address = $("#address").val();
var testAddress = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;

if (!testAddress.test(address)) {
  $('#spanAddress').show();
} else {
  $('#spanAddress').hide();
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
      Birth: "2000/01/01",
      Address: "123 Le Gia Dinh, tp. HCM"
  },
  {
    Name: "Nguyen Van B",
    Password: "Abc1234",
    Phone: "0123456798",
    Email: "VanB@gamil.com",
    Birth: "2000/01/02",
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
        <td><button type="button" class="btn ml-4">Delete</button></td>
    </tr>`;
  }
  document.getElementById("body").innerHTML = hang;
}
// show list data
showInfoData(data);

function myFunction() {
  var item_name = $('#name').val();
  var item_password = $('#password').val();
  var item_phone = $('#phone').val();
  var item_email = $('#email').val();
  var item_birth = $('#birth').val();
  var item_address = $('#address').val();

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
  $('#name').val('');
  $('#password').val('');
  $('#phone').val('');
  $('#email').val('');
  $('#birth').val('');
  $('#address').val('');
} //khóa lại sau mỗi lần nhập lấy giá trị rỗng 

//Delete Row vừa nhập
function deleteRow() {
$('#body').deleteRow(0);
};
