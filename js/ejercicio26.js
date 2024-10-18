/**26. Crear una función que devuelva la palabra más larga en una cadena
 * 
 * Escribe una función que encuentre la palabra más larga en una cadena.
Ejemplo: "Aprender JavaScript es emocionante" → "emocionante"
 */
const palabraMasLarga =cadena=> {
  const palabras = cadena.split(' ');
  let palabraMasLarga = '';
  for (const palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  return palabraMasLarga;
}
console.log(palabraMasLarga("La ley de la atracción me da lo que le pida"));