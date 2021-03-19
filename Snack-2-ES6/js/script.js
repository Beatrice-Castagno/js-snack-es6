// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squadre = [
{
  nome: "Milan",
  punti: 0,
  falli: 0
},
{
  nome: "Inter",
  punti: 0,
  falli: 0
},
{
  nome: "Genoa",
  punti: 0,
  falli: 0
},
{
  nome: "Palermo",
  punti: 0,
  falli: 0
},
];

function numRandom(min, max) {
  let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return numRandom;
}

for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = numRandom(1, 100);
  squadre[i].falli = numRandom(1, 100);
}

console.log(squadre);

const squadre2 = [];

for (let i = 0; i < squadre.length; i++) {
  const {nome, falli} = squadre[i];

  squadre2 .push({
    nome: squadre[i].nome,
    falli: squadre[i].falli
  });
}

console.log(squadre2);
