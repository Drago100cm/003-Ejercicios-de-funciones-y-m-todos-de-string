/**22. Convertir una frase a camelCase
 * 
 * Escribe una función que convierta una frase a formato camelCase.
Ejemplo: "hola mundo en javascript" → "holaMundoEnJavascript"
 */
function convertirACamelCase(frase) {
    return frase
      .toLowerCase() // aqui se convierte toda la frase a minúsculas
      .split(' ')    // split te divide la frase en un arreglo de palabras
      .map((palabra, indice) => 
        indice === 0 
          ? palabra // La primera palabra se mantiene en minúsculas
          : palabra.charAt(0).toUpperCase() + palabra.slice(1) // Las siguientes palabras empiezan con mayúscula
      )
      .join(''); // Unimos todas las palabras en una sola cadena
  }
  let frase = "hola mundo en javascript";
  console.log(convertirACamelCase(frase)); 