/*

Ejemplo de ordenamiento por selección en JavaScript
El ordenamiento por selección (también conocido como Selection Sort) es un algoritmo de ordenamiento simple que recorre una lista y encuentra el elemento mínimo en cada iteración, 
lo coloca en la posición correcta y luego continúa con el siguiente elemento mínimo. Este proceso se repite hasta que todos los elementos estén en su lugar correcto. 
El ordenamiento por selección tiene una complejidad de tiempo de O(n^2), lo que significa que su eficiencia disminuye significativamente a medida que aumenta el tamaño de la lista. 
Sin embargo, es un algoritmo simple y fácil de entender, lo que lo convierte en una buena opción para principiantes o para casos donde la eficiencia no es crítica.

*/

function ordenamientoPorSeleccion(lista) {
    for (let i = 0; i < lista.length; i++) {
      let indiceMinimo = i;
      for (let j = i + 1; j < lista.length; j++) {
        if (lista[j] < lista[indiceMinimo]) {
          indiceMinimo = j;
        }
      }
      [lista[i], lista[indiceMinimo]] = [lista[indiceMinimo], lista[i]];
    }
    return lista;
  }
  
  const listaDesordenada = [5, 2, 4, 1, 3];
  console.log("Lista desordenada:", listaDesordenada);
  
  const listaOrdenada = ordenamientoPorSeleccion(listaDesordenada);
  console.log("Lista ordenada:", listaOrdenada);
  

  /*
  
  Explicación:

El código anterior define una función llamada ordenamientoPorSeleccion que toma una lista como entrada. 
La función utiliza un bucle externo para recorrer la lista desde el principio hasta el final. En cada iteración del bucle externo, 
la variable indiceMinimo se inicializa con el índice del elemento actual.

Luego, la función utiliza un bucle interno para recorrer la lista restante desde el siguiente elemento del bucle externo hasta el final.
 En cada iteración del bucle interno, se compara el elemento actual con el elemento en el índice indiceMinimo. 
 Si el elemento actual es menor que el elemento en indiceMinimo, se actualiza la variable indiceMinimo para almacenar el índice del elemento actual.

Finalmente, después de completar el bucle interno, se intercambian los elementos en los índices i (del bucle externo) y indiceMinimo usando 
la sintaxis de desestructuración de arreglos. Este proceso se repite hasta que todos los elementos estén en su lugar correcto.

Ventajas del ordenamiento por selección:

Simplicidad: El ordenamiento por selección es un algoritmo simple y fácil de entender, lo que lo convierte en una buena opción para principiantes.
In-place: El ordenamiento por selección es un algoritmo in-place, lo que significa que no requiere memoria adicional para almacenar datos temporales.
Estabilidad: El ordenamiento por selección es un algoritmo estable, lo que significa que conserva el orden relativo de los elementos iguales.
Desventajas del ordenamiento por selección:

Eficiencia: El ordenamiento por selección tiene una complejidad de tiempo de O(n^2), lo que lo hace ineficiente para ordenar grandes conjuntos de datos.
Comparaciones: El ordenamiento por selección realiza una gran cantidad de comparaciones entre elementos, lo que puede afectar su rendimiento en algunos casos.
  
  */