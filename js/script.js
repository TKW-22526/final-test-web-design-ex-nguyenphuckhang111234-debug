// =========================
// AI Classroom JavaScript
// =========================

// Khi nhấn nút "Bắt đầu"
function welcome() {
    alert("Chào mừng bạn đến với Website AI Classroom!");

    // Chuyển sang trang quản lý lớp
    window.location.href = "html/san-pham.html";
}

// Hiển thị thời gian hiện tại
function showTime() {
    const now = new Date();

    const time =
        now.getHours().toString().padStart(2, "0") + ":" +
        now.getMinutes().toString().padStart(2, "0") + ":" +
        now.getSeconds().toString().padStart(2, "0");

    const box = document.getElementById("time");

    if (box) {
        box.innerHTML = "🕒 " + time;
    }
}

setInterval(showTime, 1000);

// Kiểm tra ô tìm kiếm
function searchClass() {

    let keyword = document.getElementById("search");

    if (keyword == null) return;

    if (keyword.value.trim() == "") {

        alert("Vui lòng nhập tên lớp cần tìm.");

    }
    else {

        alert("Đang tìm lớp: " + keyword.value);

    }

}

// Thông báo khi mở website
console.log("AI Classroom đã khởi động.");
// ===============================
// QUẢN LÝ LỚP HỌC
// ===============================

let classData =
JSON.parse(localStorage.getItem("classData")) || [];

function renderClass(){

let html="";

classData.forEach(function(item,index){

html+=`

<tr>

<td>${index+1}</td>

<td>${item}</td>

<td>

<button onclick="deleteClass(${index})">

Xóa

</button>

</td>

</tr>

`;

});

let table=document.getElementById("classList");

if(table){

table.innerHTML=html;

}

}

function addClass(){

let name=document.getElementById("className").value;

if(name.trim()==""){

alert("Vui lòng nhập tên lớp");

return;

}

classData.push(name);

localStorage.setItem("classData",JSON.stringify(classData));

document.getElementById("className").value="";

renderClass();

}

function deleteClass(index){

if(confirm("Bạn có chắc muốn xóa?")){

classData.splice(index,1);

localStorage.setItem("classData",JSON.stringify(classData));

renderClass();

}

}

renderClass();
//=============================
// QUẢN LÝ SINH VIÊN
//=============================

let students =
JSON.parse(localStorage.getItem("students")) || [];

function renderStudent(){

let html="";

students.forEach(function(item,index){

html+=`

<tr>

<td>${index+1}</td>

<td>${item.id}</td>

<td>${item.name}</td>

<td>${item.class}</td>

<td>

<button onclick="deleteStudent(${index})">

Xóa

</button>

</td>

</tr>

`;

});

let table=document.getElementById("studentList");

if(table){

table.innerHTML=html;

}

}

function addStudent(){

let id=document.getElementById("studentID").value;

let name=document.getElementById("studentName").value;

let lop=document.getElementById("studentClass").value;

if(id==""||name==""||lop==""){

alert("Vui lòng nhập đầy đủ thông tin");

return;

}

students.push({

id:id,

name:name,

class:lop

});

localStorage.setItem("students",JSON.stringify(students));

document.getElementById("studentID").value="";

document.getElementById("studentName").value="";

document.getElementById("studentClass").value="";

renderStudent();

}

function deleteStudent(index){

if(confirm("Bạn muốn xóa sinh viên này?")){

students.splice(index,1);

localStorage.setItem("students",JSON.stringify(students));

renderStudent();

}

}

renderStudent();
//===========================
// QUẢN LÝ ĐIỂM
//===========================

let scores =
JSON.parse(localStorage.getItem("scores")) || [];

function renderScore(){

let html="";

scores.forEach(function(item,index){

html+=`

<tr>

<td>${index+1}</td>

<td>${item.id}</td>

<td>${item.subject}</td>

<td>${item.score}</td>

<td>

<button onclick="deleteScore(${index})">

Xóa

</button>

</td>

</tr>

`;

});

let table=document.getElementById("scoreList");

if(table){

table.innerHTML=html;

}

}

function addScore(){

let id=document.getElementById("scoreID").value;

let subject=document.getElementById("subject").value;

let score=document.getElementById("score").value;

if(id==""||subject==""||score==""){

alert("Vui lòng nhập đầy đủ thông tin");

return;

}

scores.push({

id:id,

subject:subject,

score:score

});

localStorage.setItem("scores",JSON.stringify(scores));

document.getElementById("scoreID").value="";

document.getElementById("subject").value="";

document.getElementById("score").value="";

renderScore();

}

function deleteScore(index){

if(confirm("Bạn có chắc muốn xóa?")){

scores.splice(index,1);

localStorage.setItem("scores",JSON.stringify(scores));

renderScore();

}

}

renderScore();
//========================
// DASHBOARD
//========================

function loadDashboard(){

let classData =
JSON.parse(localStorage.getItem("classData")) || [];

let students =
JSON.parse(localStorage.getItem("students")) || [];

let scores =
JSON.parse(localStorage.getItem("scores")) || [];

let total=0;

scores.forEach(function(item){

total+=Number(item.score);

});

let avg=0;

if(scores.length>0){

avg=(total/scores.length).toFixed(2);

}

if(document.getElementById("totalClass")){

document.getElementById("totalClass").innerHTML=classData.length;

}

if(document.getElementById("totalStudent")){

document.getElementById("totalStudent").innerHTML=students.length;

}

if(document.getElementById("totalScore")){

document.getElementById("totalScore").innerHTML=scores.length;

}

if(document.getElementById("avgScore")){

document.getElementById("avgScore").innerHTML=avg;

}

}

loadDashboard();
//=========================
// AI CHATBOT
//=========================

function sendQuestion() {

    let input = document.getElementById("question");
    let chat = document.getElementById("chatBox");

    if (!input || !chat) return;

    let question = input.value.trim();

    if (question === "") {
        alert("Vui lòng nhập câu hỏi!");
        return;
    }

    chat.innerHTML += "<p><b>Bạn:</b> " + question + "</p>";

    let answer = "";

    let q = question.toLowerCase();

    if (q.includes("xin chào")) {

        answer = "Xin chào! Chúc bạn học tập thật tốt.";

    } else if (q.includes("lớp")) {

        answer = "Bạn hãy vào mục Quản lý lớp học.";

    } else if (q.includes("sinh viên")) {

        answer = "Bạn hãy vào mục Quản lý sinh viên.";

    } else if (q.includes("điểm")) {

        answer = "Bạn hãy vào mục Quản lý điểm.";

    } else if (q.includes("ai")) {

        answer = "Tôi là AI Classroom Chatbot.";

    } else {

        answer = "Xin lỗi, tôi chưa hiểu câu hỏi này.";

    }

    chat.innerHTML += "<p><b>AI:</b> " + answer + "</p>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}