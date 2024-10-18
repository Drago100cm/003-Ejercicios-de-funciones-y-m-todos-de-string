/**21. Reemplazar todas las ocurrencias de una palabra
 * 
 * Crea una función que reemplace todas las ocurrencias de una palabra en una
cadena usando replaceAll().
Ejemplo: "hola hola", "hola", "adiós" → "adiós adiós"
 */

let texto = "JavaScript es genial genial ";
let palabra = "genial";
let remplazo_a="aburrido";
function remplaza(texto, palabra,remplazo_a) {
    return texto.replaceAll(palabra,remplazo_a);
  }
console.log(remplaza(texto, palabra,remplazo_a));

//empieza con la funcion flecha
let texto1 = "JavaScript genial genial aburrido";
let palabra2 = "genial";
let rempl="muy";
inrepla=(texto1,palabra2,rempl)=>texto1.replaceAll(palabra2,rempl);
console.log(inrepla(texto1, palabra2,rempl));