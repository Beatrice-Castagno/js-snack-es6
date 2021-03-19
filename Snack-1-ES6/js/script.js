// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const BICI = [
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

let biciPiuLeggera = BICI[0];

for (let i = 1; i < BICI.length; i++) {
  if (BICI[i].peso < biciPiuLeggera.peso) {
    biciPiuLeggera = BICI[i];
  }
}

const {nome, peso} = biciPiuLeggera;
console.log(`Il nome della bici è  ${nome} e il peso è ${peso}`);
