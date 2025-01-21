# Procesador de arreglo

Esta es una aplicación de Node.js que:

1. Solicita al usuario ingresar un arreglo de números separados por comas.
2. Procesa el arreglo para:
   - Encontrar el número mayor.
   - Encontrar el número menor.
   - Calcular el promedio de los números.
3. Muestra los resultados en la terminal.

---

## **Explicación del código**

### **Importación del módulo readline**
- Usamos `readline` para leer entradas del usuario desde la consola.

### **Interfaz de entrada/salida**
- Configuramos `readline` para leer la entrada estándar (`stdin`) y escribir en la salida estándar (`stdout`).

### **Función processArray**
- Convierte la entrada del usuario (una cadena separada por comas) en un arreglo de números usando `split` y `map`.
- Valida que todos los elementos sean números.
- Encuentra el número mayor, menor y calcula el promedio.

### **Flujo principal**
- La aplicación solicita al usuario un arreglo de números.
- Llama a `processArray` para calcular los resultados.
- Muestra los resultados en la consola.

### **Cierre de la interfaz**
- Una vez procesada la entrada y mostrados los resultados, cerramos `readline` usando `rl.close()`.

---

---

## **Ejecutar la aplicación**

1. Abre la terminal y dirígete a la carpeta del proyecto:
   ```bash
   cd act2exer1problem1
   ```

2. Ejecuta la aplicación:
   ```bash
   node index.js
   ```

3. Cuando se te solicite, ingresa un arreglo de números separados por comas. Por ejemplo:
   ```
   Ingresa un arreglo de números separados por comas: 12,45,7,89,23,56
   ```

   Resultado esperado:
   ```
   Resultados:
   - Mayor: 89
   - Menor: 7
   - Promedio: 38.67
   ```

---
