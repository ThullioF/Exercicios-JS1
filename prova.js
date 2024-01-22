let cadastraAlbum = (album) => {
    let objalbum = {
        id: Number(prompt(`Informe o id do álbum`)),
        nome: prompt(`Informe o nome do álbum`),
        empresa: prompt(`Informe a empresa que fez álbum`),
    }
    while (album.some( (ab) => ab.id == objalbum.id)) {
        alert(`id já existente`)
        objalbum.id  = Number(prompt(`Informe um novo id do álbum`))
    }
    while (album.some( (ab) => ab.nome == objalbum.nome)) {
        alert(`Código já existente`)
        objalbum.nome  = prompt(`Informe um novo nome do álbum`)
    }
    album.push(objalbum)
    alert('Álbum adicionado')
}

let cadastraFigurinha = (album,figurinha) => {
    let objFigurinha = {
        codId:  Number(prompt(`Informe o id do álbum`)),
        numero:  Number(prompt(`Informe o número da figurinha`)),
        nome: prompt(`Informe o nome da figurinha`),
        time: prompt(`Informe o time da figurinha`),
        qtde: 0,
    }
    while (figurinha.some( (nro) => nro.numero == objFigurinha.numero)) {
        alert(`Figurinha já existente`)
        objalbum.nome  = prompt(`Informe um novo número`)
    }
    while (!album.some( (fig) => fig.id == objFigurinha.codId)) {
        alert(`Álbum não encontrado`)
        objPolitico.codPartido = Number(prompt(`Informe um id que exista`))
    }
    figurinha.push(objFigurinha)
    alert('Figurinha adicionada')
}

let comprar = (figurinha) => {
    let numeroFigurinha = Number(prompt(`Informe o numero da figurinha`))
    let idAlbum = prompt(`Informe o id do álbum`)
    let achou = false
    for(let i=0; i<figurinha.length; i++) {
        if (numeroFigurinha == figurinha[i].numero && idAlbum == figurinha[i].codId) {
            figurinha[i].qtde++
            alert(`Compra realizada com sucesso`)
            achou = true
        }
    }
    if (!achou){
        alert('Figurinha não encontrada')
    }
}

let trocar = (figurinha) => {
    let numeroFigurinha = Number(prompt(`Informe o numero da figurinha`))
    let idAlbum = prompt(`Informe o id do álbum`)
    while (figurinha.some( (nro) => nro.numero == numeroFigurinha)) {
        alert(`Figurinha já existente`)
    }
    while (figurinha.some( (ida) => ida.idAlbum == idAlbum)) {
        alert(`Álbum não encontrado`)
    }
}

let trocafigurinha = (figurinha) =>{
    if(figurinha.qtde <1){
        alert('Nenhuma figurinha para troca')
    }
    else{
        alert(`Quantidade de figurinhas é ${figurinha.qtde}`)
    }
}

let principalAlbum = () => {
    let album = []
    let figurinha = []
    let opcao
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar álbum \n 2. Cadastrar figurinha \n 3. Comprar figurinha \n4. Trocar figurinha \n5.Calcular todas as figurinhas para troca \n6.Calcular figurinha em maior qunatidade \n7.Sair`))
        switch(opcao) {
            case 1: cadastraAlbum(album)
                    break
            case 2: cadastraFigurinha(album, figurinha)
                    break        
            case 3: comprar(figurinha)
                    break
            case 4: trocar(figurinha)
                    break
            case 5: trocafigurinha(figurinha)
                    break
            case 6: 
                    break
            case 7: alert('Obrigado por utilizar nosso programa')
                    break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 7)
    console.log(album)
}