function contadorPalabrasUnicas(parrafo) {
    var palabras = parrafo.toLowerCase().split(" ");
    var palabrasUnicas = new Set(palabras);
    return palabrasUnicas.size;
  }
  
  var parrafo = prompt("Ingresa un párrafo:");
  var cantidadPalabrasUnicas = contadorPalabrasUnicas(parrafo);
  alert("La cantidad de palabras únicas en el párrafo es: " + cantidadPalabrasUnicas);
  