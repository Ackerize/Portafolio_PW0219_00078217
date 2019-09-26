function ocurrencias(numero, arreglo) {
    var acum = 0;
    for(i=0; i<arreglo.length; i++){
        if(arreglo[i] === numero){
            acum++;
        }
    }
    return acum;
}

