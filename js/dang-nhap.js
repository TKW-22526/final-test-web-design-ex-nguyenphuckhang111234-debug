/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: dangnhap.js
==================================================*/


/*==================================================
    KHAI BÁO
==================================================*/

const formDangNhap = document.getElementById("formDangNhap");

const txtEmail = document.getElementById("email");

const txtMatKhau = document.getElementById("matKhau");

const soLuongGio = document.getElementById("soLuongGio");


/*==================================================
    HIỂN THỊ SỐ LƯỢNG GIỎ
==================================================*/

function capNhatSoLuongGio() {

    if (!soLuongGio) return;

    let gioHang = docDuLieu("gioHang") || [];

    let tong = 0;

    gioHang.forEach(function (item) {

        tong += item.soLuong;

    });

    soLuongGio.innerHTML = tong;

}


/*==================================================
    ĐĂNG NHẬP
==================================================*/

function dangNhap(e) {

    e.preventDefault();

    let email = txtEmail.value.trim();

    let matKhau = txtMatKhau.value.trim();

    if (email == "" || matKhau == "") {

        alert("Vui lòng nhập đầy đủ thông tin.");

        return;

    }

    let taiKhoan = nguoiDung.find(function (user) {

        return user.email == email &&
               user.matKhau == matKhau;

    });

    if (!taiKhoan) {

        alert("Email hoặc mật khẩu không đúng.");

        return;

    }

    luuDuLieu("taiKhoan", taiKhoan);

    alert("Đăng nhập thành công.");

    if (taiKhoan.quyen == "admin") {

        window.location.href = "admin.html";

    }

    else {

        window.location.href = "../index.html";

    }

}


/*==================================================
    KIỂM TRA ĐÃ ĐĂNG NHẬP
==================================================*/

function kiemTraDangNhap() {

    let taiKhoan = docDuLieu("taiKhoan");

    if (!taiKhoan) {

        return;

    }

    if (taiKhoan.quyen == "admin") {

        console.log("Đăng nhập Admin");

    }

    else {

        console.log("Đăng nhập User");

    }

}


/*==================================================
    ĐĂNG XUẤT
==================================================*/

function dangXuat() {

    localStorage.removeItem("taiKhoan");

    alert("Đã đăng xuất.");

    window.location.href = "dang-nhap.html";

}


/*==================================================
    SỰ KIỆN
==================================================*/

if (formDangNhap) {

    formDangNhap.addEventListener("submit", dangNhap);

}


/*==================================================
    LOAD
==================================================*/

window.addEventListener("load", function () {

    capNhatSoLuongGio();

    kiemTraDangNhap();

});


/*==================================================
    STORAGE
==================================================*/

window.addEventListener("storage", function () {

    capNhatSoLuongGio();

});


/*==================================================
    KẾT THÚC FILE
==================================================*/