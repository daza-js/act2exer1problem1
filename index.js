// Importar el módulo readline
const readline = require("readline");

// Configuración de readline para recibir entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para procesar el arreglo
function processArray(numbers) {
  // Convertir los números a enteros
  const parsedNumbers = numbers.map(Number);

  // Validar si todos los valores son números válidos
  if (parsedNumbers.some(isNaN)) {
    return "El arreglo contiene valores no numéricos.";
  }

  // Inicializar variables para cálculo
  let max = parsedNumbers[0];
  let min = parsedNumbers[0];
  let sum = 0;

  // Recorrer el arreglo
  for (let i = 0; i < parsedNumbers.length; i++) {
    const current = parsedNumbers[i];
    if (current > max) max = current; // Mayor
    if (current < min) min = current; // Menor
    sum += current; // Suma
  }

  // Calcular promedio
  const average = sum / parsedNumbers.length;

  // Retornar resultados
  return `
  Resultados:
  - Mayor: ${max}
  - Menor: ${min}
  - Promedio: ${average.toFixed(2)}
  `;
}

// Solicitar al usuario el arreglo de números
rl.question("Ingresa un arreglo de números separados por comas: ", (input) => {
  // Dividir la entrada en un arreglo
  const numbers = input.split(",");

  // Procesar el arreglo y mostrar resultados
  const result = processArray(numbers);
  console.log(result);

  // Cerrar la interfaz readline
  rl.close();
});
