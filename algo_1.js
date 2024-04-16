/** Ecris une fonction qui reçois 2 nombres en paramètre
Cette fonction renverra un tableau avec l'ensemble des résultats d'opération
index 0: somme
index 1: soustraction
index 2: multiplication
index 3 : division
*/

const calcul = (a, b) => {
  // Your code here
  // Etape 1, vérifier les paramètres
  console.log("a => ", a);
  console.log("b => ", b);

  // Etape 2, type de return
  return [a + b, a - b, a * b, a / b];
};

console.log(calcul(1, 5)); //[6,-4,5,0,2]
console.log(calcul(2, 8));
console.log(calcul(12, 18));
console.log(calcul(3, 4));
