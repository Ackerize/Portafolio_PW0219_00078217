function fibonacci(enesimo) {
    var prev=0, next=1;
    console.log(prev);
    console.log(next);
    if(enesimo >= 3){
        for(i=0; i<enesimo-2; i++){
            let suma = prev+next;
            console.log(suma);
            prev = next;
            next = suma;
        }
    }
}