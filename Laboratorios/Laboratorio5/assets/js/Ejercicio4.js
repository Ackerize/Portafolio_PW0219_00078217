function adivinar(numero){
    var arreglo = []
    for(i=0; i<20; i++){
        arreglo.push(Math.floor(Math.random()*100)+1);
    }
    console.log(arreglo);
    if(arreglo.includes(numero))
        console.log("Ganaste");
    else
        console.log("Perdiste");
}
