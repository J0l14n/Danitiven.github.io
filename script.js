// Función para redirigir a otra página
function redirigir(pagina) {
    window.location.href = pagina;
  }
  
  // Efecto al enviar formulario (solo visual, no real)
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        alert("¡Gracias por contactarnos! Nos comunicaremos contigo pronto.");
        form.reset();
      });
    }
  });