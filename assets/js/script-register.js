/*REGISTRO DE USUARIO*/ 

document.getElementById("form-registro").addEventListener("submit",function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value; 
    const usuario = document.getElementById("usuario").value; 
    const password = document.getElementById("password").value; 
    const confirmarPassword = document.getElementById("confirmarPassword").value; 

    if (password !== confirmarPassword){
        document.getElementById("mensaje").innerHTML = `
        
            <div class="alert alert-danger alert-dismissible fade show" role = "alert> 
            Las contraseñas no coinciden 
            <button type="button" class="btn-close" data-bs-dismiss="alert"> </button>
            </div>
        `
    return; 
    };

    const nuevoUsuario = {
        nombre,
        usuario,
        password,
    }
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("mensaje").innerHTML = `
        
            <div class="alert alert-success alert-dismissible fade show" role = "alert> 
            ¡Registro exitoso!. Redirigiendo al Log In... 
            <button type="button" class="btn-close" data-bs-dismiss="alert"> </button>
            </div>
        `
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
})

