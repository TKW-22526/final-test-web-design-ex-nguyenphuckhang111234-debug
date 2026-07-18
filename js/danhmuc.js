// ==========================================
// QUẢN LÝ DANH MỤC
// ==========================================

// Lấy dữ liệu danh mục

let dsDanhMuc =
JSON.parse(localStorage.getItem("danhMuc")) || danhMuc;


// Lưu dữ liệu

function luuDanhMuc(){

    localStorage.setItem(
        "danhMuc",
        JSON.stringify(dsDanhMuc)
    );

}



// ==========================================
// HIỂN THỊ DANH MỤC
// ==========================================

function hienThiDanhMucAdmin(){

    let tbody =
    document.getElementById("bangDanhMuc");

    if(!tbody) return;

    tbody.innerHTML="";

    dsDanhMuc.forEach((dm,index)=>{

        tbody.innerHTML +=`

        <tr>

            <td>${dm.id}</td>

            <td>${dm.ten}</td>

            <td>

                <button onclick="suaDanhMuc(${index})">

                    Sửa

                </button>

                <button onclick="xoaDanhMuc(${index})">

                    Xóa

                </button>

            </td>

        </tr>

        `;

    });

}



// ==========================================
// THÊM DANH MỤC
// ==========================================

function themDanhMuc(){

    let ten =

    document.getElementById("tenDanhMuc").value.trim();

    if(ten==""){

        alert("Nhập tên danh mục!");

        return;

    }

    dsDanhMuc.push({

        id:Date.now(),

        ten:ten

    });

    luuDanhMuc();

    hienThiDanhMucAdmin();

    document.getElementById("tenDanhMuc").value="";

}