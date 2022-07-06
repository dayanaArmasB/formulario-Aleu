'use strict';
document.addEventListener('DOMContentLoaded',()=>{
console.log("documento inciializado");
});
const formulario = document.querySelector("#form_principal");
const mainform = document.getElementsByClassName("mainform");
const Name = document.querySelector("#Name");
const Lastname = document.querySelector("#Lastname");
const Email = document.querySelector("#Email");
const datos ={
    Name:'',
    Lastname:'',
    Email:''
};

const leerTexto = (e) => {
    datos[e.target.id] = e.target.value;
}

Name.addEventListener('input',leerTexto);
Lastname.addEventListener('input',leerTexto);
Email.addEventListener('input',leerTexto);
 
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    //Validar 
    const { Name,Lastname,Email} = datos;
    if(Name ==='' || Lastname === ''|| Email ===''){
      console.log("Todos los campos son obligatorios")
       mostrarError("Todos los campos son obligatorios");
    }
    else
    {
        let msg = document.querySelector("#validacion");
        if (msg != null) {
            msg.parentNode.removeChild(msg);
        }
    }
});


const mostrarError = (mensaje) => {
    let msg = document.querySelector("#validacion");
    if (msg == null) {
        const error = document.createElement('P');
        error.textContent  = mensaje;
        error.id="validacion";
        error.classList.add('error');
        formulario.appendChild(error);
    }
};