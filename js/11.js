var numero = parseInt(prompt("Ingrese un número"));
var mensaje = "El " + numero + " es divisible por ";

if (numero % 2 === 0) {
  mensaje += "2";
}
if (numero % 3 === 0) {
  mensaje += "3";
}
if (numero % 5 === 0) {
  mensaje += "5";
}
if (numero % 7 === 0) {
  mensaje += "7";
}

if (mensaje === "El " + numero + " es divisible por ") {
  mensaje = "El " + numero + " no es divisible por 2, 3, 5 ni 7.";
}

document.write(mensaje);
