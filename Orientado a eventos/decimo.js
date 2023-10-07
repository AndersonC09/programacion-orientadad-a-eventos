function longitudPalabrasEnOracion() {
    
    var oracion = prompt("Escriba una oracion:");
  
    var palabras = oracion.split(' ');
  

    for (var i = 0; i < palabras.length; i++) {
      alert("Longitud de la palabra '" +  palabras[i]  + "'contiene : " + palabras[i].length+ " letras");
    }
  }
  
  longitudPalabrasEnOracion();
  