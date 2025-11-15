const PI = 3.14159;

console.log("Valor de PI:", PI);

let contador = 10;
contador = 20;
console.log("Contador:", contador);

{
    let temporal = 5;
    const fija = 10;
    console.log("Dentro del bloque:", temporal, fija);
}
console.log("Fuera del bloque, contador:", contador);