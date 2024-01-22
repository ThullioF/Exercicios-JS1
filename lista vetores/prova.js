function prova() {
    let titulo = []
    let descricao= []
    let usuarios = []
    let likes = []

    for(let i=0;i<10;i++){
        titulo[i] = prompt(`Informe titulo ${i+1} : `)
        descricao[i] = prompt(`Informe descrição ${i+1} : `)
        let aux = prompt(`Informe o usuário(autor): `)
        while(usuarios.includes(aux)){
            aux = prompt(`Usuário ja existe, insira um difetente`)
        }
        usuarios[i] = aux
        likes[i] = Number(prompt(`Informe quantidade de likes ${i+1} : `))
        if (likes[i] <= 0) {
            alert('Quantidade não pode ser negativa')
        }
    }

    for(let i=0;i<5;i++){
        let usuario = prompt('informe usuário para mudança')
        if (usuario == usuarios[i]) {
            let aumentar = prompt('A quantidade de likes vai aumentar (sim ou não): ') 
            if(aumentar == 'não'){
                let diminuir = Number(prompt('Informe valor que será diminuido de likes: '))
                likes[i] = likes[i] - diminuir
            }
            else if (aumentar == 'sim') {
                let aumente = Number(prompt('Informe valor que ser acrescentado de likes: '))
                likes[i] = likes[i] + aumente
            } else{
                alert('resposta inválida')
            }
        } else{
            alert('usuario invalido')
        }
    }

    let total= 0
    let maior = likes[0]; let menor = likes[0]
    for(let i=0;i<5;i++){
        total = total + likes
        if (likes[i] > maior) {
            maior = likes[i]
        }
        if(likes[i]<menor){
            menor = likes[i]
        }
    }

    alert(maior)
    alert(menor)
}