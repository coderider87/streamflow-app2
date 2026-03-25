// Pruebas básicas – sin librerías externas
import { saludar, despedir, estadoSistema, sumar } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // Test 1
  const r1 = saludar("Juan");
  if (r1.includes("Juan")) {
    console.log("✅ Test 1 pasado: saludar() funciona");
    pasadas++;
  } else {
    console.log("❌ Test 1 fallido:", r1);
    fallidas++;
  }

  // Test 2
  const estado = estadoSistema();
if (estado.estado === "activo") {
    console.log("✅ Test 2 pasado: estadoSistema() funciona");
    pasadas++;
  } else {
    console.log("❌ Test 2 fallido:", estado);
    fallidas++;
  }

  const r3 = sumar(5, 3);
if (r3 === 8) {
  console.log("✅ Test 3 pasado: sumar() funciona");
  pasadas++;
} else {
  console.log("❌ Test 3 fallido:", r3);
  fallidas++;
}


  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");
  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
