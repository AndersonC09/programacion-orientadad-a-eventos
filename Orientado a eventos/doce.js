document.getElementById('convertirButton').addEventListener('click', function() {
    const palabrasInput = document.getElementById('palabrasInput').value;
    const resultadosP = document.getElementById('resultados');

    const palabrasArray = palabrasInput.split(',').map(palabra => palabra.trim());
    const palabrasModificadas = palabrasArray.map(palabra => {
        return palabra.split('').map(letra => {
            return letra === letra.toUpperCase() ? letra.toLowerCase() : letra.toUpperCase();
        }).join('');
    });

    resultadosP.textContent = `originales: [${palabrasArray}]
                                modificadas: [${palabrasModificadas}]`;
});
