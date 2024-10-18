/**6. Repetir una cadena
 * 
 * Crea una función que repita una cadena un número específico de veces usando
repeat().
Ejemplo: "Ho", 3 → "HoHoHo"
 */
let num=prompt("ingresa lo que desea repetir");
let veces=prompt("ingresa la cantidad que deseas que se repita")
function repetir(num,veces){
    return num.repeat(veces);
}
console.log(repetir(num+"  ",veces));



//empieza la funcion flecha
let num1=prompt("ingresa le numero a repetir2");
let veces1=prompt("ingresa la cantidad que deseas que se repita2");
const reemplazo = (num1,veces1) => num1.repeat(veces1);
console.log(reemplazo(num1+"  ",veces1));

