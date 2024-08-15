//Obtencion de los valores de los campos de registro (Ningún campo puede estar vacío).
document.getElementById("regBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value.trim();
    const password2 = document.getElementById("password2").value.trim();
    const terminos = document.getElementById("terminos").checked;
});

//Validacion que se cumpla que ningun campo se encuentra vacio 
if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
    showAlertError("Todos los campos son obligatorios.");
    return;
}





function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}