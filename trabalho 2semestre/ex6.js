function Matriz() {
    var matriz = [];
    for (var i = 0; i < 12; i++) {
        matriz[i] = [];
        for (var j = 0; j < 10; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}
function somaColunas(matriz) {
    var somar = [];
    for (var j = 0; j < 10; j++) {
        var soma = 0;
        for (var i = 0; i < 12; i++) {
            soma += matriz[i][j];
        }
        somar.push(soma);
    }
    return somar;
}
function multiplicarColunas(matriz, somar) {
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 10; j++) {
            matriz[i][j] *= somar[j];
        }
    }
}
function raizQuadrada(matriz) {
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 10; j++) {
            matriz[i][j] = Math.sqrt(matriz[i][j]);
            console.log(matriz[i][j]);
        }
    }
}
var matriz = Matriz();
var somar = somaColunas(matriz);
multiplicarColunas(matriz, somar);
raizQuadrada(matriz);