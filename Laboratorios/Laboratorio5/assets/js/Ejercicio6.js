function ordenar(arreglo) {
    var longitud = arreglo.length;
    for(i= 0; i<longitud-1; i++){
        for(j=0; j<longitud-i-1; j++){
            if(arreglo[j] > arreglo[j+1]){
                let temp = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = temp;
            }
        }
    }
    console.log(arreglo);
}