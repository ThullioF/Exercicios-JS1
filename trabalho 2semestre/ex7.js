function preencherMatriz(ordem) {
    var matriz = [];
    for (var i = 0; i < ordem; i++) {
        matriz[i] = [];
        for (var j = 0; j < ordem; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}
function somaLinhasColunas(matrizM, matrizN) {
    var resultado = [];
    for (var i = 0; i < matrizM.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizN[0].length; j++) {
            var soma = 0;
            for (var k = 0; k < matrizM[0].length; k++) {
                soma += matrizM[i][k] * matrizN[k][j];
            }
            resultado[i][j] = soma;
        }
    }
    return resultado;
}
var matrizM = preencherMatriz(4);
var matrizN = preencherMatriz(6);
var resultado = somaLinhasColunas(matrizM, matrizN);

console.log("Matriz M: \n", matrizM);
console.log("Matriz N: \n", matrizN);
console.log("Soma das linhas de M com as colunas de N: \n",resultado);