/*==================================================
=        WEBSITE ĐẶC SẢN SÓC TRĂNG
=        FILE: du-lieu.js
==================================================*/


/*==================================================
=        KIỂM TRA PHIÊN BẢN DỮ LIỆU
=        (Tự xoá dữ liệu sản phẩm cũ trong
=        localStorage khi du-lieu.js được cập nhật,
=        tránh tình trạng mất thông tin mới do
=        trình duyệt còn lưu dữ liệu cũ)
==================================================*/

const PHIEN_BAN_DU_LIEU = "2";

if (localStorage.getItem("phienBanDuLieu") !== PHIEN_BAN_DU_LIEU) {

    localStorage.removeItem("sanPham");

    localStorage.setItem("phienBanDuLieu", PHIEN_BAN_DU_LIEU);

}


/*==================================================
=        KHỞI TẠO DỮ LIỆU NGƯỜI DÙNG
==================================================*/

let nguoiDung = JSON.parse(localStorage.getItem("nguoiDung"));

if (nguoiDung == null) {

    nguoiDung = [

        {
            id: 1,
            hoTen: "Quản trị viên",
            email: "admin@gmail.com",
            matKhau: "123456",
            quyen: "admin"
        },

        {
            id: 2,
            hoTen: "Nguyễn Văn A",
            email: "user@gmail.com",
            matKhau: "123456",
            quyen: "user"
        }

    ];

    localStorage.setItem(
        "nguoiDung",
        JSON.stringify(nguoiDung)
    );

}


/*==================================================
=        TÀI KHOẢN ĐANG ĐĂNG NHẬP
==================================================*/

let taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));

if (taiKhoan == null) {

    taiKhoan = null;

}


/*==================================================
=        KHỞI TẠO DANH MỤC
==================================================*/

let danhMuc = JSON.parse(localStorage.getItem("danhMuc"));

if (danhMuc == null) {

    danhMuc = [

        {
            id: 1,
            ten: "Bánh"
        },

        {
            id: 2,
            ten: "Khô"
        },

        {
            id: 3,
            ten: "Mắm"
        },

        {
            id: 4,
            ten: "Gạo"
        },

        {
            id: 5,
            ten: "Đồ uống"
        },

        {
            id: 6,
            ten: "Đặc sản khác"
        }

    ];

    localStorage.setItem(
        "danhMuc",
        JSON.stringify(danhMuc)
    );

}


/*==================================================
=        HÀM LẤY ID MỚI
==================================================*/

function taoID(mang) {

    if (mang.length == 0) {

        return 1;

    }

    let max = mang[0].id;

    mang.forEach(function (item) {

        if (item.id > max) {

            max = item.id;

        }

    });

    return max + 1;

}


/*==================================================
=        HÀM LƯU LOCAL STORAGE
==================================================*/

function luuDuLieu(ten, duLieu) {

    localStorage.setItem(

        ten,

        JSON.stringify(duLieu)

    );

}


/*==================================================
=        HÀM ĐỌC LOCAL STORAGE
==================================================*/

function docDuLieu(ten) {

    return JSON.parse(

        localStorage.getItem(ten)

    );

}
/*==================================================
=        KHỞI TẠO DỮ LIỆU SẢN PHẨM
==================================================*/

let sanPham = JSON.parse(localStorage.getItem("sanPham"));

if (sanPham == null) {

    sanPham = [

        {
            id: 1,
            ten: "Bánh Pía",
            gia: 90000,
            hinh: "banh-pia-ngon-8-1741477298.jpg",
            danhMuc: 1,
            moTa: "Bánh pía truyền thống Sóc Trăng với nhân đậu xanh, sầu riêng và trứng muối.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản Sóc Trăng",
            thanhPhan: "Bột mì, đậu xanh, sầu riêng, trứng muối, đường, dầu thực vật.",
            baoQuan: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sau khi mở nên bảo quản trong ngăn mát tủ lạnh.",
            hanSuDung: "45 ngày kể từ ngày sản xuất.",
            quyCach: "Hộp 500g (8–10 bánh).",
            huongDan: "Dùng trực tiếp hoặc hâm nóng bằng lò vi sóng khoảng 15–20 giây trước khi thưởng thức."
        },

        {
            id: 2,
            ten: "Bánh In",
            gia: 60000,
            hinh: "banh-in-co-co-soc-trang-ngot-ngao-huong-vi-mien-tay-4-1663947184.jpg",
            danhMuc: 1,
            moTa: "Bánh in truyền thống được làm từ nếp và đậu xanh.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản Khmer",
            thanhPhan: "Bột nếp rang, đậu xanh, đường cát, vani.",
            baoQuan: "Để nơi khô ráo, tránh nơi có độ ẩm cao.",
            hanSuDung: "60 ngày kể từ ngày sản xuất.",
            quyCach: "Hộp 400g.",
            huongDan: "Dùng trực tiếp, ngon hơn khi dùng cùng trà nóng."
        },

        {
            id: 3,
            ten: "Bánh Cống",
            gia: 50000,
            hinh: "review-banh-cong-soc-trang-mon-an-duoc-nhieu-nguoi-yeu-thich-05-1664914225.jpg",
            danhMuc: 1,
            moTa: "Món ăn nổi tiếng của người Khmer ở Sóc Trăng.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản Khmer",
            thanhPhan: "Bột gạo, đậu xanh, thịt heo, tôm tươi, hành lá và gia vị.",
            baoQuan: "Bảo quản trong ngăn mát tủ lạnh nếu chưa dùng ngay.",
            hanSuDung: "2 ngày.",
            quyCach: "Hộp 6 cái.",
            huongDan: "Chiên hoặc làm nóng bằng nồi chiên không dầu trước khi dùng."
        },

        {
            id: 4,
            ten: "Khô Trâu",
            gia: 450000,
            hinh: "nham-nhi-mieng-kho-trau-thanh-tri-mem-ngot-nhin-la-them-02-1664309319.jpg",
            danhMuc: 2,
            moTa: "Khô trâu tẩm gia vị, thơm ngon đặc trưng.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản miền Tây",
            thanhPhan: "Thịt trâu, muối, đường, tiêu, tỏi, ớt và các gia vị truyền thống.",
            baoQuan: "Bảo quản trong ngăn mát hoặc ngăn đông tủ lạnh.",
            hanSuDung: "06 tháng.",
            quyCach: "Gói 500g.",
            huongDan: "Nướng, chiên hoặc quay bằng nồi chiên không dầu trước khi sử dụng."
        },

        {
            id: 5,
            ten: "Khô Cá Sặc",
            gia: 200000,
            hinh: "kho-ca-sac-boi-cm.jpg",
            danhMuc: 2,
            moTa: "Khô cá sặc phơi nắng tự nhiên.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản miền Tây",
            thanhPhan: "Cá sặc, muối, đường, tiêu.",
            baoQuan: "Bảo quản trong ngăn đông tủ lạnh để giữ độ tươi lâu.",
            hanSuDung: "03 tháng.",
            quyCach: "Gói 300g.",
            huongDan: "Chiên hoặc nướng chín trước khi dùng."
        },

        {
            id: 6,
            ten: "Tôm Khô",
            gia: 350000,
            hinh: "tomkho.jpg",
            danhMuc: 2,
            moTa: "Tôm khô loại 1, ngọt tự nhiên.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản miền Tây",
            thanhPhan: "Tôm biển tươi, muối.",
            baoQuan: "Bảo quản nơi khô ráo hoặc ngăn mát tủ lạnh.",
            hanSuDung: "04 tháng.",
            quyCach: "Gói 250g.",
            huongDan: "Dùng để nấu canh, làm gỏi hoặc rang me."
        },

        {
            id: 7,
            ten: "Mắm Bò Hóc",
            gia: 130000,
            hinh: "imagesmambohoc.jpg",
            danhMuc: 3,
            moTa: "Đặc sản nổi tiếng của đồng bào Khmer.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản Khmer",
            thanhPhan: "Cá linh, cá sặc lên men, muối, thính gạo.",
            baoQuan: "Bảo quản trong hũ kín, để nơi thoáng mát hoặc ngăn mát tủ lạnh.",
            hanSuDung: "06 tháng.",
            quyCach: "Hũ 500g.",
            huongDan: "Dùng để nấu bún nước lèo hoặc làm nước chấm."
        },

        {
            id: 8,
            ten: "Gạo ST25",
            gia: 220000,
            hinh: "gao-ong-cua-st25.jpg",
            danhMuc: 4,
            moTa: "Gạo ST25 đạt giải gạo ngon nhất thế giới.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Gạo Ông Cua",
            thanhPhan: "100% gạo ST25 nguyên chất.",
            baoQuan: "Bảo quản nơi khô ráo, thoáng mát, tránh ẩm mốc.",
            hanSuDung: "12 tháng kể từ ngày đóng gói.",
            quyCach: "Túi 5kg.",
            huongDan: "Vo nhẹ và nấu như gạo thông thường."
        },

        {
            id: 9,
            ten: "Lạp Xưởng Sóc Trăng",
            gia: 180000,
            hinh: "imageslapxuong.jpg",
            danhMuc: 6,
            moTa: "Lạp xưởng tươi, vị ngọt đặc trưng.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản Sóc Trăng",
            thanhPhan: "Thịt heo, mỡ heo, rượu mai quế lộ, đường, gia vị.",
            baoQuan: "Bảo quản trong ngăn mát hoặc ngăn đông tủ lạnh.",
            hanSuDung: "03 tháng (ngăn đông), 07 ngày (ngăn mát).",
            quyCach: "Gói 500g.",
            huongDan: "Chiên, nướng hoặc hấp chín trước khi dùng."
        },

        {
            id: 10,
            ten: "Chả Lụa",
            gia: 160000,
            hinh: "chalua.jpg",
            danhMuc: 6,
            moTa: "Chả lụa thơm ngon, dai giòn.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản miền Tây",
            thanhPhan: "Thịt heo xay nhuyễn, nước mắm, tiêu, lá chuối gói.",
            baoQuan: "Bảo quản trong ngăn mát tủ lạnh.",
            hanSuDung: "05 ngày.",
            quyCach: "Đòn 500g.",
            huongDan: "Dùng trực tiếp hoặc chiên sơ trước khi ăn."
        },

        {
            id: 11,
            ten: "Nước Mắm Cá Linh",
            gia: 120000,
            hinh: "nuoc-mam-ca-linh-truyen-thong-utmy-dacsanmientay-2.jpg",
            danhMuc: 3,
            moTa: "Nước mắm truyền thống đậm đà.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản miền Tây",
            thanhPhan: "Cá linh, muối biển, đường.",
            baoQuan: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
            hanSuDung: "18 tháng kể từ ngày sản xuất.",
            quyCach: "Chai 500ml.",
            huongDan: "Dùng để chấm hoặc nêm nếm các món ăn."
        },

        {
            id: 12,
            ten: "Mật Ong Rừng",
            gia: 250000,
            hinh: "matongrung.jpg",
            danhMuc: 5,
            moTa: "Mật ong nguyên chất từ rừng tự nhiên.",
            xuatXu: "Sóc Trăng, Việt Nam",
            thuongHieu: "Đặc sản miền Tây",
            thanhPhan: "100% mật ong nguyên chất từ rừng tự nhiên.",
            baoQuan: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
            hanSuDung: "24 tháng kể từ ngày thu hoạch.",
            quyCach: "Chai 500ml.",
            huongDan: "Dùng trực tiếp hoặc pha cùng nước ấm, trà."
        }

    ];

    localStorage.setItem("sanPham", JSON.stringify(sanPham));

}
/*==================================================
=        GIỎ HÀNG
==================================================*/

let gioHang = JSON.parse(localStorage.getItem("gioHang"));

if (gioHang == null) {

    gioHang = [];

    luuDuLieu("gioHang", gioHang);

}


/*==================================================
=        ĐƠN HÀNG
==================================================*/

let donHang = JSON.parse(localStorage.getItem("donHang"));

if (donHang == null) {

    donHang = [];

    luuDuLieu("donHang", donHang);

}


/*==================================================
=        YÊU THÍCH
==================================================*/

let yeuThich = JSON.parse(localStorage.getItem("yeuThich"));

if (yeuThich == null) {

    yeuThich = [];

    luuDuLieu("yeuThich", yeuThich);

}


/*==================================================
=        ĐÁNH GIÁ
==================================================*/

let danhGia = JSON.parse(localStorage.getItem("danhGia"));

if (danhGia == null) {

    danhGia = [

        {
            id:1,
            sanPham:1,
            nguoiDung:"Nguyễn Văn A",
            sao:5,
            noiDung:"Bánh rất ngon và thơm."
        },

        {
            id:2,
            sanPham:4,
            nguoiDung:"Trần Văn B",
            sao:4,
            noiDung:"Khô trâu ngon, giao hàng nhanh."
        }

    ];

    luuDuLieu("danhGia", danhGia);

}


/*==================================================
=        GÓP Ý
==================================================*/

let gopY = JSON.parse(localStorage.getItem("gopY"));

if (gopY == null) {

    gopY = [];

    luuDuLieu("gopY", gopY);

}


/*==================================================
=        THỐNG KÊ
==================================================*/

function tongSanPham() {

    return sanPham.length;

}

function tongNguoiDung() {

    return nguoiDung.length;

}

function tongDonHang() {

    return donHang.length;

}

function tongDoanhThu() {

    let tong = 0;

    donHang.forEach(function(item){

        tong += item.tongTien;

    });

    return tong;

}


/*==================================================
=        TÌM KIẾM THEO ID
==================================================*/

function timSanPhamTheoID(id){

    return sanPham.find(function(item){

        return item.id == id;

    });

}


function timNguoiDung(id){

    return nguoiDung.find(function(item){

        return item.id == id;

    });

}

function timDanhMuc(id){

    return danhMuc.find(function(item){

        return item.id == id;

    });

}


/*==================================================
=        CẬP NHẬT DỮ LIỆU
==================================================*/

function capNhatSanPham(){

    luuDuLieu("sanPham", sanPham);

}

function capNhatNguoiDung(){

    luuDuLieu("nguoiDung", nguoiDung);

}

function capNhatDanhMuc(){

    luuDuLieu("danhMuc", danhMuc);

}

function capNhatGioHang(){

    luuDuLieu("gioHang", gioHang);

}

function capNhatDonHang(){

    luuDuLieu("donHang", donHang);

}

function capNhatDanhGia(){

    luuDuLieu("danhGia", danhGia);

}

function capNhatYeuThich(){

    luuDuLieu("yeuThich", yeuThich);

}

function capNhatGopY(){

    luuDuLieu("gopY", gopY);

}


/*==================================================
=        RESET DỮ LIỆU (CHỈ DÙNG KHI TEST)
==================================================*/

function resetDuLieu(){

    localStorage.clear();

    location.reload();

}