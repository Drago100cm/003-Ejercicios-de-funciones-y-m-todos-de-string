/**1. Obtener la longitud de una cadena
 * Escribe una función que reciba una cadena de texto y devuelva su longitud.
Ejemplo: "Hola" → 4 */


let pal=prompt("ingrese la palabra");
function cuenta(pal){
    return pal.length
}
console.log(cuenta(pal));


//empieza la funcion flecha
let pal1= prompt("Ingrese la palabra:");
const cuenta1 = (pal1) => pal1.length;
console.log("La longitud de la palabra es: " + cuenta1(pal1));


