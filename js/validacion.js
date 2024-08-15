const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const regBtn = document.getElementById("regBtn")

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validatePasswords() {
    return password1.value === password2.value;
  }
    regBtn.addEventListener("click", () => {
    if (!validatePasswords()) {
      return;
    }

    console.log("Enviando el formulario...");
});