let bikes=[]
let marcas=["caloi","scott","canondale"]
for(let i=0;i<10;i++){
    let objBikes= {
        marca: prompt('Qual marca?').toUpperCase(),
        modelo: prompt('Qual o modelo?'),
        quadro: prompt('Qual o quadro?'),
        aro: Number(prompt('Qual o aro?')),
        ano: Number(prompt('Qual o ano?')),
        preco: Number(prompt('Qual o preço?')),
    }
    while(!marcas.includes(objBikes.marca)){
        objBikes.marca= prompt('Marca invalida').toUpperCase()
    }
    bikes.push(objBikes)
}

let soma=0
for(let i=0;i<10;i++){
    soma= soma + bikes[i].preco
}
console.log(`A média de preço é ${soma/bikes.length}`)

let bikeAntiga= bikes[0].ano
let modeloAntigo= bikes[0].modelo
for(let i=0;i<10;i++){
    if(bikes[i].ano < bikeAntiga){
        bikeAntiga = bikes[i].ano
        modeloAntigo = bikes[i].modelo
    }
}
console.log(`A bike mais antiga é ${modeloAntigo} do ano ${bikeAntiga}`)

let marcaCaloi=[]
for(let i=0;i<10;i++){
    if(bikes[i].marca == "caloi"){
        marcaCaloi.push(bikes[i])
    }
}
console.log(`${marcaCaloi}`)

let aro29=0
for(let i=0;i<10;i++){
    if(objBikes.aro == 29){
        aro29++
    }
}
console.log(`Tem ${aro29} bikes com aro 29`)

let objMaior= bikes[0]
for(let i=0;i<10;i++){
    if(bikes[i].quadro > objMaior){
        objMaior= bikes[i]
    }
}
console.log(`${objMaior}`)