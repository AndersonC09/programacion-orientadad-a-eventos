function contarPalabras(frase) {

    frase = frase.trim();
    
    
    var palabras = frase.split(/\s+/);
    
    
    return palabras.length;
  }
  
  var fraseUsuario = prompt("Ingrese una oracion:");
  var cantidadPalabras = contarPalabras(fraseUsuario);

  alert('la cadena contiene ' + cantidadPalabras + ' palabras');
  

  