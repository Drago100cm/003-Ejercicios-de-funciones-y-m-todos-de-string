/**19. Comprobar si una cadena comienza con una palabra
 * 
 * Crea una función que verifique si una cadena comienza con una palabra específica
usando startsWith().
Ejemplo: "JavaScript es genial", "JavaScript" → true
 */

let texto = "JavaScript es muy dificil";  //aqui se verifica si la cadena comienza con "Java script"
let palabra = "JavaScript";
function empiezaCon(texto, palabra) {  //starWith este metodo verifica si una cadena de texto cmienza con una palabra o subcadena
    return texto.startsWith(palabra);
}
console.log(empiezaCon(texto, palabra));

//aqui empieza l afuncion flecha
let texto1 = "JavaScript es muy dificil";  //aqui se verifica si la cadena comienza con "Java script"
let palabra1 = "JavaScript";
const empieza=(texto1,palabra1)=>texto1.startsWith(palabra1);
console.log(empiezaCon(texto1, palabra1));
