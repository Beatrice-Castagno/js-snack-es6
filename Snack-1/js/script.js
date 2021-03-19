/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore */

var bici = [
  {
   nome : "Trek",
   peso : "2000",
 },
 {
  nome : "Kona",
  peso : "1000",
},
{
 nome : "Atala",
 peso : "3000"
}
];

var biciPiuLeggera = bici[0];

for (i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciPiuLeggera.peso) {
    biciPiuLeggera = bici[i];
  }
}

console.log(biciPiuLeggera);
