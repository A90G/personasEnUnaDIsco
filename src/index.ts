/* • Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(18,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:

• Cuántas personas en total*/
//    • Cuántas personas mayores o igual a 21 años
let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de personas en la disco")
  //prueba de escritorio con 270
);
let edadesArreglo: number[] = new Array(dimensionArreglo);
let contarJovenes: number = 0;
let contarAdultos: number = 0;
let i: number = 0;

function getRandomAge(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (i = 0; i < edadesArreglo.length; i++) {
  edadesArreglo[i] = getRandomAge(41, 18);
  if (edadesArreglo[i] >= 21) {
    //  • Cuántas personas mayores o igual a 21 años
    contarAdultos = contarAdultos + 1;
  } else {
    //    • Cuántas personas son menores de 21 años y mayor a 18
    contarJovenes = contarJovenes + 1;
  }
}

console.log(`Hay ${contarAdultos} adultos`);
console.log(`Hay ${contarJovenes} jóvenes`);
