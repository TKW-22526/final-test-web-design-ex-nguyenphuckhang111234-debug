// Chỉ admin mới được vào trang quản trị
if (!taiKhoan || taiKhoan.quyen !== "admin") {
    alert("Bạn không có quyền truy cập trang quản trị.");
    window.location.href = "dang-nhap.html";
}

// Nếu chưa có dữ liệu trong localStorage thì lưu dữ liệu mặc định
if (!localStorage.getItem("sanPham")) {
    localStorage.setItem("sanPham", JSON.stringify(sanPham));
}

// Lấy dữ liệu
sanPham = JSON.parse(localStorage.getItem("sanPham"));

const bang = document.getElementById("bangSanPham");
const form = document.getElementById("formSanPham");

function hienThiSanPham() {

    bang.innerHTML = "";

    sanPham.forEach(function(sp) {

        bang.innerHTML += `
        <tr>

            <td>${sp.id}</td>

            <td>${sp.ten}</td>

            <td>${sp.gia.toLocaleString()} đ</td>

            <td>${sp.danhMuc}</td>

            <td>

                <button onclick="suaSanPham(${sp.id})">
                    Sửa
                </button>

                <button onclick="xoaSanPham(${sp.id})">
                    Xóa
                </button>

            </td>

        </tr>
        `;

    });

}

hienThiSanPham();

form.addEventListener("submit", function(e){

    e.preventDefault();

    let id = document.getElementById("id").value;

    let ten = document.getElementById("ten").value;

    let gia = Number(document.getElementById("gia").value);

    let hinh = document.getElementById("hinh").value;

    let danhMuc = Number(document.getElementById("danhMuc").value);

    let moTa = document.getElementById("moTa").value;

    if(id == ""){

        let spMoi = {

            id: sanPham.length == 0 ? 1 : sanPham[sanPham.length-1].id + 1,

            ten: ten,

            gia: gia,

            hinh: hinh,

            danhMuc: danhMuc,

            moTa: moTa

        };

        sanPham.push(spMoi);

    }else{

        let sp = sanPham.find(function(item){

            return item.id == id;

        });

        sp.ten = ten;
        sp.gia = gia;
        sp.hinh = hinh;
        sp.danhMuc = danhMuc;
        sp.moTa = moTa;

    }

    localStorage.setItem("sanPham", JSON.stringify(sanPham));

    hienThiSanPham();

    form.reset();

    document.getElementById("id").value = "";

});

function suaSanPham(id){

    let sp = sanPham.find(function(item){

        return item.id == id;

    });

    document.getElementById("id").value = sp.id;

    document.getElementById("ten").value = sp.ten;

    document.getElementById("gia").value = sp.gia;

    document.getElementById("hinh").value = sp.hinh;

    document.getElementById("danhMuc").value = sp.danhMuc;

    document.getElementById("moTa").value = sp.moTa;

}

function xoaSanPham(id){

    if(confirm("Bạn có chắc muốn xóa?")){

        sanPham = sanPham.filter(function(item){

            return item.id != id;

        });

        localStorage.setItem("sanPham", JSON.stringify(sanPham));

        hienThiSanPham();

    }

}
const selectDanhMuc = document.getElementById("danhMuc");

danhMuc.forEach(function(dm){

    selectDanhMuc.innerHTML += `
        <option value="${dm.id}">
            ${dm.ten}
        </option>
    `;

});
//=====================
// QUẢN LÝ NGƯỜI DÙNG
//=====================

let dsNguoiDung =
JSON.parse(localStorage.getItem("nguoiDung")) || nguoiDung;

const bangNguoiDung =
document.getElementById("bangNguoiDung");

function hienThiNguoiDung(){

    bangNguoiDung.innerHTML="";

    dsNguoiDung.forEach(function(user){

        bangNguoiDung.innerHTML += `

        <tr>

            <td>${user.id}</td>

            <td>${user.hoTen}</td>

            <td>${user.email}</td>

            <td>${user.quyen}</td>

            <td>

                ${
                    user.quyen=="admin"
                    ?
                    ""
                    :
                    `<button onclick="xoaNguoiDung(${user.id})">
                        Xóa
                    </button>`
                }

            </td>

        </tr>

        `;

    });

}

hienThiNguoiDung();

function xoaNguoiDung(id){

    if(confirm("Bạn muốn xóa người dùng này?")){

        dsNguoiDung =
        dsNguoiDung.filter(function(user){

            return user.id != id;

        });

        localStorage.setItem(

            "nguoiDung",

            JSON.stringify(dsNguoiDung)

        );

        hienThiNguoiDung();

    }

}
//======================
// QUẢN LÝ DANH MỤC
//======================

if(!localStorage.getItem("danhMuc")){

    localStorage.setItem(
        "danhMuc",
        JSON.stringify(danhMuc)
    );

}

let dsDanhMuc =
JSON.parse(localStorage.getItem("danhMuc"));

const bangDanhMuc =
document.getElementById("bangDanhMuc");

const formDanhMuc =
document.getElementById("formDanhMuc");

function hienThiDanhMuc(){

    bangDanhMuc.innerHTML="";

    dsDanhMuc.forEach(function(dm){

        bangDanhMuc.innerHTML +=`

        <tr>

            <td>${dm.id}</td>

            <td>${dm.ten}</td>

            <td>

                <button onclick="suaDanhMuc(${dm.id})">

                    Sửa

                </button>

                <button onclick="xoaDanhMuc(${dm.id})">

                    Xóa

                </button>

            </td>

        </tr>

        `;

    });

}

hienThiDanhMuc();
formDanhMuc.addEventListener("submit",function(e){

    e.preventDefault();

    let id=document.getElementById("idDanhMuc").value;

    let ten=document.getElementById("tenDanhMuc").value;

    if(id==""){

        dsDanhMuc.push({

            id:dsDanhMuc.length+1,

            ten:ten

        });

    }else{

        let dm=dsDanhMuc.find(function(item){

            return item.id==id;

        });

        dm.ten=ten;

    }

    localStorage.setItem(

        "danhMuc",

        JSON.stringify(dsDanhMuc)

    );

    formDanhMuc.reset();

    document.getElementById("idDanhMuc").value="";

    hienThiDanhMuc();

});
function suaDanhMuc(id){

    let dm=dsDanhMuc.find(function(item){

        return item.id==id;

    });

    document.getElementById("idDanhMuc").value=dm.id;

    document.getElementById("tenDanhMuc").value=dm.ten;

}
function xoaDanhMuc(id){

    if(confirm("Bạn muốn xóa?")){

        dsDanhMuc=dsDanhMuc.filter(function(item){

            return item.id!=id;

        });

        localStorage.setItem(

            "danhMuc",

            JSON.stringify(dsDanhMuc)

        );

        hienThiDanhMuc();

    }

}
//========================
// QUẢN LÝ ĐÁNH GIÁ
//========================

if(!localStorage.getItem("danhGia")){

    localStorage.setItem(
        "danhGia",
        JSON.stringify(danhGia)
    );

}

let dsDanhGia =
JSON.parse(localStorage.getItem("danhGia"));

const bangDanhGia =
document.getElementById("bangDanhGia");

function hienThiDanhGia(){

    bangDanhGia.innerHTML="";

    dsDanhGia.forEach(function(dg){

        bangDanhGia.innerHTML +=`

        <tr>

            <td>${dg.id}</td>

            <td>${dg.sanPham}</td>

            <td>${dg.nguoiDung}</td>

            <td>${dg.noiDung}</td>

            <td>

                <button onclick="xoaDanhGia(${dg.id})">

                    Xóa

                </button>

            </td>

        </tr>

        `;

    });

}

hienThiDanhGia();
function xoaDanhGia(id){

    if(confirm("Bạn muốn xóa đánh giá này?")){

        dsDanhGia =
        dsDanhGia.filter(function(item){

            return item.id != id;

        });

        localStorage.setItem(

            "danhGia",

            JSON.stringify(dsDanhGia)

        );

        hienThiDanhGia();

    }

}
//=========================
// THỐNG KÊ
//=========================

function thongKe(){

    document.getElementById("tongSanPham").innerHTML =
        sanPham.length;

    document.getElementById("tongNguoiDung").innerHTML =
        dsNguoiDung.length;

    document.getElementById("tongDanhMuc").innerHTML =
        dsDanhMuc.length;

    document.getElementById("tongDanhGia").innerHTML =
        dsDanhGia.length;

    let donHang =
        JSON.parse(localStorage.getItem("donHang")) || [];

    document.getElementById("tongDonHang").innerHTML =
        donHang.length;

}

thongKe();
//========================
// QUẢN LÝ ĐƠN HÀNG
//========================

let dsDonHang =
JSON.parse(localStorage.getItem("donHang")) || [];

const bangDonHang =
document.getElementById("bangDonHang");

function hienThiDonHang(){

    bangDonHang.innerHTML = "";

    dsDonHang.forEach(function(dh){

        bangDonHang.innerHTML += `

        <tr>

            <td>${dh.id}</td>

            <td>${dh.khachHang}</td>

            <td>${dh.soLuong}</td>

            <td>${dh.tongTien.toLocaleString()} đ</td>

            <td>${dh.trangThai}</td>

            <td>

                <button onclick="doiTrangThai(${dh.id})">

                    Đổi trạng thái

                </button>

                <button onclick="xoaDonHang(${dh.id})">

                    Xóa

                </button>

            </td>

        </tr>

        `;

    });

}

hienThiDonHang();
function doiTrangThai(id){

    let dh = dsDonHang.find(function(item){

        return item.id == id;

    });

    if(dh.trangThai=="Chờ xác nhận"){

        dh.trangThai="Đang giao";

    }else if(dh.trangThai=="Đang giao"){

        dh.trangThai="Đã giao";

    }

    localStorage.setItem(

        "donHang",

        JSON.stringify(dsDonHang)

    );

    hienThiDonHang();

    thongKe();

}
function xoaDonHang(id){

    if(confirm("Bạn muốn xóa đơn hàng?")){

        dsDonHang =
        dsDonHang.filter(function(item){

            return item.id != id;

        });

        localStorage.setItem(

            "donHang",

            JSON.stringify(dsDonHang)

        );

        hienThiDonHang();

        thongKe();

    }

}
//=========================
// QUẢN LÝ GÓP Ý
//=========================

let dsGopY =
JSON.parse(localStorage.getItem("gopY")) || [];

const bangGopY =
document.getElementById("bangGopY");

function hienThiGopY(){

bangGopY.innerHTML="";

dsGopY.forEach(function(gy){

bangGopY.innerHTML +=`

<tr>

<td>${gy.id}</td>

<td>${gy.hoTen}</td>

<td>${gy.email}</td>

<td>${gy.noiDung}</td>

<td>

<button onclick="xoaGopY(${gy.id})">

Xóa

</button>

</td>

</tr>

`;

});

}

hienThiGopY();

function xoaGopY(id){

if(confirm("Bạn muốn xóa góp ý?")){

dsGopY=dsGopY.filter(function(item){

return item.id!=id;

});

localStorage.setItem(

"gopY",

JSON.stringify(dsGopY)

);

hienThiGopY();

}

}