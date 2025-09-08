// ===== Partículas flotantes =====
const particlesContainer = document.querySelector('.particles');
function addParticle() {
  const p = document.createElement('span');
  p.classList.add('particle');
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (5 + Math.random() * 5) + 's';
  particlesContainer.appendChild(p);
  setTimeout(() => p.remove(), 8000);
}
setInterval(addParticle, 1500);

// ===== Envío del formulario (EmailJS de ejemplo) =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Mensaje enviado con éxito (demo). Aquí puedes conectar con EmailJS o backend PHP.");
});
