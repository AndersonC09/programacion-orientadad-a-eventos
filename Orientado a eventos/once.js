document.getElementById('calcularButton').addEventListener('click', function() {
    const frase = document.getElementById('fraseInput').value;
    const resultadosDiv = document.getElementById('resultados');

    const palabras = frase.split(' ');
    resultadosDiv.innerHTML = '';

    palabras.forEach(palabra => {
        const longitud = palabra.length;
        const resultado = document.createElement('p');
        resultado.textContent = `La palabra "${palabra}" tiene una longitud de ${longitud} caracteres.`;
        resultadosDiv.appendChild(resultado);
    });
});
