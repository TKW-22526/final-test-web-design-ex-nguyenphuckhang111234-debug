/*==================================================
=        WEBSITE ĐẶC SẢN SÓC TRĂNG
=        FILE: script.js
==================================================*/


/*==================================================
=        KHAI BÁO BIẾN
==================================================*/

const slide = document.getElementById("slide");

const soLuongGio = document.getElementById("soLuongGio");

const danhSachSanPham = document.getElementById("danhSachSanPham");

let banner = [

    "assets/img/baner1.jpg",

    "assets/img/baner2.jpg",

    "assets/img/baner3.jpg"

];

let viTri = 0;


/*==================================================
=        HIỂN THỊ SỐ LƯỢNG GIỎ HÀNG
==================================================*/

function capNhatSoLuongGio(){

    if(soLuongGio==null){

        return;

    }

    let gioHang = docDuLieu("gioHang") || [];

    let tong = 0;

    gioHang.forEach(function(item){

        tong += item.soLuong;

    });

    soLuongGio.innerHTML = tong;

}

capNhatSoLuongGio();


/*==================================================
=        SLIDER
==================================================*/

function hienThiBanner(){

    if(slide==null){

        return;

    }

    slide.src = banner[viTri];

}


function bannerKe(){

    viTri++;

    if(viTri >= banner.length){

        viTri = 0;

    }

    hienThiBanner();

}


function bannerTruoc(){

    viTri--;

    if(viTri < 0){

        viTri = banner.length - 1;

    }

    hienThiBanner();

}


/*==================================================
=        TỰ ĐỘNG CHUYỂN SLIDE
==================================================*/

if(slide){

    setInterval(function(){

        bannerKe();

    },3000);

}


/*==================================================
=        SỰ KIỆN NÚT CHUYỂN
==================================================*/

const btnTrai = document.getElementById("btnTrai");

const btnPhai = document.getElementById("btnPhai");

if(btnTrai){

    btnTrai.onclick = function(){

        bannerTruoc();

    }

}

if(btnPhai){

    btnPhai.onclick = function(){

        bannerKe();

    }

}


/*==================================================
=        HIỂN THỊ TÀI KHOẢN ĐĂNG NHẬP
==================================================*/

function hienThiTaiKhoan(){

    let taiKhoan = docDuLieu("taiKhoan");

    if(taiKhoan==null){

        return;

    }

    console.log("Xin chào: " + taiKhoan.hoTen);

}

hienThiTaiKhoan();


/*==================================================
=        KHỞI TẠO TRANG
==================================================*/

window.onload = function(){

    capNhatSoLuongGio();

    hienThiBanner();

}
/*==================================================
=        HIỂN THỊ SẢN PHẨM NỔI BẬT
==================================================*/

function hienThiSanPhamNoiBat() {

    if (danhSachSanPham == null) {

        return;

    }

    danhSachSanPham.innerHTML = "";

    let ds = sanPham.slice(0, 8);

    ds.forEach(function (sp) {

        danhSachSanPham.innerHTML += `

<div class="sanPham">

    <img src="assets/img/${sp.hinh}" alt="${sp.ten}">

    <h3>${sp.ten}</h3>

    <p>${sp.moTa}</p>

    <h4>${sp.gia.toLocaleString()} đ</h4>

    <div class="nutSanPham">

        <a href="html/chi-tiet.html?id=${sp.id}">

            <button>

                Xem chi tiết

            </button>

        </a>

        <button onclick="themGioHangTrangChu(${sp.id})">

            Thêm vào giỏ

        </button>

        <button onclick="themYeuThichTrangChu(${sp.id})">

            ❤

        </button>

    </div>

</div>

`;

    });

}


/*==================================================
=        THÊM VÀO GIỎ HÀNG
==================================================*/

function themGioHangTrangChu(id) {

    let gioHang = docDuLieu("gioHang") || [];

    let sp = timSanPham(id);

    let tonTai = gioHang.find(function (item) {

        return item.id == id;

    });

    if (tonTai) {

        tonTai.soLuong++;

    }

    else {

        gioHang.push({

            id: sp.id,

            ten: sp.ten,

            gia: sp.gia,

            hinh: sp.hinh,

            soLuong: 1

        });

    }

    capNhatGioHang();

    luuDuLieu("gioHang", gioHang);

    capNhatSoLuongGio();

    alert("Đã thêm vào giỏ hàng.");

}


/*==================================================
=        THÊM YÊU THÍCH
==================================================*/

function themYeuThichTrangChu(id) {

    let yeuThich = docDuLieu("yeuThich") || [];

    let tonTai = yeuThich.find(function (item) {

        return item.id == id;

    });

    if (tonTai) {

        alert("Sản phẩm đã có trong danh sách yêu thích.");

        return;

    }

    let sp = timSanPham(id);

    yeuThich.push(sp);

    luuDuLieu(

        "yeuThich",

        yeuThich

    );

    alert("Đã thêm vào yêu thích.");

}


/*==================================================
=        HIỂN THỊ KHI MỞ TRANG
==================================================*/

if (danhSachSanPham) {

    hienThiSanPhamNoiBat();

}