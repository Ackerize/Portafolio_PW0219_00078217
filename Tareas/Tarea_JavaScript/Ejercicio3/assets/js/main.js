var btn_lunes = document.getElementById("btn_lunes")
var btn_martes = document.getElementById("btn_martes")
var btn_miercoles = document.getElementById("btn_miercoles")
var btn_jueves = document.getElementById("btn_jueves")
var btn_viernes = document.getElementById("btn_viernes")

var btn_telefono = document.getElementsByClassName("navbar-toggler")[0]


let deshabilitar = (dia1, dia2, dia3, dia4)=>{
    document.getElementById(`${dia1}`).style.display = "none"
    document.getElementById(`${dia2}`).style.display = "none"
    document.getElementById(`${dia3}`).style.display = "none"
    document.getElementById(`${dia4}`).style.display = "none"
}

deshabilitar("martes", "miercoles", "jueves", "viernes")

btn_lunes.addEventListener("click", ()=>{
    deshabilitar("martes", "miercoles", "jueves", "viernes")
    document.getElementById("lunes").style.display = "block"
    btn_telefono.click();
})

btn_martes.addEventListener("click", ()=>{
    deshabilitar("lunes", "miercoles", "jueves", "viernes")
    document.getElementById("martes").style.display = "block"
    btn_telefono.click();
})

btn_miercoles.addEventListener("click", ()=>{
    deshabilitar("martes", "lunes", "jueves", "viernes")
    document.getElementById("miercoles").style.display = "block"
    btn_telefono.click();
})

btn_jueves.addEventListener("click", ()=>{
    deshabilitar("martes", "miercoles", "lunes", "viernes")
    document.getElementById("jueves").style.display = "block"
    btn_telefono.click();
})
btn_viernes.addEventListener("click", ()=>{
    deshabilitar("martes", "miercoles", "jueves", "lunes")
    document.getElementById("viernes").style.display = "block"
    btn_telefono.click();
})

btn_telefono.addEventListener("click", ()=>{
    var oculto = document.querySelector(".navbar-collapse")
    if(oculto.className.match(/(?:^|\s)show(?!\S)/)){
        oculto.className = oculto.className.replace( /(?:^|\s)show(?!\S)/g , '' )
    }
    else{
        oculto.className += " show";
    }
})
