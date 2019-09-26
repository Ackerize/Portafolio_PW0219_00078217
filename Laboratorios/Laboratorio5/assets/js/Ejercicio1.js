function tipoDato(arreglo) {
    var tipos = new Set(), contador = 0;
    for(i=0; i<arreglo.length; i++){
        if(!tipos.has(typeof arreglo[i])){
            tipos.add(typeof arreglo[i]);
        }
    }
        tipos.forEach( ( ele ) => {
            for(i=0; i<arreglo.length; i++){
                if( ele === typeof arreglo[i]){
                contador++;
                }
            }
            console.log(ele + " " + contador);
            contador = 0;
    });
}

var arreglo = [1, "hola", 2+3, "2"+"3"];
tipoDato(arreglo);