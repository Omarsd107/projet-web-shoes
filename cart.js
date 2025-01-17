
let tableau=document.getElementById("cart-table").querySelector("tbody");
let img=localStorage.getItem("showdt1");
let name=localStorage.getItem("showdt2");
let prix=localStorage.getItem("showdt3");
let nligne=document.createElement("tr");
let colonneimg=document.createElement("td");
let cltext=document.createElement("td");
let clprix=document.createElement("td");
let clquantity=document.createElement("td");
let cltot1=document.createElement("td");
let image=document.createElement("img");
let text=document.createElement("p");
let prixu=document.createElement("p");
let quantyty=document.createElement("input");
//let dolar=document.createElement("p");
let tot1=document.createElement("p");
image.src=img;
text.textContent=name;
prixu.textContent='$'+prix;
quantyty.type="number";
quantyty.value="1";
quantyty.min="1";
quantyty.style.width="50px";
quantyty.id="quan";
//dolar="$";
quantyty.addEventListener("input",function() {
    let qq=parseInt(quantyty.value,10) || 0;
    tot1.textContent=prix*qq.toString();
})
//let qq=parseInt(quantyty.value,10);
tot1.textContent="$"+tot1.textContent;
colonneimg.appendChild(image);
cltext.appendChild(text);
clprix.appendChild(prixu);
clquantity.appendChild(quantyty);
//cltot1.appendChild(dolar);
cltot1.appendChild(tot1);
nligne.appendChild(colonneimg);
nligne.appendChild(cltext);
nligne.appendChild(clprix);
nligne.appendChild(clquantity);
nligne.append(cltot1);
tableau.appendChild(nligne);
quantyty.dispatchEvent(new Event("input"));
function chekout() {
    localStorage.setItem("prix3",tot1.textContent);
    window.location.href="checkout bage.html";
}
