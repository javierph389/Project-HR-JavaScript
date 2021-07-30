class Empleado {
    constructor(nombre, cargo, sueldo) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }
}

const listaEmpleados = [];

let botonlogin = document.getElementById("btnlog");
botonlogin.addEventListener("click", logearUsuario);
function logearUsuario() {
    let loguser = document.getElementById("loginu").value;
    $("#cajalogin").remove();
    $("#login").append("Bienvenido/a " + loguser);
}

$("#instrucc").on('click',function() {
    $('#instruc').toggle("fast");
});

$("#contacto").on('click',function() {
    $('#contact').toggle("fast");
});

$("#about").on('click',function() {
    $('#acerca').toggle("fast");
});

function empleadoOk() {
    const nombre = prompt("Ingrese Nombre y Apellido:");
    const cargo = prompt("Ingrese cargo:");
    const sueldo = +prompt("Ingrese sueldo bruto del/la colaborador/a");
    
    const empleado1 = new Empleado(nombre, cargo, sueldo);
    listaEmpleados.push(empleado1);
}

let btnproceso = document.getElementById("btniniciar");
btnproceso.addEventListener("click", empleadoOk);

/* 
function addUser() {
    function agregarUsuario(nombre, cargo, sueldo){
        const colaborador = {nombre, cargo, sueldo};
        listaEmpleados.push(colaborador);
    }

    agregarUsuario(nombre, cargo, sueldo);
    alert("Usuario creado exitosamente");

    const localSave = (clave, valor) => { localStorage.setItem(clave, valor)};
    for (const colab of listaEmpleados) {
        localSave(colab.nombre, JSON.stringify(colab))
    }
    
    for (const colaborador of listaEmpleados) {
        $('#usering').append(`<p>Nombre del colaborador/a: ${colaborador.nombre}</p>
                            <p>Cargo Ocupado: ${colaborador.cargo}</p>
                            <p>Sueldo Percibido: ${colaborador.sueldo}</p>`);
    }
}
 */
$('.btn-iniciar').on('click', function() {
    $('#seccionbono').show("fast");
});

let botonBono = document.getElementById("btnbono");
botonBono.addEventListener("click", calcBono);
function calcBono() {
    let inputVal = document.getElementById("valorSueldo").value;
    if (inputVal <= 200000) {
        $("#calculoTot").append(`<h4>Usted es acreedor de un bono de $50000.</h4>`);
    } else {
        $("#calculoTot").append(`<h4>Usted no califica para el bono.</h4>`);
    }
}



