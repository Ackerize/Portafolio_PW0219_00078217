let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

let student_list = []
let serial = 0


/*
    Función para agregar un hijo a la tabla
*/

let printArray = ()=>{
    table_body.innerHTML = ""
    student_list.forEach((elem=>{
        let new_row = document.createElement("tr")
    
        let new_cell = document.createElement("td")
        let new_btn = document.createElement("button")
        let new_cell2 = document.createElement("td")
        let new_campo = document.createElement("input")
    
        new_row.classList.add("table-active")
        new_row.innerHTML = 
            `<th scope='row'>${elem.carnet}</th>
            <td>${elem.horario}</td>
            <td>${elem.hora}</td>
            <td>${elem.tarde}</td>`

        new_cell2.appendChild(new_campo)
        new_cell.appendChild(new_btn)
        new_row.appendChild(new_cell)
        new_row.appendChild(new_cell2)
        table_body.appendChild(new_row)
    
        new_campo.type = "text"
        new_campo.className = "form-control"
        new_btn.className = "btn btn-danger"
        new_btn.innerText = "Eliminar"
        new_btn.value = elem.id
        new_btn.disabled = true
        
        new_campo.addEventListener("keyup",()=>{ 
            if(new_campo.value == elem.carnet){
                new_btn.disabled = false; 
            }else{
                new_btn.disabled = true; 
            }
        })
    
        new_btn.addEventListener("click", event=>{
            let id_actual = event.target.value
            student_list.forEach((elemento, posicion)=>{
                if(id_actual == elemento.id){
                    student_list.splice(posicion, 1)
                    printArray()
                }
            })
        })
    }))
}

let addStudent = (carnet, schedule, late)=>{
    student_list.push({
        "id": serial,
        "carnet": carnet,
        "horario": schedule,
        "hora": new Date().toLocaleString(),
        "tarde": late
    })
    printArray()
    serial++
}

/*
    Función para parsear el valor booleano del late_switch
*/

let parseLateSwitch= (value)=>{
    if(value){
        return "Tardisimo"
    }
    return "A tiempo"
}

/*
    Listener para detectar el click en el boton
*/

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
    }else{
        alert("Formáto de carnet no válido")
    }
})

/*
    Listener para disparar el botón cuando se aprete enter
*/

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
    submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
})