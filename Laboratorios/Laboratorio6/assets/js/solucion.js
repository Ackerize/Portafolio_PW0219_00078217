window.onload = function() {
    var counter_btn =  document.getElementById("counter-btn")
    counter_btn.addEventListener("click", ()=>{
        add();
    });
};

let add = (function () {
    let counter = 0;
    return function () {
        counter += 1; 
        document.getElementById("counter-space").innerHTML = counter;
        return counter
    }
})();