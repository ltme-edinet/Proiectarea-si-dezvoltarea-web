var slideIndex = 0;
showSlides(); //apelez funcția ce animeaza sliderul

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");  //in .html sunt 3 elemente cu clasa ”mySlides” //cauta elementele dupa clasa data
  var dots = document.getElementsByClassName("dot");  //in .html sunt 3 elemente cu clasa ”dot” // cauta elementele dupa clasa data
  for (i = 0; i < slides.length; i++) {  //returnandu-se o colectie de 3 elemente
    slides[i].style.display = "none";   //se vor parcurge elementele si nu vor fi prezentate
  }
  slideIndex++;                       //incrementez variabila responsabila de indexare
  if (slideIndex > slides.length) {slideIndex = 1}    //se verifica care slide si care bulina i se potriveste
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //pentru fiecare element al slidelui se selecteaza bulina corespunzatoare
  }
  slides[slideIndex-1].style.display = "block";   // succesiv se prezinta slide-urile
  dots[slideIndex-1].className += " active";      // succesiv se activeaza bulina ce corespunde pentru slide-ul dat
  setTimeout(showSlides, 5000); // Schimba imaginea la fiecare 5 secunde
}