// StreamFlow App – Funciones principales
// Nivel: Principiante – JavaScript básico (ES Modules)

// Función 1: Saludo al usuario
export function saludar(nombre) {
  return "Hola " + nombre + ", bienvenido a StreamFlow!";
}

// Función 2: Despedida
export function despedir(nombre) {
  return "Hasta pronto, " + nombre + "!";
}

// Función 3: Estado del sistema
export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema funcionando correctamente"
  };
}

export function sumar(a,b) {
    return a+b;
}

export function restar(a,b) {
    return a-b;
}