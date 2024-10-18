/**24. Comprobar si una cadena contiene solo números
 * 
 * Escribe una función que verifique si una cadena contiene solo números.
Ejemplo: "12345" → true
 */
  let texto = "12345";
function soloNumeros(cadena) {
    return /^[0-9]+$/.test(cadena);  //"^" indicamos el inicio de la cadena", del 0-9 verifica cada caracter en cadena 
    //test metodo que comprueba si la cadena cumple con la expresion regular
  }
  console.log(soloNumeros(texto));