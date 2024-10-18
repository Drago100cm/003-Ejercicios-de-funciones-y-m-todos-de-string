/**Comprobar si una cadena contiene una palabra
 * 
 * Crea una función que verifique si una palabra específica está contenida dentro de
una cadena usando includes().
Ejemplo: "JavaScript es genial", "genial" → true */
let bus=prompt("ingrese la palabra que desea verificar");
let ora="este es el mejor dia";
function ver(bus,ora){
    return ora.includes(bus);
}
console.log("eso es",ver(bus,ora));



//empieza la funcion flecha
let bus1=prompt("ingrese la palabra que desea verificar");
let ora1="este es el mejor dia";

const ver1=(bus,ora)=>ora.includes(bus1);
console.log("eso es",ver1(bus1,ora1));
