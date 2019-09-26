function palindroma(cadena) {
    var longitudMedia = Math.floor(cadena.length/2), lastPosition = cadena.length-1;
    for(i=0; i<longitudMedia; i++){
        if(cadena[i] != cadena[lastPosition])
            return false;
        lastPosition--;
    }
    return true;
}