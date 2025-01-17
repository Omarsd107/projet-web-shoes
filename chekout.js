let prix=localStorage.getItem("prix3");
document.getElementById("prix").textContent="$"+prix;
document.getElementById("tot").textContent="$"+(Number(prix)+10).toString();