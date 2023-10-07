function reemplazarVocalesConAlerta() {
    var cadenaOriginal = prompt("Por favor, ingresa una cadena:");

    if (cadenaOriginal === null || cadenaOriginal === "") {
      alert("No ingresaste una cadena válida. Por favor, intenta de nuevo.");
      return;
    }
    
    var cadenaModificada = cadenaOriginal.replace(/[aeiouAEIOU]/g, "*");
    
    
    alert("Cadena original: " + cadenaOriginal + "\nCadena modificada: " + cadenaModificada);
  }
  
  
  reemplazarVocalesConAlerta();
  