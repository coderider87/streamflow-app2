// StreamFlow App – Frontend JavaScript
const VERSION = '1.2.0';

function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a StreamFlow!`;
}

function healthCheck() {
  return {
    status: 'ok',
    version: VERSION,
    timestamp: new Date().toISOString(),
    mensaje: 'Sistema StreamFlow funcionando correctamente'
  };
}

function verificarSistema() {
  const resultado = healthCheck();
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = `✅ ${resultado.mensaje} | ${resultado.timestamp}`;
  statusDiv.style.color = '#009B4C';
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('version').textContent = `v${VERSION}`;
  verificarSistema();
});