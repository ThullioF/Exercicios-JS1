function preencherMatriz() {
    var matriz = [];
    for (var i = 0; i < 3; i++) {
        matriz[i] = [];
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]:`));
        }
    }
    return matriz;
}
function multiplicarMatriz(matriz, valor) {
    var matrizResultante = [];
    for (var i = 0; i < 3; i++) {
        matrizResultante[i] = [];
        for (var j = 0; j < 3; j++) {
            matrizResultante[i][j] = matriz[i][j] * valor;
        }
    }
    return matrizResultante;
}
var matrizOriginal = preencherMatriz();
var valorMultiplicacao = parseFloat(prompt("Digite o valor pelo qual deseja multiplicar a matriz:"));
var matrizResultante = multiplicarMatriz(matrizOriginal, valorMultiplicacao);
console.log("Matriz Original: \n", matrizOriginal);
console.log(`Matriz Resultante (multiplicada por ${valorMultiplicacao}): \n`, matrizResultante);