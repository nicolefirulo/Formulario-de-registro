function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let terms = document.getElementById("terminos");
let btn = document.getElementById("regBtn");

function checkedTerms() {
    return terms.checked;
}

function showTermsSuccess() {
    if (checkedTerms()) {
        alert("success");
    } else {
        alert("error")
    }
}

btn.addEventListener('click', showTermsSuccess);