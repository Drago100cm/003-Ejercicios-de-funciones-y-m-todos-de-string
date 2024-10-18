/**1. Obtener la longitud de una cadena
 * Crea una función que convierta una cadena de texto en mayúsculas usando el
método toUpperCase().
Ejemplo: "Hola" → "HOLA"
 * 
 */
let pal=prompt("ingrese la palabra");
function cuenta(pal){
    return pal.toUpperCase()
}
console.log(cuenta(pal));


//empieza la funcion flecha
let pal1= prompt("Ingrese la palabra:");
const cuenta1 = (pal1) => pal1.toUpperCase();
console.log(cuenta1(pal1));
