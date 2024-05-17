/*

Ejemplo de "cola" (Queue) en JavaScript
A continuación, te presento un ejemplo de cómo implementar una cola (queue) en JavaScript:

*/

class Queue {
    constructor() {
      // Creamos un array vacío para almacenar los elementos de la cola
      this.items = [];
    }
  
    // Agrega un elemento al final de la cola
    enqueue(element) {
      this.items.push(element);
    }
  
    // Elimina y devuelve el primer elemento de la cola
    dequeue() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items.shift();
    }
  
    // Devuelve el primer elemento de la cola sin eliminarlo
    front() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items[0];
    }
  
    // Verifica si la cola está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Devuelve el tamaño de la cola (cantidad de elementos)
    size() {
      return this.items.length;
    }
  }
  
  // Ejemplo de uso
  const cola = new Queue();
  
  cola.enqueue("elemento 1");
  cola.enqueue("elemento 2");
  cola.enqueue("elemento 3");
  
  console.log("Tamaño de la cola:", cola.size()); // 3
  
  console.log("Primer elemento:", cola.front()); // "elemento 1"
  
  console.log("Eliminando y mostrando el primer elemento:", cola.dequeue()); // "elemento 1"
  
  console.log("Primer elemento:", cola.front()); // "elemento 2"
  

  /*
  
  Clase Queue: Se define una clase llamada Queue que representa la cola.
Constructor: El constructor inicializa un array vacío llamado items para almacenar los elementos de la cola.
enqueue(element): Este método agrega un nuevo elemento (element) al final de la cola usando el método push del array interno items.
dequeue(): Este método elimina y devuelve el primer elemento de la cola. Si la cola está vacía, muestra un mensaje indicando la situación.
front(): Este método devuelve el primer elemento de la cola sin eliminarlo. Si la cola está vacía, muestra un mensaje indicando la situación.
isEmpty(): Este método verifica si la cola está vacía. Devuelve true si está vacía y false en caso contrario.
size(): Este método devuelve el tamaño actual de la cola (cantidad de elementos).
Ejemplo de uso: Se crea una instancia de la clase Queue y se agregan elementos a la cola usando enqueue. Luego, se muestran el tamaño, el primer elemento y se eliminan elementos usando dequeue y front.
Este ejemplo demuestra las operaciones básicas de una cola (FIFO - First In, First Out) en JavaScript.
  
  */