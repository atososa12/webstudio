// Mostrar el botón al hacer scroll
window.onscroll = function() {
  const btn = document.getElementById("btnVolverArriba");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Función para volver arriba
document.getElementById("btnVolverArriba").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
