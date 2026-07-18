/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: dangky.js
==================================================*/


/*==================================================
    KHAI BÁO
==================================================*/

const formDangKy = document.getElementById("formDangKy");

const txtHoTen = document.getElementById("hoTen");

const txtEmail = document.getElementById("email");

const txtMatKhau = document.getElementById("matKhau");

const txtNhapLai = document.getElementById("nhapLaiMatKhau");

const soLuongGio = document.getElementById("soLuongGio");


/*==================================================
    HIỂN THỊ SỐ LƯỢNG GIỎ
==================================================*/

function capNhatSoLuongGio() {

    if (!soLuongGio) return;

    let gioHang = docDuLieu("gioHang") || [];

    let tong = 0;

    gioHang.forEach(function(item){

        tong += item.soLuong;

    });

    soLuongGio.innerHTML = tong;

}


/*==================================================
    ĐĂNG KÝ
==================================================*/

function dangKy(e){

    e.preventDefault();

    let hoTen = txtHoTen.value.trim();

    let email = txtEmail.value.trim();

    let matKhau = txtMatKhau.value.trim();

    let nhapLai = txtNhapLai.value.trim();

    if(
        hoTen=="" ||
        email=="" ||
        matKhau=="" ||
        nhapLai==""
    ){

        alert("Vui lòng nhập đầy đủ thông tin.");

        return;

    }

    if(matKhau != nhapLai){

        alert("Mật khẩu nhập lại không đúng.");

        return;

    }

    let dsNguoiDung =
    docDuLieu("nguoiDung") || nguoiDung;

    let tonTai =
    dsNguoiDung.find(function(user){

        return user.email == email;

    });

    if(tonTai){

        alert("Email đã tồn tại.");

        return;

    }

    let taiKhoanMoi = {

        id: dsNguoiDung.length + 1,

        hoTen: hoTen,

        email: email,

        matKhau: matKhau,

        quyen: "user"

    };

    dsNguoiDung.push(taiKhoanMoi);

    luuDuLieu(
        "nguoiDung",
        dsNguoiDung
    );

    alert("Đăng ký thành công.");

    window.location.href="dang-nhap.html";

}


/*==================================================
    LÀM TRỐNG FORM
==================================================*/

function lamMoi(){

    txtHoTen.value="";

    txtEmail.value="";

    txtMatKhau.value="";

    txtNhapLai.value="";

}


/*==================================================
    KIỂM TRA EMAIL
==================================================*/

function kiemTraEmail(){

    let email =
    txtEmail.value.trim();

    if(email=="") return;

    let ds =
    docDuLieu("nguoiDung") || nguoiDung;

    let tonTai =
    ds.find(function(user){

        return user.email==email;

    });

    if(tonTai){

        alert("Email đã được sử dụng.");

        txtEmail.focus();

    }

}


/*==================================================
    SỰ KIỆN
==================================================*/

if(formDangKy){

    formDangKy.addEventListener(

        "submit",

        dangKy

    );

}

txtEmail.addEventListener(

    "blur",

    kiemTraEmail

);


/*==================================================
    LOAD
==================================================*/

window.addEventListener(

    "load",

    function(){

        capNhatSoLuongGio();

    }

);


/*==================================================
    STORAGE
==================================================*/

window.addEventListener(

    "storage",

    function(){

        capNhatSoLuongGio();

    }

);


/*==================================================
    KẾT THÚC FILE
==================================================*/