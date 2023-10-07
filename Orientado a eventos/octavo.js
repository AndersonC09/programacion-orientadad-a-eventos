function verificarFruta() {
    
    var frutas = [ "banana", "naranja", "pera","manzana","uva","fresa","sandia","mandarina","kiwi","ceresas"];
  
    var nombreFruta = prompt("Escriba el nombre de una fruta:");
  
  
    nombreFruta = nombreFruta.toLowerCase();
  

    if (frutas.includes(nombreFruta)) {
      alert("Sí, " + nombreFruta + " está en la lista de frutas.");
    } else {
      alert(nombreFruta + " no está en la lista de frutas.");
    }
  }
  
  verificarFruta();
  