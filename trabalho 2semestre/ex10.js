function preencherMatriz() {
    var matriz = [];
    for (var i = 0; i < 5; i++) {
        matriz[i] = [];
        for (var j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}
function somarLinha(matriz, linha) {
    var soma = 0;
    for (var j = 0; j < matriz[0].length; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}
function somarColuna(matriz, coluna) {
    var soma = 0;
    for (var i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}
function somarPrincipal(matriz) {
    var soma = 0;
    for (var i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}
function somarSecundaria(matriz) {
    var soma = 0;
    for (var i = 0; i < matriz.length; i++) {
        soma += matriz[i][matriz.length - 1 - i];
    }
    return soma;
}
function somarElementos(matriz) {
    var soma = 0;
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[0].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}
var matriz = preencherMatriz();

var somaLinha4 = somarLinha(matriz, 4);
var somaColuna2 = somarColuna(matriz, 2);
var somaDiagonalPrincipal = somarPrincipal(matriz);
var somaDiagonalSecundaria = somarSecundaria(matriz);
var somaTodosElementos = somarElementos(matriz);

console.log("Matriz: \n",matriz);
console.log("Soma dos elementos da linha 4: " + somaLinha4);
console.log("Soma dos elementos da coluna 2: " + somaColuna2);
console.log("Soma dos elementos da diagonal principal: " + somaDiagonalPrincipal);
console.log("Soma dos elementos da diagonal secundária: " + somaDiagonalSecundaria);
console.log("Soma de todos os elementos da matriz: " + somaTodosElementos);