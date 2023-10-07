function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  var cadenaUsuario = prompt("Ingresa una cadena de texto:");
  var cadenaInvertida = invertirCadena(cadenaUsuario);

  alert('la cadena invertida queda asi: ' + cadenaInvertida);
  
  
  