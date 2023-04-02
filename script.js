let liczba = 1;

function ZmianaSlajdu() {
  let Slajd1 = document.getElementById("Slajd1");
  let Slajd2 = document.getElementById("Slajd2");
  let Slajd3 = document.getElementById("Slajd3");
  let Slajd4 = document.getElementById("Slajd4");
  let Slajd5 = document.getElementById("Slajd5");
  liczba++;
  if (liczba > 5) {
    liczba = 1;
  }
  if (liczba == 1) {
    Slajd1.style.display = "block";
    Slajd2.style.display = "none";
    Slajd3.style.display = "none";
    Slajd4.style.display = "none";
    Slajd5.style.display = "none";
  } else if (liczba == 2) {
    Slajd1.style.display = "none";
    Slajd2.style.display = "block";
    Slajd3.style.display = "none";
    Slajd4.style.display = "none";
    Slajd5.style.display = "none";
  } else if (liczba == 3) {
    Slajd1.style.display = "none";
    Slajd2.style.display = "none";
    Slajd3.style.display = "block";
    Slajd4.style.display = "none";
    Slajd5.style.display = "none";
  } else if (liczba == 4) {
    Slajd1.style.display = "none";
    Slajd2.style.display = "none";
    Slajd3.style.display = "none";
    Slajd4.style.display = "block";
    Slajd5.style.display = "none";
  } else if (liczba == 5) {
    Slajd1.style.display = "none";
    Slajd2.style.display = "none";
    Slajd3.style.display = "none";
    Slajd4.style.display = "none";
    Slajd5.style.display = "block";
  }
}
function ZmianaSlajduWLewo() {
  if (liczba == 1) {
    liczba = 4;

    ZmianaSlajdu();
  } else {
    liczba--;
    liczba--;

    ZmianaSlajdu();
  }
}
