function sonAnagramas(cadena1, cadena2) {

  cadena1 = cadena1.replace(/\s/g, '').toLowerCase();
  cadena2 = cadena2.replace(/\s/g, '').toLowerCase();

 

  const array1 = Array.from(cadena1).sort();
  const array2 = Array.from(cadena2).sort();


  return array1.every((letra, index) => letra === array2[index]);
}

const palabra1 = prompt("Ingrese la primera palabra:");
const palabra2 = prompt("Ingrese la segunda palabra:");

if (sonAnagramas(palabra1, palabra2)) {
  console.log("Las palabras son anagramas.");
} else {
  console.log("Las palabras no son anagramas.");
}

