/**5. Reemplazar una palabra en una cadena
 * 
 * Escribe una función que reemplace una palabra específica en una cadena con otra
palabra usando replace().
Ejemplo: "Hola mundo", "mundo", "amigo" → "Hola amigo" */
let remv=prompt("ingresa la palabra que va a  remplazar");
let rem=prompt("ingrese la palabra por la qu eremplazara");
let ora="este es el mejor dia";

function reemplazar(ora, remv, rem) {
    return ora.replace(remv, rem);
}
console.log(reemplazar(ora,remv,rem));



//empieza la funcion flecha
let remv1=prompt("ingresa  a  remplazar");
let rem2=prompt("ingrese la pqu eremplazara");
let ora3="este es el mejor dia";
const reemplazo = (ora) => ora3.replace(ora3,remv1,rem2);
console.log(reemplazar(ora3,remv1,rem2));


