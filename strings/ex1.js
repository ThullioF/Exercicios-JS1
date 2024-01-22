function calcularComprimentoString(str) {
    let comprimento = 0;
    for (let i = 0; i < str.length; i++) {
      comprimento++;
    }
    return comprimento;
}

function imprimirSePrimeiraLetraA(nome) {
    if (nome.charAt(0).toLowerCase() === 'a') {
      console.log(nome);
    }
}

function imprimirQuatroPrimeirasLetras(nome) {
    console.log(nome.slice(0, 4));
}
  
function contarLetrasNoNome(nome) {
    return nome.length;
}

function verificarAceitacao(nome, sexo, idade) {
    if (sexo.toLowerCase() === 'feminino' && idade < 25) {
      console.log(nome + " ACEITA");
    } else {
      console.log("NÃO ACEITA");
    }
}

function compararStrings(str1, str2) {
    if (str1 === str2) {
      return 0; 
    } else if (str1 < str2) {
      return -1; 
    } else {
      return 1; 
    }
}

function contarUns(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === '1') {
        contador++;
      }
    }
    return contador;
}

function substituirZeroPorUm(str) {
    return str.replace(/0/g, '1');
}

function inverterPalavra(str) {
    return str.split('').reverse().join('');
}

function removerVogais(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

function contarVogaisEsubstituir(palavra, caractereSubstituto) {
    let quantidadeVogais = 0;
    let novaPalavra = "";
  
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra.charAt(i);
  
      if ("aeiouAEIOU".includes(letra)) {
        quantidadeVogais++;
        novaPalavra += caractereSubstituto;
      } else {
        novaPalavra += letra;
      }
    }
  
    return { quantidadeVogais, novaPalavra };
}

function contarEspacosEmBranco(frase) {
    let quantidadeEspacos = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase.charAt(i) === ' ') {
        quantidadeEspacos++;
      }
    }
    return quantidadeEspacos;
}

function removerEspacosEmBranco(vetorLetras) {
    let vetorSemEspacos = vetorLetras.filter(letra => letra !== ' ');
    return vetorSemEspacos;
}

function trocarLetras(str, letraOriginal, letraSubstituta) {
    return str.split(letraOriginal).join(letraSubstituta);
}

function encontrarPessoaMaisJovemMaisVelha() {
    let nomesIdades = [];
    let nome, idade;
  
    do {
      nome = prompt("Digite o nome da pessoa:");
      idade = parseInt(prompt("Digite a idade da pessoa:"));
  
      if (idade >= 0) {
        nomesIdades.push({ nome, idade });
      }
    } while (idade >= 0);
  
    let maisJovem = nomesIdades.reduce((a, b) => a.idade < b.idade ? a : b);
    let maisVelha = nomesIdades.reduce((a, b) => a.idade > b.idade ? a : b);
  
    return { maisJovem, maisVelha };
}
  
function inverterTrocandoA(frase) {
    return frase.split('').reverse().map(char => char === 'A' ? '*' : char).join('');
}

function imprimirSegmento() {
    let stringS = prompt("Digite uma string:");
    let i = parseInt(prompt("Digite o valor de I:"));
    let j = parseInt(prompt("Digite o valor de J:"));
  
    let segmento = stringS.substring(i, j + 1);
    console.log("Segmento:", segmento);
}

function encontrarPosicaoCaractere() {
    let stringS = prompt("Digite uma string:");
    let caractereC = prompt("Digite o caractere a ser encontrado:");
    let posicaoI = parseInt(prompt("Digite a posição inicial de busca:"));
  
    let posicaoEncontrada = stringS.indexOf(caractereC, posicaoI);
    console.log("Posição encontrada:", posicaoEncontrada);
}

function verificarOrdemAlfabetica() {
    let palavra1 = prompt("Digite a primeira palavra:");
    let palavra2 = prompt("Digite a segunda palavra:");
  
    let resultadoComparacao = palavra1.localeCompare(palavra2);
  
    if (resultadoComparacao < 0) {
      console.log(palavra1 + " vem antes de " + palavra2 + " na ordem alfabética.");
    } else if (resultadoComparacao > 0) {
      console.log(palavra2 + " vem antes de " + palavra1 + " na ordem alfabética.");
    } else {
      console.log("As palavras são iguais.");
    }
}

function codigoCesar(texto, deslocamento) {
    return texto.replace(/[a-zA-Z]/g, function (letra) {
      let codigo = letra.charCodeAt(0);
      let base = letra === letra.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode((codigo - base + deslocamento) % 26 + base);
    });
}

function Palindromo(str) {
    let textoLimpo = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido;
}

function verificaConteudoFinal(str1, str2) {
    return str1.endsWith(str2);
}

function concatenarNCaracteres(str1, str2, N) {
    return str1 + str2.substring(0, N);
}

function contarOcorrencias(strA, strB) {
    let ocorrencias = 0;
    let indice = strB.indexOf(strA);
  
    while (indice !== -1) {
      ocorrencias++;
      indice = strB.indexOf(strA, indice + 1);
    }
  
    return ocorrencias;
}
 
function extrairDataFormatada(dataString) {
    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    let match = dataString.match(regex);
  
    if (match) {
      let dia = parseInt(match[1]);
      let mes = parseInt(match[2]);
      let ano = parseInt(match[3]);
  
      return { dia, mes, ano };
    } else {
      console.log("Formato de data inválido.");
      return null;
    }
}