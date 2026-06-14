const botones = document.querySelectorAll(".nav-btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => { //Añadida => mejora para entender 
    // Apagar la sección activa y el botón activo
    document.querySelectorAll(".seccion").forEach((s) => s.classList.remove("activa"));
    botones.forEach((b) => b.classList.remove("activo"));

    // Encender la seccion y el botón que toca
    document.getElementById(boton.dataset.target).classList.add("activa");
    boton.classList.add("activo");
  });
});