var numero = parseInt(prompt("Ingrese un número"));
var divisibles = [];

if (numero % 2 === 0) {
  divisibles.push("2");
}
if (numero % 3 === 0) {
  divisibles.push("3");
}
if (numero % 5 === 0) {
  divisibles.push("5");
}
if (numero % 7 === 0) {
  divisibles.push("7");
}

var mensaje = "El " + numero + " es divisible por " + divisibles.join(", ") + ".";

if (divisibles.length === 0) {
  mensaje = "El " + numero + " no es divisible por 2, 3, 5 ni 7.";
}

document.write(mensaje);
