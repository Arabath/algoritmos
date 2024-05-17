/*

Ejemplo de listas enlazadas en JavaScript
Definición:

Una lista enlazada es una estructura de datos dinámica que almacena elementos de forma lineal. 
A diferencia de los arreglos, que tienen acceso aleatorio a los elementos, las listas enlazadas se componen de nodos, 
donde cada nodo contiene un dato y una referencia al siguiente nodo en la lista. Esta estructura permite insertar, 
eliminar y recorrer elementos de forma eficiente.

Implementación:

*/

class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    // Agregar un elemento al final de la lista
    agregar(dato) {
      const nuevoNodo = new Nodo(dato);
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
      } else {
        let actual = this.cabeza;
        while (actual.siguiente !== null) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
    }
  
    // Recorrer la lista y mostrar los elementos
    recorrer() {
      let actual = this.cabeza;
      while (actual !== null) {
        console.log(actual.dato);
        actual = actual.siguiente;
      }
    }
  
    // Buscar un elemento en la lista
    buscar(dato) {
      let actual = this.cabeza;
      while (actual !== null) {
        if (actual.dato === dato) {
          return true;
        }
        actual = actual.siguiente;
      }
      return false;
    }
  
    // Eliminar un elemento de la lista
    eliminar(dato) {
      let anterior = null;
      let actual = this.cabeza;
      while (actual !== null) {
        if (actual.dato === dato) {
          if (anterior === null) {
            this.cabeza = actual.siguiente;
          } else {
            anterior.siguiente = actual.siguiente;
          }
          return true;
        }
        anterior = actual;
        actual = actual.siguiente;
      }
      return false;
    }
  }

  const lista = new ListaEnlazada();

lista.agregar(10);
lista.agregar(20);
lista.agregar(30);

console.log("Recorriendo la lista:");
lista.recorrer();

console.log("\n¿El elemento 20 está en la lista?", lista.buscar(20));

console.log("\nEliminando el elemento 20...");
lista.eliminar(20);

console.log("\nLista después de eliminar el elemento 20:");
lista.recorrer();


/*
Explicación:

El código anterior define dos clases: Nodo y ListaEnlazada. La clase Nodo representa un nodo individual en la lista, 
con propiedades para almacenar el dato y la referencia al siguiente nodo. La clase ListaEnlazada implementa las operaciones básicas de una lista enlazada, 
como agregar, recorrer, buscar y eliminar elementos.

El ejemplo de uso crea una instancia de la clase ListaEnlazada, agrega algunos elementos, los recorre, busca un elemento específico, 
lo elimina y finalmente recorre la lista nuevamente para ver el cambio.

*/

