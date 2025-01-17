function show(a,b) {
    let img=document.getElementById(a).src;
    let name=document.getElementById(a).alt;
    let prix=document.getElementById(b).role;
    localStorage.setItem("showdt1",img);
    localStorage.setItem("showdt2",name);
    localStorage.setItem("showdt3",prix);
    window.location.href="product detail.html";
}