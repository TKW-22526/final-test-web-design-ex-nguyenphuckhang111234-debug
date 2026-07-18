taiKhoan =
JSON.parse(localStorage.getItem("taiKhoan"));

if(!taiKhoan){

alert("Bạn chưa đăng nhập.");

location.href="dang-nhap.html";

}

document.getElementById("hoTen").value =
taiKhoan.hoTen;

document.getElementById("email").value =
taiKhoan.email;

document
.getElementById("formHoSo")
.addEventListener("submit",function(e){

e.preventDefault();

taiKhoan.hoTen =
document.getElementById("hoTen").value;

let mk =
document.getElementById("matKhau").value;

if(mk!=""){

taiKhoan.matKhau=mk;

}

localStorage.setItem(

"taiKhoan",

JSON.stringify(taiKhoan)

);

let ds =
JSON.parse(localStorage.getItem("nguoiDung"));

let user =
ds.find(function(item){

return item.id==taiKhoan.id;

});

user.hoTen=taiKhoan.hoTen;

user.matKhau=taiKhoan.matKhau;

localStorage.setItem(

"nguoiDung",

JSON.stringify(ds)

);

alert("Cập nhật thành công.");

});
let dsDonHang =
JSON.parse(localStorage.getItem("donHang")) || [];

const bang =
document.getElementById("bangLichSu");

dsDonHang
.filter(function(item){

return item.khachHang==taiKhoan.hoTen;

})

.forEach(function(dh){

bang.innerHTML +=`

<tr>

<td>${dh.id}</td>

<td>${dh.soLuong}</td>

<td>${dh.tongTien.toLocaleString()} đ</td>

<td>${dh.trangThai}</td>

</tr>

`;

});