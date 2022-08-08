var data = [
    {
        Id: 112,
        Name: 'Nguyen Van B',
        Age: 18,
    },
    {
        Id: 234,
        Name: 'Nguyen Van D',
        Age: 14,
    },
    {
        Id: 245,
        Name: 'Nguyen Van A',
        Age: 53,
    },
    {
        Id: 345,
        Name: 'Nguyen Van C',
        Age: 34,
    }
]

function showInfoData(abc) {
    var hang = "";

    for (x in data) {
        hang += `<tr>
      <td>${data[x]["Id"]}</td>
      <td>${data[x]["Name"]}</td>
      <td>${data[x]["Age"]}</td>
  </tr>`;
    }
    document.getElementById("body").innerHTML = hang;
}

showInfoData(data);
//show list data

function add() {
    var item_id = document.getElementById('id').value //gán đưa đến phần tử cần xử lý thêm value
    var item_name = document.getElementById('name').value
    var item_age = document.getElementById('age').value

    var item = {
        Id: item_id,
        Name: item_name,
        Age: item_age
    }

    data.push(item) //đưa dữ liệu lên data
    console.log(item);
    showInfoData(data)
    clearInputData()
}

function clearInputData() {
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
}   //khóa lại sau mỗi lần nhập lấy giá trị rỗng 

function orderName() {
    data.sort(function (a, b) {
        let x = a.Name.toLowerCase();
        let y = b.Name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });

    showInfoData(data);
}

function orderAge() {
    data.sort(function (a, b) {
        return a.Age - b.Age;
    });

    showInfoData(data);
}
