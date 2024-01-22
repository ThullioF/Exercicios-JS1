let canditados=[]
let partidos=["PT","PSDB","PL","PSB"]
for(let i=0; i<10;i++){
    let obj = {
        codigo: Number('Informe o codigo'),
        nome: prompt('Informe o nome'),
        partido: prompt(`Informe o nome do partido`).toUpperCase,
        qtdeVotos: Number(prompt('Informe a quantidade de votos por candidatos'))
    }
}
while(!partidos.includes(obj.partido)){
    obj.partido= prompt('Partido inválido').toUpperCase
}
canditados.push(obj)

let maisVotado = canditados[0].qtdeVotos
let nomeVotado = canditados[0].nome
let partidoVotado = canditados[0].partido
for(i=0; i<10 ; i++){
if (canditados[i].qtdeVotos> maisVotado) {
    maisVotado=canditados[i].qtdeVotos
    nomeVotado=canditados[i].nome
    partidoVotado=canditados[i].partido
}
}
console.log(`canditado mais votado é ${nomeVotado} do partido ${partidoVotado} com ${maisVotado} votos`)