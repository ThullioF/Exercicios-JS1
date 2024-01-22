function exe4(){
    // entrada de dados
    let vet = []
    for(let i=0;i<10;i++){
        vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    // cria um vetor que guarda as posições do número 30
    let posicoes = []
    for(let i=0;i<10;i++){
        if (vet[i] == 30) {
            posicoes.push(i)
        }
    }
    alert(`Posições aonde o 30 aparecem ${posicoes}`)
}

function exaula(){
    let codigos = []
    let nomes = []


    for(let i = 0; i <= 2; i++){
        let aux = Number(prompt(`Informe o codigo do aluno: `))
        while(codigos.includes(aux)){
            aux = Number(prompt(`Codigo ja existe, insira um difetente`))
        }
        codigos[i] = aux
        nomes[i] = prompt(`Informe o nome do aluno: `)
    }
  //peça ao usuario para entrar com o código do aluno
  // mostrar o nome do aluno caso seja um codigo cadastrado
    let codigo = Number(prompt(`Informe um codigo`))
    let posicao = codigos.indexOf(codigo)
    if(posicao == -1){
        alert(`Codigo não esta presente no vetor`)
    }
    else{
        alert(`Nome do aluno é ${nomes[posicao]}`)
   }
}