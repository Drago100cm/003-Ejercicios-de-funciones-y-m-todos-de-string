/**20. Comprobar si una cadena termina con una palabra
 * 
 * Escribe una función que verifique si una cadena termina con una palabra específica
usando endsWith().
Ejemplo: "JavaScript es genial", "genial" → true
 */
let texto = "JavaScript es genial";
let palabra = "genial";
function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra);
}
console.log(terminaCon(texto, palabra));

//empieza funcion flecha
let texto1 = "JavaScript es genial";
let palabra1 = "genial";
termin=(texto1,palabra1)=>texto1.endsWith(palabra1);
console.log(terminaCon(texto, palabra));