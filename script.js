// Schimbarea imaginii și textului pe pagina principală
function changeMainImage(imagePath, imageText) {
  // Se schimbă imaginea mare de pe pagina principală
  document.getElementById("main-image").src = imagePath;
  // Se schimbă textul de sub imaginea mare de pe pagina principală
  document.getElementById("main-image-text").innerText = imageText;
}

// Fixarea barei de navigație în partea de sus a ecranului
window.onscroll = function() {
  // Se selectează bara de navigație
  var navBar = document.getElementById("navbar");
  // Se verifică dacă utilizatorul a derulat pagina mai jos de partea de sus a barei de navigație
  if (window.pageYOffset > navBar.offsetTop) {
      // Se adaugă clasa "fixed" pentru a face bara de navigație fixă
      navBar.classList.add("fixed");
  } else {
      // Se elimină clasa "fixed" dacă utilizatorul a derulat pagina înapoi sus
      navBar.classList.remove("fixed");
  }
}
