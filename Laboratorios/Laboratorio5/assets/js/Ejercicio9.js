function circuferencia() {
    radio = prompt("Ingrese el radio de la circuferencia: ");
    if(radio <= 0)
        return -1;
    else
        return Math.PI*(Math.pow(radio, 2));
}