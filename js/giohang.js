/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: giohang.js
==================================================*/


/*==================================================
    KHAI BÁO BIẾN
==================================================*/

gioHang = docDuLieu("gioHang") || [];

const bangGioHang = document.getElementById("bangGioHang");

const tongTien = document.getElementById("tongTien");

const soLuongGio = document.getElementById("soLuongGio");

const btnXoaTatCa = document.getElementById("btnXoaTatCa");

const btnThanhToan = document.getElementById("btnThanhToan");

const btnTiepTuc = document.getElementById("btnTiepTuc");


/*==================================================
    CẬP NHẬT SỐ LƯỢNG GIỎ
==================================================*/

function capNhatSoLuongGio() {

    if (!soLuongGio) return;

    let tong = 0;

    gioHang.forEach(function (item) {

        tong += item.soLuong;

    });

    soLuongGio.innerHTML = tong;

}


/*==================================================
    HIỂN THỊ GIỎ HÀNG
==================================================*/

function hienThiGioHang() {

    bangGioHang.innerHTML = "";

    let tong = 0;

    if (gioHang.length == 0) {

        bangGioHang.innerHTML = `

<tr>

<td colspan="6">

Giỏ hàng đang trống.

</td>

</tr>

`;

        tongTien.innerHTML = "0";

        capNhatSoLuongGio();

        return;

    }

    gioHang.forEach(function (sp, index) {

        let thanhTien =

            sp.gia *

            sp.soLuong;

        tong += thanhTien;

        bangGioHang.innerHTML += `

<tr>

<td>

<img
src="../assets/img/${sp.hinh}"
width="90">

</td>

<td>

${sp.ten}

</td>

<td>

${sp.gia.toLocaleString()} đ

</td>

<td>

<button onclick="giamSoLuong(${index})">

-

</button>

<strong>

${sp.soLuong}

</strong>

<button onclick="tangSoLuong(${index})">

+

</button>

</td>

<td>

${thanhTien.toLocaleString()} đ

</td>

<td>

<button onclick="xoaSanPham(${index})">

Xóa

</button>

</td>

</tr>

`;

    });

    tongTien.innerHTML =

        tong.toLocaleString();

    capNhatSoLuongGio();

}


/*==================================================
    TĂNG SỐ LƯỢNG
==================================================*/

function tangSoLuong(index) {

    gioHang[index].soLuong++;

    luuDuLieu(

        "gioHang",

        gioHang

    );

    hienThiGioHang();

}


/*==================================================
    GIẢM SỐ LƯỢNG
==================================================*/

function giamSoLuong(index) {

    if (

        gioHang[index].soLuong > 1

    ) {

        gioHang[index].soLuong--;

    }

    luuDuLieu(

        "gioHang",

        gioHang

    );

    hienThiGioHang();

}


/*==================================================
    XÓA MỘT SẢN PHẨM
==================================================*/

function xoaSanPham(index) {

    if (

        confirm("Bạn muốn xóa sản phẩm này?")

    ) {

        gioHang.splice(index, 1);

        luuDuLieu(

            "gioHang",

            gioHang

        );

        hienThiGioHang();

    }

}
/*==================================================
    XÓA TOÀN BỘ GIỎ HÀNG
==================================================*/

function xoaTatCa() {

    if (gioHang.length == 0) {

        alert("Giỏ hàng đang trống.");

        return;

    }

    if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {

        gioHang = [];

        luuDuLieu("gioHang", gioHang);

        hienThiGioHang();

    }

}


/*==================================================
    THANH TOÁN
==================================================*/

function thanhToan() {

    if (gioHang.length == 0) {

        alert("Giỏ hàng đang trống.");

        return;

    }

    let taiKhoan = docDuLieu("taiKhoan");

    if (!taiKhoan) {

        alert("Vui lòng đăng nhập trước khi thanh toán.");

        window.location.href = "dang-nhap.html";

        return;

    }

    let tong = 0;

    gioHang.forEach(function (sp) {

        tong += sp.gia * sp.soLuong;

    });

    let donHang = docDuLieu("donHang") || [];

    donHang.push({

        id: donHang.length + 1,

        khachHang: taiKhoan.hoTen,

        email: taiKhoan.email,

        ngayDat: new Date().toLocaleString(),

        tongTien: tong,

        trangThai: "Chờ xác nhận",

        chiTiet: [...gioHang]

    });

    luuDuLieu("donHang", donHang);

    gioHang = [];

    luuDuLieu("gioHang", gioHang);

    alert("Đặt hàng thành công.");

    hienThiGioHang();

}


/*==================================================
    TIẾP TỤC MUA HÀNG
==================================================*/

function tiepTucMua() {

    window.location.href = "san-pham.html";

}


/*==================================================
    GẮN SỰ KIỆN
==================================================*/

if (btnXoaTatCa) {

    btnXoaTatCa.addEventListener("click", function () {

        xoaTatCa();

    });

}

if (btnThanhToan) {

    btnThanhToan.addEventListener("click", function () {

        thanhToan();

    });

}

if (btnTiepTuc) {

    btnTiepTuc.addEventListener("click", function () {

        tiepTucMua();

    });

}


/*==================================================
    ĐỒNG BỘ LOCALSTORAGE
==================================================*/

window.addEventListener("storage", function () {

    gioHang = docDuLieu("gioHang") || [];

    hienThiGioHang();

});


/*==================================================
    KHỞI TẠO
==================================================*/

window.addEventListener("load", function () {

    gioHang = docDuLieu("gioHang") || [];

    hienThiGioHang();

});


/*==================================================
    KẾT THÚC FILE
==================================================*/