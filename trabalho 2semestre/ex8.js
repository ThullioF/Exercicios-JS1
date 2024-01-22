function preencherMatriz() {
    var matriz = [];
    for (var i = 0; i < 3; i++) {
        matriz[i] = [];
        for (var j = 0; j < 8; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}
function somaMatriz(matrizA, matrizB) {
    var resultado = [];
    for (var i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizA[0].length; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }
    return resultado;
}
function subtrairMatriz(matrizA, matrizB) {
    var resultado = [];
    for (var i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizA[0].length; j++) {
            resultado[i][j] = matrizA[i][j] - matrizB[i][j];
        }
    }
    return resultado;
}
var matrizA = preencherMatriz();
var matrizB = preencherMatriz();
var somarMatriz = somaMatriz(matrizA, matrizB);
console.log("Matriz A: \n",matrizA);
console.log("Matriz B: \n",matrizB);
console.log("Soma das matrizes A e B: \n",somarMatriz);

var diferencaMatriz = subtrairMatriz(matrizA, matrizB);
console.log("Diferença das matrizes A e B: \n",diferencaMatriz);