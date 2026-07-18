/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: sanpham.js
==================================================*/


/*==================================================
    KHAI BÁO BIẾN
==================================================*/

let dsSanPham = [...sanPham];

let trangHienTai = 1;

const soSanPhamMoiTrang = 6;

const danhSach = document.getElementById("danhSachSanPham");

const oTimKiem = document.getElementById("timKiem");

const cboDanhMuc = document.getElementById("locDanhMuc");

const cboSapXep = document.getElementById("sapXep");

const divPhanTrang = document.getElementById("phanTrang");

const soLuongGio = document.getElementById("soLuongGio");


/*==================================================
    KHỞI TẠO
==================================================*/

window.addEventListener("load", function () {

    hienThiDanhMuc();

    capNhatSoLuongGio();

    hienThiTheoTrang();

});


/*==================================================
    HIỂN THỊ DANH MỤC
==================================================*/

function hienThiDanhMuc() {

    if (!cboDanhMuc) return;

    cboDanhMuc.innerHTML = `

        <option value="0">

            Tất cả danh mục

        </option>

    `;

    danhMuc.forEach(function (dm) {

        cboDanhMuc.innerHTML += `

            <option value="${dm.id}">

                ${dm.ten}

            </option>

        `;

    });

}


/*==================================================
    CẬP NHẬT GIỎ HÀNG
==================================================*/

function capNhatSoLuongGio() {

    if (!soLuongGio) return;

    let gio = docDuLieu("gioHang") || [];

    let tong = 0;

    gio.forEach(function (item) {

        tong += item.soLuong;

    });

    soLuongGio.innerHTML = tong;

}


/*==================================================
    HIỂN THỊ SẢN PHẨM
==================================================*/

function hienThiSanPham(ds) {

    if (!danhSach) return;

    danhSach.innerHTML = "";

    if (ds.length == 0) {

        danhSach.innerHTML = `

            <h2>

                Không tìm thấy sản phẩm.

            </h2>

        `;

        return;

    }

    ds.forEach(function (sp) {

        danhSach.innerHTML += `

<div class="sanPham">

    <img
        src="../assets/img/${sp.hinh}"
        alt="${sp.ten}">

    <h3>

        ${sp.ten}

    </h3>

    <p>

        ${sp.moTa}

    </p>

    <h4>

        ${sp.gia.toLocaleString()} đ

    </h4>

    <div class="nutSanPham">

        <a href="chi-tiet.html?id=${sp.id}">

            <button>

                Xem chi tiết

            </button>

        </a>

        <button onclick="themGioHang(${sp.id})">

            Thêm vào giỏ

        </button>

        <button onclick="themYeuThich(${sp.id})">

            ❤

        </button>

    </div>

</div>

`;

    });

}


/*==================================================
    PHÂN TRANG
==================================================*/

function hienThiTheoTrang() {

    let batDau =

        (trangHienTai - 1)

        *

        soSanPhamMoiTrang;

    let ketThuc =

        batDau +

        soSanPhamMoiTrang;

    let ds = dsSanPham.slice(

        batDau,

        ketThuc

    );

    hienThiSanPham(ds);

    taoPhanTrang();

}


/*==================================================
    TẠO NÚT PHÂN TRANG
==================================================*/

function taoPhanTrang() {

    if (!divPhanTrang) return;

    divPhanTrang.innerHTML = "";

    let tongTrang = Math.ceil(

        dsSanPham.length /

        soSanPhamMoiTrang

    );

    if (tongTrang <= 1) return;

    for (

        let i = 1;

        i <= tongTrang;

        i++

    ) {

        divPhanTrang.innerHTML += `

<button

onclick="doiTrang(${i})"

class="${

i == trangHienTai

?

'active'

:

''

}"

>

${i}

</button>

`;

    }

}


/*==================================================
    ĐỔI TRANG
==================================================*/

function doiTrang(trang) {

    trangHienTai = trang;

    hienThiTheoTrang();

}
/*==================================================
    TÌM KIẾM - LỌC - SẮP XẾP
==================================================*/

function locSanPham() {

    let tuKhoa = oTimKiem.value.trim().toLowerCase();

    let idDanhMuc = Number(cboDanhMuc.value);

    let sapXep = Number(cboSapXep.value);

    dsSanPham = sanPham.filter(function (sp) {

        let dungTen = sp.ten
            .toLowerCase()
            .includes(tuKhoa);

        let dungDanhMuc =
            idDanhMuc == 0 ||
            sp.danhMuc == idDanhMuc;

        return dungTen && dungDanhMuc;

    });

    switch (sapXep) {

        case 1:

            dsSanPham.sort(function (a, b) {

                return a.gia - b.gia;

            });

            break;

        case 2:

            dsSanPham.sort(function (a, b) {

                return b.gia - a.gia;

            });

            break;

        case 3:

            dsSanPham.sort(function (a, b) {

                return a.ten.localeCompare(b.ten);

            });

            break;

        case 4:

            dsSanPham.sort(function (a, b) {

                return b.ten.localeCompare(a.ten);

            });

            break;

    }

    trangHienTai = 1;

    hienThiTheoTrang();

}


/*==================================================
    SỰ KIỆN
==================================================*/

if (oTimKiem) {

    oTimKiem.addEventListener("keyup", locSanPham);

}

if (cboDanhMuc) {

    cboDanhMuc.addEventListener("change", locSanPham);

}

if (cboSapXep) {

    cboSapXep.addEventListener("change", locSanPham);

}


/*==================================================
    THÊM GIỎ HÀNG
==================================================*/

function themGioHang(id) {

    let gioHang = docDuLieu("gioHang") || [];

    let sp = timSanPhamTheoID(id);

    if (!sp) {

        return;

    }

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

    luuDuLieu("gioHang", gioHang);

    capNhatSoLuongGio();

    alert("Đã thêm vào giỏ hàng.");

}


/*==================================================
    THÊM YÊU THÍCH
==================================================*/

function themYeuThich(id) {

    let ds = docDuLieu("yeuThich") || [];

    let sp = timSanPhamTheoID(id);

    if (!sp) {

        return;

    }

    let tonTai = ds.find(function (item) {

        return item.id == id;

    });

    if (tonTai) {

        alert("Sản phẩm đã có trong yêu thích.");

        return;

    }

    ds.push(sp);

    luuDuLieu("yeuThich", ds);

    alert("Đã thêm vào yêu thích.");

}


/*==================================================
    RESET BỘ LỌC
==================================================*/

function resetBoLoc() {

    oTimKiem.value = "";

    cboDanhMuc.value = 0;

    cboSapXep.value = 0;

    dsSanPham = [...sanPham];

    trangHienTai = 1;

    hienThiTheoTrang();

}


/*==================================================
    CẬP NHẬT GIỎ KHI ĐỔI TAB
==================================================*/

window.addEventListener("storage", function () {

    capNhatSoLuongGio();

});


/*==================================================
    KẾT THÚC FILE
==================================================*/