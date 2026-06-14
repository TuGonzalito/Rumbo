const botones = document.querySelectorAll(".nav-btn");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    document.querySelectorAll(".seccion").forEach(function (seccion) {
      seccion.classList.remove("activa");
    });

    const id = boton.dataset.target;
    document.getElementById(id).classList.add("activa");
  });
});