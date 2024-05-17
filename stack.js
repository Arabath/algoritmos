/*



*/

class Stack {
    constructor() {
      // Creamos un array vacío para almacenar los elementos de la pila
      this.items = [];
    }
  
    // Agrega un elemento a la cima de la pila
    push(element) {
      this.items.push(element);
    }
  
    // Elimina y devuelve el elemento de la cima de la pila
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    // Devuelve el elemento de la cima de la pila sin eliminarlo
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items[this.items.length - 1];
    }
  
    // Verifica si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Devuelve el tamaño de la pila (cantidad de elementos)
    size() {
      return this.items.length;
    }
  }
  
  // Ejemplo de uso
  const pila = new Stack();
  
  pila.push("elemento 1");
  pila.push("elemento 2");
  pila.push("elemento 3");
  
  console.log("Tamaño de la pila:", pila.size()); // 3
  
  console.log("Elemento de la cima:", pila.peek()); // "elemento 3"
  
  console.log("Eliminando y mostrando el elemento de la cima:", pila.pop()); // "elemento 3"
  
  console.log("Elemento de la cima:", pila.peek()); // "elemento 2"
  

  /*
  
  Clase Stack: Se define una clase llamada Stack que representa la pila.
Constructor: El constructor inicializa un array vacío llamado items para almacenar los elementos de la pila.
push(element): Este método agrega un nuevo elemento (element) a la cima de la pila usando el método push del array interno items.
pop(): Este método elimina y devuelve el elemento de la cima de la pila. Si la pila está vacía, muestra un mensaje indicando la situación.
peek(): Este método devuelve el elemento de la cima de la pila sin eliminarlo. Si la pila está vacía, muestra un mensaje indicando la situación.
isEmpty(): Este método verifica si la pila está vacía. Devuelve true si está vacía y false en caso contrario.
size(): Este método devuelve el tamaño actual de la pila (cantidad de elementos).
Ejemplo de uso: Se crea una instancia de la clase Stack y se agregan elementos a la pila usando push. Luego, se muestran el tamaño, el elemento de la cima 
y se eliminan elementos usando pop y peek.
Este ejemplo demuestra las operaciones básicas de una pila (LIFO - Last In, First Out) en JavaScript.
  
  */