function sumaPromedio(arreglo) {
    var acum = 0, longitud = arreglo.length;
    for(i=0; i<longitud; i++){
        acum+= arreglo[i];
    }
    console.log("La suma es "+ acum);
    console.log("el promedio es "+ acum/longitud);
}

