const passwordbox = document.getElementById("password");
const len = 12;
let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let low = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sym = "!@#$%^&*_<>?/[]{}+-/~=";

let all = cap+low+num+sym;

function createpassword(){
    let password = "";
    password += cap[Math.floor(Math.random() * cap.length)];
    password += low[Math.floor(Math.random() * low.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += sym[Math.floor(Math.random() * sym.length)];

    while(len > password.length){
        password += all[Math.floor(Math.random() * all.length)];
    }
    passwordbox.value = password;
}

let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    createpassword();
});

function copyPassword() {
    passwordbox.select();
    document.execCommand("copy");
}

// select copy image (first img inside display)
let copyImg = document.querySelector(".display img");

copyImg.addEventListener("click", () => {
    copyPassword();
});