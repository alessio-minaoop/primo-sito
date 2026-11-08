let contatore = 0;

const numero = document.getElementById("numero");
const bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {
  contatore++;
  numero.textContent = contatore;
});