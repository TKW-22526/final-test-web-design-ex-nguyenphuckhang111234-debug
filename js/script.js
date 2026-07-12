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
let images=[

"assets/banner1.jpg",

"assets/banner2.jpg",

"assets/banner3.jpg"

];

let i=0;

setInterval(function(){

i++;

if(i==images.length){

i=0;

}

document.getElementById("slide").src=images[i];

},3000);
function dangNhap(){

alert("Đăng nhập thành công");

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price, image) {
    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}