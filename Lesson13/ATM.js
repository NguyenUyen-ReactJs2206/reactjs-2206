
/*   let numberSheetFiveHundred = Math.floor(numberMoney / 500);
   let surplusOfFiveHundred = numberMoney % 500;
 
   let numberSheetTwoHundred = Math.floor(surplusOfFiveHundred / 200);
   let surplusOfTwoHundred = surplusOfFiveHundred % 200;
 
   let numberSheetOneHundred = Math.floor(surplusOfTwoHundred / 100);
   let surplusOfOneHundred = surplusOfTwoHundred % 100;
   
   let numberSheetFifty = Math.floor(surplusOfOneHundred / 50);
   let surplusOfFifty = surplusOfOneHundred % 50;
*/

$('body').on('click', '#button', function () {
    let numberMoney = +$('#money').val();

    let result = '';
    if (numberMoney < 50000) {
        result += `So tien can rut toi thieu phai la 50k. Vui long nhap dung`;

        $('#reSult').empty().append(result);

    }
    else if (numberMoney > 100000000) {
        result += `Khong du tien de rut`;

        $('#reSult').empty().append(result);
    }
    else if (numberMoney == 5000000) {
        result += `Số tiền rút được là: 
        2 tờ 500k
        ${Math.floor((numberMoney - 2 * 500000) / 200000)} tờ 200k`;
        
        $('#reSult').empty().append(result);
    }
    else if (numberMoney % 500000 == 0) {
        result += `Số tiền rút được là 
        ${numberMoney / 500000} tờ 500k`;
        $('#reSult').empty().append(result);
    }
    else {
        surplusOfFiveHundred = numberMoney % 500000;
        if (surplusOfFiveHundred % 200000 == 0) {
            result += `Số tiền rút được là: 
        ${Math.floor(numberMoney / 500000)} tờ 500k
        ${surplusOfFiveHundred / 200000} tờ 200k`;

            $('#reSult').empty().append(result);
        } else {
            surplusOfTwoHundred = surplusOfFiveHundred % 200000;
            if (surplusOfTwoHundred % 100000 == 0) {
                result += `Số tiền rút được là: 
            ${Math.floor(numberMoney / 500000)} tờ 500k
            ${Math.floor(surplusOfFiveHundred / 200000)} tờ 200k
            ${surplusOfTwoHundred / 100000} tờ 100k`;

                $('#reSult').empty().append(result);
            } else {
                surplusOfOneHundred = surplusOfTwoHundred % 100000;
                if (surplusOfOneHundred % 50000 !== 0 || surplusOfOneHundred % 50000 == 0 ) {
                    result += `Số tiền rút được là: 
                ${Math.floor(numberMoney / 500000)} tờ 500k
                ${Math.floor(surplusOfFiveHundred / 200000)} tờ 200k
                ${Math.floor(surplusOfTwoHundred / 100000)} tờ 100k
                ${Math.floor(surplusOfOneHundred / 50000)} tờ 50k`;

                    $('#reSult').empty().append(result);
                }
            }
        }
    }

    clearInputData();
    function clearInputData() {
        $('#money').val('');
    };
});