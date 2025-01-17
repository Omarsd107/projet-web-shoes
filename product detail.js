
let img=localStorage.getItem("showdt1");
let name=localStorage.getItem("showdt2");
let prix=localStorage.getItem("showdt3");
document.getElementById("a1").src=img;
document.getElementById("a2").textContent=name;
document.getElementById("a3").textContent=prix;

function addtocart() {
    let img=document.getElementById("a1").src;
    let name=document.getElementById("a2").textContent;
    let prix=document.getElementById("a3").textContent;
    localStorage.setItem("showdt1",img);
    localStorage.setItem("showdt2",name);
    localStorage.setItem("showdt3",prix);
    window.location.href="cart page.html";
}