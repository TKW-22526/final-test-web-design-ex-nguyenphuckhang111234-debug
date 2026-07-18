/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: danhgia.js
    (Xử lý gửi đánh giá & thống kê sao trung bình
     cho sản phẩm đang xem trên trang chi-tiet.html.
     File này chạy sau du-lieu.js và chitiet.js nên
     dùng lại được: sp, danhGia, taiKhoan, taoID,
     capNhatDanhGia(), hienThiDanhGia())
==================================================*/


/*==================================================
    KHAI BÁO
==================================================*/

const formDanhGia = document.getElementById("formDanhGia");

const saoDanhGia = document.getElementById("saoDanhGia");

const noiDungDanhGia = document.getElementById("noiDungDanhGia");

const thongKeDanhGia = document.getElementById("thongKeDanhGia");


/*==================================================
    THỐNG KÊ SỐ SAO TRUNG BÌNH
==================================================*/

function hienThiThongKeDanhGia() {

    if (!thongKeDanhGia) return;

    let ds = danhGia.filter(function (item) {

        return item.sanPham == sp.id;

    });

    if (ds.length == 0) {

        thongKeDanhGia.innerHTML =
            "<p>Chưa có đánh giá nào cho sản phẩm này.</p>";

        return;

    }

    let tongSao = 0;

    ds.forEach(function (item) {

        tongSao += item.sao;

    });

    let trungBinh = (tongSao / ds.length).toFixed(1);

    thongKeDanhGia.innerHTML =
        `<p class="sao-trung-binh">⭐ ${trungBinh}/5 &nbsp; ` +
        `(${ds.length} đánh giá)</p>`;

}


/*==================================================
    GỬI ĐÁNH GIÁ MỚI
==================================================*/

function themDanhGia(e) {

    e.preventDefault();

    if (!taiKhoan) {

        alert("Vui lòng đăng nhập để gửi đánh giá.");

        window.location.href = "dang-nhap.html";

        return;

    }

    let noiDung = noiDungDanhGia.value.trim();

    if (noiDung == "") {

        alert("Vui lòng nhập nội dung đánh giá.");

        return;

    }

    danhGia.push({

        id: taoID(danhGia),
        sanPham: sp.id,
        nguoiDung: taiKhoan.hoTen,
        sao: Number(saoDanhGia.value),
        noiDung: noiDung

    });

    capNhatDanhGia();

    hienThiDanhGia();

    hienThiThongKeDanhGia();

    formDanhGia.reset();

    alert("Cảm ơn bạn đã đánh giá sản phẩm!");

}


/*==================================================
    SỰ KIỆN
==================================================*/

if (formDanhGia) {

    formDanhGia.addEventListener("submit", themDanhGia);

}


/*==================================================
    KHỞI TẠO
==================================================*/

window.addEventListener("load", function () {

    hienThiThongKeDanhGia();

});


/*==================================================
    KẾT THÚC FILE
==================================================*/
