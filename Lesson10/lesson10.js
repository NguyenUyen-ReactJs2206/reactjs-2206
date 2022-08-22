//Search
//Bước 1: bắt sự kiện, lấy được giá trị keyword
$(function () {

    $('#search').keyup(function () { //trong id search bắt sự kiện keyup truyền  vào function
        let keyword = $(this).val().toLowerCase().trim();  // lấy giá trị
        //console.log(keyword);
        //b3:
        searchProduct(keyword);
    });


    function searchProduct(keyword) {     //xử lý searchProduct
        //let products=  $(".product")
        $(".product").hide();

        //B3: duyệt từng sản phẩm
        $(".product").each(function () {
            // console.log($(this).text().replace('Buy',""));
            let product = $(this);
            let productInfo = $(this).text().replace('Buy', "").toLowerCase();
            if (productInfo.indexOf(keyword) > -1) {
                product.show();
            }
        })
    }
    // $(".products").hide();
    //duỵet từng sản phẩm



    showPaginate(1);

    $('body').on('click', '.page-item', function () {
        let currentPage = +$(this).text();

        showPaginate(currentPage);
    });

    function showPaginate(currentPage) {
        //Lấy ra tất cả sản phẩm
        let numberPerPage = 4;   //tong so sp
        let products = $('.product');
        let totalProduct = products.length;   // tong sp

        let from = (currentPage - 1) * numberPerPage;   //
        let to = currentPage * numberPerPage - 1;

        products.hide();

        products.each(function (i) {
            if (from <= i && i <= to) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        let paginateHTML = '';
        let pageCount = Math.ceil(totalProduct / numberPerPage);


        for (let i = 1; i <= pageCount; i++) {

            if (i == currentPage) {
                paginateHTML += `<li class="page-item active" aria-current="page">
        <span class="page-link">${i}</span>
      </li>`;
            } else {
                paginateHTML += `<li class="page-item"><a class="page-link" >${i}</a></li>`;
            };
        };

        $('#paginate').empty().append(paginateHTML);

    };



    //DEMO SAP XEP
    //B1: Bat su kien onchange

    //B2: Lay kieu sap xep tang dan hoac giam dan
    $('body').on('change', '#sortProduct', function () {
        let sortType = $(this).val();

        sortProduct(sortType);
    });


    function sortProduct(sortType) {
        //B3: Lay duoc gia tri cua san pham sau khi giam
        let listPrice = [];
        $('.product').each(function () {
            let price = $(this).find('i:not(.sale-off)').text().replace('$', '');
            //gán price = tìm thẻ i không có class là sale-off trong tất cả sản phẩm, sau đó lấy ra giá trị của nó và thay thế $ thành rỗng và cuối cùng là chuyển string thành number

            //B5: Mỗi sp thêm 1 class mới
            $(this).addClass(price); // class is String


            listPrice.push(parseInt(price)); // đổi string thành number
        });


        //B4: sắp xếp mảng theo các giá trị đã lấy được
        if (sortType == 'decrease') {
            listPrice.sort(function (a, b) { return b - a });
        } else {
            listPrice.sort(function (a, b) { return a - b });
        }

        //B5: Mỗi sp thêm 1 class mới
        // $('.product').addClass(price);

        let productListSorted = [];

        //B6: Duyệt mảng đã được sắp xếp và hiển thị sản phẩm tương ứng với giá
        listPrice.forEach(function (price, index) { //tìm các sp có class là price và hiển thị lên
            productListSorted.push($('#products').find('.' + price));// not show -
        });

        $('.product').remove();
        $('#products').prepend(productListSorted);

        showPaginate(1);
    };


    $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
        if (status == 'success') {
            showData(data)
        }
    });

    function showData(data) {
        //TODO
        let productHTML = ``;

        data.forEach(function (user) {

            productHTML += `
            <div class="col-sm-3 mb-3 product">
            <div class="card" style="">
                <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
                    alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${user.name.substr(0, 10)}</h4>
                    <p class="card-text">
                        <i>$1200</i>
                    </p>
                    <p>Description</p>
                    <button class="btn btn-outline-primary buy" type="button">Buy</button>
                    <input name="quantity" class="form-control" placeholder="amount">     
                </div>
            </div>
        </div>
        `;
        });

        $('#products').append(productHTML);
    }

    //
    showCartNumber();
    function showCartNumber() {
        let currentCartNumbber = localStorage.getItem('cart-number');
        $('.cart-number').text(currentCartNumbber);
    }

    $('body').on('click', '.buy', function (event) { //bắt sự kiện, tìm tất cả element có id = buy
        event.preventDefault(); //bỏ đi các event của thẻ đấy, như link...

        let quantity = +$(this).parent().find('input[name="quantity"]').val(); //tìm trong elêmnt có class là buy, tìm cha của nó và truy cập vào input có tên là quantity lấy giá trị
        if (quantity == 0 || isNaN(quantity)) {
            alert('Nhập số lượng sản phẩm vào');
           // console.log(quantity);
            return;
        }
        console.log(quantity);

        let productName = $(this).parent().find('.card-title').text(); //lấy tên sản phẩm
        //console.log(productName);

        let currentCartNumber = +$('.cart-number').text(); // đây là Get lấy giá trị từ element có class là cart-number
        let newCartNumber = currentCartNumber + quantity; // + quantity là nhập số lượng bn thì cộng dồn vào bấy nhiêu

        $('.cart-number').text(newCartNumber); //đây là set, truyền giá trị vào , mỗi lần click là cộng thêm 1

        //Sử dụng localStotage để khi reload không bị mất các sản phẩm
        localStorage.setItem('cart-number', newCartNumber);

        showMsgSuccess(productName, quantity);
        $(this).parent().find('input[name="quantity"]').val('');


        //Bảng gồm:
        //1.img , 2.productName: tên sp (đc), 3.quantity : số lượng (đã có), 4.price




    });

    function showMsgSuccess(productName, quantity) {
        let msg = `Đã thêm ${quantity} ${productName} vào giỏ hàng`;
       // console.log(msg)
        var x = document.getElementById("snackbar");
        x.textContent = msg;
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };

    //show 
    $('#showcart').hide();
    $('body').on('click', '.cart', function () {
    if ($('#showcart').hide()) {
        $('#showcart').show();
    } 
    /*else {
        $('#showcart').hide();
    }*/
    });

    $('body').on('click', '.close', function () {
        $('#showcart').hide();
    });


    var giohang = new Array();
function themvaogiohang(x) {
    var img = $('.cart').find()
}

function showMyCart(){
    
}
    
});

