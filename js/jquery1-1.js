var listStudent = [
    { mssv: 111, name: "Thanh", point: 9 },
    { mssv: 112, name: "Quang", point: 9.5 },
    { mssv: 113, name: "Minh", point: 9.3 },
    { mssv: 114, name: "Anh", point: 8 },
    { mssv: 115, name: "Chinh", point: 5 },
    { mssv: 116, name: "Huong", point: 6 },
    { mssv: 117, name: "Thinh", point: 7 },
    { mssv: 118, name: "Loi", point: 6.5 },
    { mssv: 119, name: "Vu", point: 6.3 },
    { mssv: 120, name: "Uyen", point: 6.2 },
    { mssv: 121, name: "Linh", point: 5.2 },
    { mssv: 122, name: "Nhi", point: 9.2 },
    { mssv: 123, name: "Trung", point: 7.2 },
    { mssv: 124, name: "Trang", point: 7.8 }

];
//create body_table
$(function () {
    var bodyTable = "";

    for (x in listStudent) {
        bodyTable += `<tr>
      <td>${listStudent[x]["mssv"]}</td>
      <td>${listStudent[x]["name"]}</td>
      <td>${listStudent[x]["point"]}</td>
  </tr>`;
    }

    $("#body").append(bodyTable); //insert body_table
}
);

//showNumberStudent after 1 Click Button
$(function () {
    var totalStudent = listStudent.length;
    var numberStudentShow = 2;

    $("#button").click(function () {
        var showStudent = "";

        $("#body").empty(); //delete content

        for (var i = 0; i < numberStudentShow; i++) {
            if (numberStudentShow <= totalStudent) {
                showStudent += `<tr>
                <td>${i + 1}</td>
                <td>${listStudent[i].mssv}</td>
                <td>${listStudent[i].name}</td>
                <td>${listStudent[i].point}</td>
                </tr>`;
            }
        }
        numberStudentShow += 2;

        $("#body").append(showStudent);

        if (numberStudentShow > totalStudent) {
            $("#button").hide(); //hide nut button
        }
    });
});



