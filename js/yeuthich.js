/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: yeuthich.js
==================================================*/


/*==================================================
    KHAI BÁO BIẾN
==================================================*/

let yeuThichDS = docDuLieu("yeuThich") || [];

const bangYeuThich = document.getElementById("bangYeuThich");

const soLuongGio = document.getElementById("soLuongGio");

const btnTiepTuc = document.getElementById("btnTiepTuc");


/*==================================================
    CẬP NHẬT SỐ LƯỢNG GIỎ (HEADER)
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
    HIỂN THỊ DANH SÁCH YÊU THÍCH
==================================================*/

function hienThiYeuThich() {

    bangYeuThich.innerHTML = "";

    if (yeuThichDS.length == 0) {

        bangYeuThich.innerHTML = `

<tr>

<td colspan="5">

Bạn chưa có sản phẩm yêu thích nào.

</td>

</tr>

`;

        return;

    }

    yeuThichDS.forEach(function (sp, index) {

        bangYeuThich.innerHTML += `

<tr>

<td>
<img src="../assets/img/${sp.hinh}" width="80">
</td>

<td>${sp.ten}</td>

<td>${sp.gia.toLocaleString()} đ</td>

<td>
<button onclick="themVaoGio(${index})">Thêm vào giỏ</button>
</td>

<td>
<button onclick="xoaYeuThich(${index})">Xóa</button>
</td>

</tr>

`;

    });

}


/*==================================================
    THÊM VÀO GIỎ HÀNG
==================================================*/

function themVaoGio(index) {

    let sp = yeuThichDS[index];

    let gioHang = docDuLieu("gioHang") || [];

    let tonTai = gioHang.find(function (item) {

        return item.id == sp.id;

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

    luuDuLieu("gioHang", gioHang);

    capNhatSoLuongGio();

    alert("Đã thêm vào giỏ hàng.");

}


/*==================================================
    XÓA KHỎI YÊU THÍCH
==================================================*/

function xoaYeuThich(index) {

    yeuThichDS.splice(index, 1);

    luuDuLieu("yeuThich", yeuThichDS);

    hienThiYeuThich();

}


/*==================================================
    SỰ KIỆN
==================================================*/

if (btnTiepTuc) {

    btnTiepTuc.addEventListener("click", function () {

        window.location.href = "san-pham.html";

    });

}


/*==================================================
    KHỞI TẠO TRANG
==================================================*/

window.addEventListener("load", function () {

    hienThiYeuThich();

    capNhatSoLuongGio();

});


/*==================================================
    KẾT THÚC FILE
==================================================*/
