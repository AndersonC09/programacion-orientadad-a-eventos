function validarContrasena(contrasena) {
   
    if (contrasena.length < 8) {
      return false;
    }
  

    var tieneMayuscula = false;
    var tieneNumero = false;
  
    for (var i = 0; i < contrasena.length; i++) {
      var caracter = contrasena.charAt(i);
  
      if (caracter >= "A" && caracter <= "Z") {
        tieneMayuscula = true;
      } else if (!isNaN(caracter)) {
        tieneNumero = true;
      }
  
  
      if (tieneMayuscula && tieneNumero) {
        break;
      }
    }


    if (contrasena.indexOf(" ") >= 0) {
      return false;
    }
  

    return tieneMayuscula && tieneNumero;
  }
  
  var contrasena = prompt("Crea una contraseña: Minimo 8 caracteres,Minimo un caracter Mayuscula o Minuscula,No contener espacios");


  var esContrasenaValida = validarContrasena(contrasena);
  
  if (esContrasenaValida) {
    alert("SE HA CREADO LA CONTRASEÑA EXITOSAMENTE");
  } else {
    alert("ESTA CONTRASEÑA NO CUMPLE CON LOS CARACTERES REQUERIDOS");
  }
  
    