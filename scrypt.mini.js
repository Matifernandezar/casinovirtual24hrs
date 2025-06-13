  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("whatsapp-form").addEventListener("submit", e => {
      e.preventDefault();
      const nombre = document.getElementById("name").value.trim();
      if (!nombre) {
        alert("Por favor, ingresa tu nombre antes de continuar.");
        return;
      }
      const url = `https://wa.link/wm9668?text=${encodeURIComponent(`Hola, mi nombre es ${nombre}. Me gustaría tener más información para jugar.`)}`;
      window.open(url, "_blank");
    });
  });
