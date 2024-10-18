/**9. Convertir la primera letra a mayúscula
 * 
 * Crea una función que convierta la primera letra de una cadena en mayúscula.
Ejemplo: "javascript" → "Javascript"
*/
let palabra=prompt("ingresa palabra");
function mayus(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);

}
console.log(mayus(palabra));



//empieza la funcion cadena
let pal=prompt("ingresa la palabra");
const may=(pal)=>pal.charAt(0).toUpperCase() + pal.slice(1);
console.log(may(pal));
