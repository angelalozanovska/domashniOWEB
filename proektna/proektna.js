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
spanl1=0;
function like(){
    spanl1++;
    document.getElementById('spanl').textContent=spanl1;
}
function update(){
    const comment = document.getElementById('comment');
    const tvoj = document.getElementById('tvoj');
    tvoj.textContent = comment.value;
}