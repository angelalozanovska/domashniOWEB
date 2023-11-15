function funkcija() {
    var kategoriilista = document.getElementById("lista");
    kategoriilista.classList.toggle("hidden");
}
function funkcija2(){
    var slikichka = document.getElementById("slika");
    if (slikichka.src.includes("kniga.png")) {
        slikichka.src = "knigaa.png";
    } else {
        slikichka.src = "kniga.png";
    }
}

