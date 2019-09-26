function toBinary(numero) {
    var binario = "";
    while(Math.floor(numero/2) != 0){
        binario = numero%2 + binario;
        numero = Math.floor(numero/2);
    }
    return numero + binario;
}