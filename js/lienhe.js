let gopY =
JSON.parse(localStorage.getItem("gopY")) || [];

document
.getElementById("formLienHe")
.addEventListener("submit",function(e){

e.preventDefault();

let hoTen =
document.getElementById("hoTen").value;

let email =
document.getElementById("email").value;

let noiDung =
document.getElementById("noiDung").value;

gopY.push({

id:gopY.length+1,

hoTen:hoTen,

email:email,

noiDung:noiDung

});

localStorage.setItem(

"gopY",

JSON.stringify(gopY)

);

alert("Đã gửi góp ý.");

this.reset();

});