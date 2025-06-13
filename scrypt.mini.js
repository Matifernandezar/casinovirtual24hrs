
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("whatsapp-form").addEventListener("submit", e => {
      e.preventDefault();
      const nombre = document.getElementById("name").value.trim();
      if (!nombre) {
        alert("Por favor, ingresa tu nombre antes de continuar.");
        return;
      }

      const mensaje = `Hola, mi nombre es ${nombre}. Me gustaría tener más información para jugar.`;
      const numero = "5492975815752"; // <-- Cambiá este número si usás otro
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    });
  });

