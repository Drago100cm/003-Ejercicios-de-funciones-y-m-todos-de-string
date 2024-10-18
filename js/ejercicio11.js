/**11. Revertir una cadena
 * 
 * Crea una función que tome una cadena y la devuelva invertida.
Ejemplo: "Hola" → "aloH"
 */
let palabra=prompt("ingrese palabra");
function revez(){
    return palabra.split("").reverse().join("");
}
console.log(revez(palabra));


//empieza la funcion flecha
let pala=prompt("ingrese palabra");
const rev=pala.split("").reverse().join("");
console.log(rev);