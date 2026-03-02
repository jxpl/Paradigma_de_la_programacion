let nombre = "pablo";
let edad = 10;
let apellido = "Rivera";
let numero = 30;

function sumar(a,b) {
      return a + b ;
}
function restar(a,b) {
    let operacion = a-b;
    return operacion;
}

console.log ("Hola, " + nombre + " con apellido " + apellido + " y edad de " + edad);
console.log ("El resultado de la suma es: " + sumar(numero,edad));
let Resultado_resta = restar(4,edad);
console.log("El resultado de la resta es: " + Resultado_resta)  