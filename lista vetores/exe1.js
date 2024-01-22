function ex1() {
    let vet= []
    let pares= []; let impares=[];
    let ipares=0; let iimpares=0;
    for (let i=0; i<6; i++) {
        if (vet[i] % 2==0) {
            pares[ipares] = vet[i]
            ipares++
        } else{
            impares[iimpares] = vet[i]
            iimpares++
        }
    }
    console.log(`valores pares ${pares} e a quantidade ${ipares}`)
    console.log(`valores impares ${impares} e a quantidade ${iimpares}`)
}