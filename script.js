function solveRiddle() {
    // Obter a entrada do usuário e converter para um array de números
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));

    // Separar números pares e ímpares
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const oddNumbers = numbers.filter(num => num % 2 !== 0);

    // Exibir o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p>Números pares: [${evenNumbers.join(', ')}]</p>
        <p>Números ímpares: [${oddNumbers.join(', ')}]</p>
    `;
}
