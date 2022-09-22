let button = document.getElementById("submit");
let user = document.getElementById("inputEmail").value;

let inicio = document.getElementById("link");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="panel.html";
    alert(`Bienvenido ${user}`)
})

inicio.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="index.html";
    alert("Sesión Finalizada");
})
