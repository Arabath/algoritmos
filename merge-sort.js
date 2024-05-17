/*

Ejemplo de ordenamiento por mezcla en JavaScript
El ordenamiento por mezcla (también conocido como Merge Sort) es un algoritmo de ordenamiento eficiente y versátil que divide una lista en sublistas más pequeñas, 
las ordena recursivamente y luego las combina para formar una lista ordenada. 
Este algoritmo tiene una complejidad de tiempo promedio y en el peor caso de O(n log n), lo que lo convierte en una opción popular para ordenar grandes conjuntos de datos.

*/

function fusionar(izquierda, derecha) {
    const resultado = [];
    let i = 0;
    let j = 0;
  
    while (i < izquierda.length && j < derecha.length) {
      if (izquierda[i] <= derecha[j]) {
        resultado.push(izquierda[i]);
        i++;
      } else {
        resultado.push(derecha[j]);
        j++;
      }
    }
  
    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
  }
  
  function ordenamientoPorMezcla(lista) {
    if (lista.length <= 1) {
      return lista;
    }
  
    const mitad = Math.floor(lista.length / 2);
    const izquierda = ordenamientoPorMezcla(lista.slice(0, mitad));
    const derecha = ordenamientoPorMezcla(lista.slice(mitad));
    return fusionar(izquierda, derecha);
  }
  
  const listaDesordenada = [5, 2, 4, 1, 3];
  console.log("Lista desordenada:", listaDesordenada);
  
  const listaOrdenada = ordenamientoPorMezcla(listaDesordenada);
  console.log("Lista ordenada:", listaOrdenada);
  

  /*
  
  Explicación:

El código anterior define dos funciones: fusionar y ordenamientoPorMezcla.

La función fusionar toma dos listas ordenadas como entrada y las combina en una sola lista ordenada. La función recorre ambas listas al mismo tiempo y compara los elementos correspondientes. 
Si un elemento de la primera lista es menor o igual que el elemento correspondiente de la segunda lista, se agrega a la lista de resultados. 
De lo contrario, se agrega el elemento de la segunda lista. Finalmente, la función concatena los elementos restantes de ambas listas a la lista de resultados y la devuelve.

La función ordenamientoPorMezcla implementa el algoritmo de ordenamiento por mezcla recursivamente. Si la lista tiene un tamaño de 1 o menos, ya está ordenada y se devuelve tal cual. 
En caso contrario, la función divide la lista en dos sublistas iguales, las ordena recursivamente usando la misma función y luego las combina usando la función fusionar.

Ventajas del ordenamiento por mezcla:

Eficiencia: El ordenamiento por mezcla tiene una complejidad de tiempo promedio y en el peor caso de O(n log n), lo que lo convierte en uno de los algoritmos de ordenamiento más rápidos.
Estabilidad: El ordenamiento por mezcla es un algoritmo estable, lo que significa que conserva el orden relativo de los elementos iguales.
Versatilidad: El ordenamiento por mezcla se puede implementar en diferentes lenguajes de programación y se puede utilizar para ordenar una variedad de tipos de datos.
Desventajas del ordenamiento por mezcla:

Espacio: El ordenamiento por mezcla requiere memoria adicional para almacenar las sublistas durante la recursión.
Complejidad: La implementación del ordenamiento por mezcla puede ser un poco más compleja que la de algunos algoritmos de ordenamiento más simples.
  
  */