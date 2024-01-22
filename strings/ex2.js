let s1 = '';

function lerString() {
    s1 = prompt('Digite a string S1 (tamanho máximo 20 caracteres): ');
}

function imprimirTamanho() {
    console.log(`O tamanho da string S1 é: ${s1.length}`);
}

function compararStrings() {
    let s2 = prompt('Digite a nova string S2: ');
    if (s1 === s2) {
        console.log('As strings são iguais.');
    } else {
        console.log('As strings são diferentes.');
    }
}

function concatenarStrings() {
    let s2 = prompt('Digite a nova string S2: ');
    let resultado = s1 + s2;
    console.log(`A concatenação de S1 e S2 é: ${resultado}`);
}

function imprimirReverso() {
    let reverso = s1.split('').reverse().join('');
    console.log(`A string S1 invertida é: ${reverso}`);
}

function contarCaractere() {
    let caractere = prompt('Digite o caractere a ser contado: ');
    let count = [...s1].filter(c => c === caractere).length;
    console.log(`O caractere '${caractere}' aparece ${count} vezes na string S1.`);
}

function substituirCaractere() {
    let c1 = prompt('Digite o caractere a ser substituído: ');
    let c2 = prompt('Digite o novo caractere: ');
    s1 = s1.replace(c1, c2);
    console.log(`A primeira ocorrência de '${c1}' foi substituída por '${c2}': ${s1}`);
}

function verificarSubstring() {
    let s2 = prompt('Digite a string S2 a ser verificada como substring: ');
    if (s1.includes(s2)) {
        console.log(`${s2} é uma substring de S1.`);
    } else {
        console.log(`${s2} não é uma substring de S1.`);
    }
}

function retornarSubstring() {
    let posicao = parseInt(prompt('Digite a posição inicial da substring: '));
    let tamanho = parseInt(prompt('Digite o tamanho da substring: '));
    let substring = s1.substring(posicao, posicao + tamanho);
    console.log(`A substring de S1 a partir da posição ${posicao} com tamanho ${tamanho} é: ${substring}`);
}

while (true) {
    console.log('\nMenu:');
    console.log('1. Ler uma string S1');
    console.log('2. Imprimir o tamanho da string S1');
    console.log('3. Comparar S1 com uma nova string S2');
    console.log('4. Concatenar S1 com uma nova string S2');
    console.log('5. Imprimir S1 de forma reversa');
    console.log('6. Contar a ocorrência de um caractere em S1');
    console.log('7. Substituir a primeira ocorrência de um caractere em S1');
    console.log('8. Verificar se S2 é uma substring de S1');
    console.log('9. Retornar uma substring de S1');
    console.log('0. Sair');

    let escolha = prompt('Escolha uma opção (0-9): ');

    switch (escolha) {
        case '1':
            lerString();
            break;
        case '2':
            imprimirTamanho();
            break;
        case '3':
            compararStrings();
            break;
        case '4':
            concatenarStrings();
            break;
        case '5':
            imprimirReverso();
            break;
        case '6':
            contarCaractere();
            break;
        case '7':
            substituirCaractere();
            break;
        case '8':
            verificarSubstring();
            break;
        case '9':
            retornarSubstring();
            break;
        case '0':
            process.exit(0);
        default:
            console.log('Opção inválida. Tente novamente.');
    }
}