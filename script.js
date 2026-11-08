function cambiaColore() {
  const colori = ["lightblue", "lightgreen", "pink", "khaki"];
  document.body.style.background = colori[Math.floor(Math.random() * colori.length)];
}