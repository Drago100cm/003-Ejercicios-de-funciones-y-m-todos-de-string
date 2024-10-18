/**27. Convertir una cadena a snake_case
 * 
 * Crea una función que convierta una cadena a formato snake_case.
Ejemplo: "Hola Mundo" → "hola_mundo"
 */
const SnakCase =cadena => {
    return cadena.toLowerCase().replace(/ /g, '_');
  };
 console.log(SnakCase('Las ganas de superarme por las noches me perturban'));