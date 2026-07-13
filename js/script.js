// =========================
// WEBSITE ĐẶC SẢN SÓC TRĂNG
// =========================

// Thêm vào giỏ hàng

function themGioHang(){

    alert("Đã thêm sản phẩm vào giỏ hàng!");

}

// Gửi liên hệ

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Gửi liên hệ thành công!");

        form.reset();

    });

}

// Nút quay lên đầu trang

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.id = "topBtn";

document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "12px";
btn.style.display = "none";
btn.style.cursor = "pointer";

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        btn.style.display = "block";

    }else{

        btn.style.display = "none";

    }

}

btn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
function timKiemSanPham(){

let input=document.getElementById("search").value.toUpperCase();

let card=document.getElementsByClassName("card");

for(let i=0;i<card.length;i++){

let title=card[i].getElementsByTagName("h3")[0];

if(title.innerHTML.toUpperCase().indexOf(input)>-1){

card[i].style.display="block";

}else{

card[i].style.display="none";

}

}

}
let soLuong=0;

function themGioHang(){

soLuong++;

document.getElementById("cart-count").innerHTML=soLuong;

alert("Đã thêm vào giỏ hàng");

}
let images = [
    "assets/banner1.jpg",
    "assets/banner2.jpg",
    "assets/banner3.jpg"
];

let i = 0;

setInterval(function () {

    let slide = document.getElementById("slide");

    if (!slide) return;

    i++;

    if (i >= images.length) {
        i = 0;
    }

    slide.src = images[i];

}, 3000);
function dangNhap(){

alert("Đăng nhập thành công");

}
// =========================
// GIỎ HÀNG
// =========================

// Lấy giỏ hàng từ LocalStorage
let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

// Thêm sản phẩm vào giỏ hàng
function themGioHang(ten, gia, hinh) {

    let sp = gioHang.find(item => item.ten === ten);

    if (sp) {

        sp.soLuong++;

    } else {

        gioHang.push({

            ten: ten,
            gia: gia,
            hinh: hinh,
            soLuong: 1

        });

    }

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    capNhatSoLuongGioHang();

    alert("✅ Đã thêm vào giỏ hàng!");

}

// Cập nhật số lượng trên icon
function capNhatSoLuongGioHang() {

    let badge = document.getElementById("cart-count");

    if (!badge) return;

    let tong = 0;

    gioHang.forEach(sp => {

        tong += sp.soLuong;

    });

    badge.innerHTML = tong;

}

// Hiển thị giỏ hàng
function hienThiGioHang() {

    let tbody = document.getElementById("cart-body");

    if (!tbody) return;

    gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

    tbody.innerHTML = "";

    let tongTien = 0;

    gioHang.forEach((sp, index) => {

        tongTien += sp.gia * sp.soLuong;

        tbody.innerHTML += `

        <tr>

            <td>
                <img src="${sp.hinh}" width="80">
            </td>

            <td>${sp.ten}</td>

            <td>${sp.gia.toLocaleString()} VNĐ</td>

            <td>

                <button onclick="giamSoLuong(${index})">-</button>

                ${sp.soLuong}

                <button onclick="tangSoLuong(${index})">+</button>

            </td>

            <td>${(sp.gia*sp.soLuong).toLocaleString()} VNĐ</td>

            <td>

                <button onclick="xoaSanPham(${index})">

                    ❌

                </button>

            </td>

        </tr>

        `;

    });

    let tong = document.getElementById("tongTien");

    if (tong) {

        tong.innerHTML =

        "Tổng tiền: <span style='color:red'>" +

        tongTien.toLocaleString() +

        " VNĐ</span>";

    }

}

// Tăng số lượng
function tangSoLuong(index){

    gioHang[index].soLuong++;

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    hienThiGioHang();

    capNhatSoLuongGioHang();

}

// Giảm số lượng
function giamSoLuong(index){

    if(gioHang[index].soLuong>1){

        gioHang[index].soLuong--;

    }else{

        gioHang.splice(index,1);

    }

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    hienThiGioHang();

    capNhatSoLuongGioHang();

}

// Xóa sản phẩm
function xoaSanPham(index){

    gioHang.splice(index,1);

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    hienThiGioHang();

    capNhatSoLuongGioHang();

}

// Xóa toàn bộ
function xoaGioHang(){

    if(confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")){

        gioHang=[];

        localStorage.removeItem("gioHang");

        hienThiGioHang();

        capNhatSoLuongGioHang();

    }

}

// Thanh toán
function thanhToan(){

    if(gioHang.length==0){

        alert("Giỏ hàng đang trống!");

        return;

    }

    alert("🎉 Đặt hàng thành công!");

    gioHang=[];

    localStorage.removeItem("gioHang");

    hienThiGioHang();

    capNhatSoLuongGioHang();

}

// Khi mở trang
window.onload=function(){

    capNhatSoLuongGioHang();

    hienThiGioHang();

}
function guiDanhGia(){

    let text = document.getElementById("reviewText").value.trim();

    if(text==""){

        alert("Vui lòng nhập đánh giá!");

        return;

    }

    let list = document.getElementById("reviewList");

    let div = document.createElement("div");

    div.className="review-item";

    div.innerHTML=`
        <p><strong>Khách hàng</strong></p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>${text}</p>
        <hr>
    `;

    list.prepend(div);

    document.getElementById("reviewText").value="";

    alert("Đánh giá thành công!");

}