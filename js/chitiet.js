/*==================================================
    WEBSITE ĐẶC SẢN SÓC TRĂNG
    FILE: chitiet.js
==================================================*/


/*==================================================
    KHAI BÁO BIẾN
==================================================*/

const hinhSanPham = document.getElementById("hinhSanPham");

const tenSanPham = document.getElementById("tenSanPham");

const giaSanPham = document.getElementById("giaSanPham");

const moTaSanPham = document.getElementById("moTaSanPham");

const tenDanhMuc = document.getElementById("tenDanhMuc");

const xuatXuSanPham = document.getElementById("xuatXuSanPham");

const thuongHieuSanPham = document.getElementById("thuongHieuSanPham");

const thanhPhanSanPham = document.getElementById("thanhPhanSanPham");

const quyCachSanPham = document.getElementById("quyCachSanPham");

const hanSuDungSanPham = document.getElementById("hanSuDungSanPham");

const baoQuanSanPham = document.getElementById("baoQuanSanPham");

const huongDanSanPham = document.getElementById("huongDanSanPham");

const btnThemGio = document.getElementById("btnThemGio");

const btnYeuThich = document.getElementById("btnYeuThich");

const danhSachDanhGia = document.getElementById("danhSachDanhGia");

const sanPhamLienQuan = document.getElementById("sanPhamLienQuan");

const soLuongGio = document.getElementById("soLuongGio");


/*==================================================
    LẤY ID TỪ URL
==================================================*/

const thamSo = new URLSearchParams(window.location.search);

const id = Number(thamSo.get("id"));


/*==================================================
    TÌM SẢN PHẨM
==================================================*/

const sp = timSanPhamTheoID(id);

if (!sp) {

    alert("Không tìm thấy sản phẩm.");

    window.location.href = "san-pham.html";

}


/*==================================================
    HIỂN THỊ CHI TIẾT
==================================================*/

function hienThiChiTiet() {

    hinhSanPham.src = "../assets/img/" + sp.hinh;

    tenSanPham.innerHTML = sp.ten;

    giaSanPham.innerHTML =

        sp.gia.toLocaleString()

        +

        " đ";

    moTaSanPham.innerHTML = sp.moTa;

    let dm = timDanhMuc(sp.danhMuc);

    if (dm) {

        tenDanhMuc.innerHTML = dm.ten;

    }

    xuatXuSanPham.innerHTML = sp.xuatXu || "Đang cập nhật";

    thuongHieuSanPham.innerHTML = sp.thuongHieu || "Đang cập nhật";

    thanhPhanSanPham.innerHTML = sp.thanhPhan || "Đang cập nhật";

    quyCachSanPham.innerHTML = sp.quyCach || "Đang cập nhật";

    hanSuDungSanPham.innerHTML = sp.hanSuDung || "Đang cập nhật";

    baoQuanSanPham.innerHTML = sp.baoQuan || "Đang cập nhật";

    huongDanSanPham.innerHTML = sp.huongDan || "Đang cập nhật";

}


/*==================================================
    HIỂN THỊ GIỎ HÀNG
==================================================*/

function capNhatSoLuongGio() {

    let gioHang = docDuLieu("gioHang") || [];

    let tong = 0;

    gioHang.forEach(function (item) {

        tong += item.soLuong;

    });

    soLuongGio.innerHTML = tong;

}


/*==================================================
    HIỂN THỊ ĐÁNH GIÁ
==================================================*/

function hienThiDanhGia() {

    danhSachDanhGia.innerHTML = "";

    let ds = danhGia.filter(function (item) {

        return item.sanPham == sp.id;

    });

    if (ds.length == 0) {

        danhSachDanhGia.innerHTML =

            "<p>Chưa có đánh giá.</p>";

        return;

    }

    ds.forEach(function (item) {

        danhSachDanhGia.innerHTML += `

<div class="danhGia">

<h4>

${item.nguoiDung}

</h4>

<p>

⭐ ${item.sao}/5

</p>

<p>

${item.noiDung}

</p>

<hr>

</div>

`;

    });

}


/*==================================================
    HIỂN THỊ SẢN PHẨM LIÊN QUAN
==================================================*/

function hienThiLienQuan() {

    sanPhamLienQuan.innerHTML = "";

    let ds = sanPham.filter(function (item) {

        return item.danhMuc == sp.danhMuc

            &&

            item.id != sp.id;

    });

    ds.slice(0,4).forEach(function(item){

        sanPhamLienQuan.innerHTML += `

<div class="sanPham">

<img src="../assets/img/${item.hinh}">

<h3>

${item.ten}

</h3>

<h4>

${item.gia.toLocaleString()} đ

</h4>

<a href="chi-tiet.html?id=${item.id}">

<button>

Xem chi tiết

</button>

</a>

</div>

`;

    });

}
/*==================================================
    THÊM VÀO GIỎ HÀNG
==================================================*/

function themGioHang() {

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
    THÊM YÊU THÍCH
==================================================*/

function themYeuThich() {

    let ds = docDuLieu("yeuThich") || [];

    let tonTai = ds.find(function (item) {

        return item.id == sp.id;

    });

    if (tonTai) {

        alert("Sản phẩm đã có trong danh sách yêu thích.");

        return;

    }

    ds.push(sp);

    luuDuLieu("yeuThich", ds);

    alert("Đã thêm vào yêu thích.");

}


/*==================================================
    GẮN SỰ KIỆN NÚT
==================================================*/

btnThemGio.addEventListener("click", function () {

    themGioHang();

});

btnYeuThich.addEventListener("click", function () {

    themYeuThich();

});


/*==================================================
    CẬP NHẬT KHI LOCALSTORAGE THAY ĐỔI
==================================================*/

window.addEventListener("storage", function () {

    capNhatSoLuongGio();

});


/*==================================================
    KHỞI TẠO TRANG
==================================================*/

window.addEventListener("load", function () {

    hienThiChiTiet();

    hienThiDanhGia();

    hienThiLienQuan();

    capNhatSoLuongGio();

});


/*==================================================
    KẾT THÚC FILE
==================================================*/