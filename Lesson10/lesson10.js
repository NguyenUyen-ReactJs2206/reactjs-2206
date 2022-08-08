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
        let numberPerPage = 16;   //tong so sp
        let products = $('.product');
        let totalProduct = products.lenght;   // tong sp

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
                paginateHTML += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
            };
        };

        $('#paginate').empty().append(paginateHTML);
    };



    //DEMO SAP XEP
    //B1: Bat su kien onchange
    $('#orderProduct').change(function () {
        //B2: Lay kieu sap xep tang dan hoac giam dan


        //B3: Lay duoc gia tri cua san pham sau khi giam
        let listPrice = [];
        $('.product').each(function () {
            let price = parseIn($(this).find('i:not(.sale-off)').text().replace('$', ''));
            //gán price = tìm thẻ i không có class là sale-off trong tất cả sản phẩm, sau đó lấy ra giá trị của nó và thay thế $ thành rỗng và cuối cùng là chuyển string thành number

            //B5: Mỗi sp thêm 1 class mới
            $('.product').addClass(price);
            listPrice.push(price);
        })

        //B4: sắp xếp mảng theo các giá trị đã lấy được
        let priceOrdered = [];
        listPrice.sort(function (a, b) { return a - b });
        priceOrdered.push(listPrice);

        //B5: Mỗi sp thêm 1 class mới
        // $('.product').addClass(price);

        //B6: Duyệt mảng đã được sắp xếp và hiển thị sản phẩm tương ứng với giá
        priceOrdered.forEach(function (index, price) { //tìm các sp có class là price và hiển thị lên
            $('.' + price).show();

        });

    });
});
