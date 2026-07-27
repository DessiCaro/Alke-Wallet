const inputNombre = document.getElementById("nombre");
const btnRegistrar = document.getElementById("registrar");
const listaUsuarios = document.getElementById("lista-usuarios");
const total = document.getElementById("total");

/*Obtener desde el storage*/
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

/*Guardar en el storage*/
function guardarStorage(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
/*Renderizar al usuario*/
function renderUsuarios(){
    listaUsuarios.innerHTML = "";
/*Creación de elementos*/
    usuarios.forEach((usuario, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const btnEliminar = document.createElement("button");
/*Contenido*/
        span.textContent = usuario.nombre;
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn", "btn-danger");

        li.appendChild(span);
        li.appendChild(btnEliminar);

        listaUsuarios.appendChild(li)

        btnEliminar.addEventListener("click", function(){
            usuarios.splice(index, 1);
            guardarStorage();
            renderUsuarios();
        })
    })
}
/*Registrar al usuario*/
btnRegistrar.addEventListener("click", function(){
    const nombre = inputNombre.value.trim();

    if (nombre === ""){
        alert("Debe ingresar un nombre.")
        return;
    }

    usuarios.push({
        nombre: nombre
    })

    guardarStorage();
    renderUsuarios();

    inputNombre.value = "";
    inputNombre.focus();
})

renderUsuarios();
