function buscarPalabraClaveEnCadena() {

    var cadena = prompt("Por favor, ingresa una cadena de texto:");
    var palabraClave = prompt("Por favor, ingresa una palabra clave:");
  
    
    if (cadena === null || palabraClave === null || cadena === "" || palabraClave === "") {
      alert("Debes ingresar una cadena de texto y una palabra clave válida.");
      return;
    }

    if (cadena.includes(palabraClave)) {
      alert("La palabra clave '" + palabraClave + "' aparece en la cadena.");
    } else {
      alert("La palabra clave '" + palabraClave + "' no aparece en la cadena.");
    }
  }
  

  buscarPalabraClaveEnCadena();
  