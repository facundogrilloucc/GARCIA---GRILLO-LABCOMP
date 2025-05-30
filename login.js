function validar() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    if (usuario == "grupo" && clave == "1234") {
        alert("Bienvenido al sistema");
        window.location.href = "principal.html";
        } else {
            alert("Usuario o clave incorrectos, intente de nuevo");
        }
    }