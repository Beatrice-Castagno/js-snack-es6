/* Scrivere una funzione che accetti tre argomenti, un array e due numeri
(a più piccolo di b). La funzione ritornerà un nuovo array con i valori
 che hanno la posizione compresa tra i due numeri. */
 
function returnNewArray (array, a, b) {
  const newArray = [];
  for (let i = 0; i <array.length; i++) {
    if (i>= a && i<= b) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const numeri = [1,2,3,4,5];
const numAggiornati = returnNewArray(numeri, 1, 5);
console.log(numAggiornati);
