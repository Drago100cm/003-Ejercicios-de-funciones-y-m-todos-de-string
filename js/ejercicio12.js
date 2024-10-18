/**12. Comprobar si una palabra es un palíndromo
 * 
 * Escribe una función que determine si una palabra es un palíndromo (se lee igual al
revés).
Ejemplo: "ana" → true
 */
let palabra=prompt("ingrese palabra");
let palabraInvertida = palabra.split('').reverse().join('');  // Comprobamos si la palabra es igual a invertida
function esPalindromo(palabra) {
    return palabra === palabraInvertida;
}
console.log(esPalindromo(palabra));


//empieza la funcion flecha
let pa=prompt("ingrese palabra");
let parinver = pa.split('').reverse().join('');
const pol=(pa)=>pa===parinver;
console.log(pol(pa));