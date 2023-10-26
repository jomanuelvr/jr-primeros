var frase = prompt("Ingrese una frase");
var vocales = "";

for (var i = 0; i < frase.length; i++) {
  var letra = frase.charAt(i).toLowerCase();
  if ("aeiou".includes(letra)) {
    vocales += letra;
  }
}

document.write(vocales);
