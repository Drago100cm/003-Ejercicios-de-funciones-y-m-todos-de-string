/*23. Truncar una cadena a un número de caracteres
crea una funcion que trunque un acadena a un numero especifico de caractertes agregando....al final si es mas larga
ejemplo:"javascript es genial",10 → "JavaScri..."
*/

let texto = "JavaScript es genial";
let numCaracteres = 10;
function truncarCadena(cadena, numCaracteres) {
    return cadena.length > numCaracteres  //eto nos sirve para comparar la longitud de la cadena con el número de caracteres permitidos, si la cena es mas larga se aplica el truncamiento
      ? cadena.slice(0, numCaracteres) + '...'  //metodo slice para obtener una parte de la cadena
      : cadena;
}
console.log(truncarCadena(texto, numCaracteres));