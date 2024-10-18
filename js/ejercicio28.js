/**28. Capitalizar todas las palabras de una frase
 * 
 * Escribe una función que convierta la primera letra de cada palabra de una cadena a
mayúscula.
Ejemplo: "javascript es divertido" → "Javascript Es Divertido"
 */
function Palabras(cadena) {
    return cadena.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  console.log(Palabras("tal vez en otra galaxia sí fue diferente"));  