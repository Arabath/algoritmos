/*

Ejemplo de ordenamiento burbuja en JavaScript
El ordenamiento burbuja (también conocido como Bubble Sort) es un algoritmo de ordenamiento simple que recorre una lista comparando elementos adyacentes
 y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que la lista esté ordenada.

*/

function ordenamientoBurbuja(lista) {
    for (let i = 0; i < lista.length; i++) {
      for (let j = 0; j < lista.length - i - 1; j++) {
        if (lista[j] > lista[j + 1]) {
          [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
        }
      }
    }
    return lista;
  }
  
  const listaDesordenada = [5, 2, 4, 1, 3];
  console.log("Lista desordenada:", listaDesordenada);
  
  const listaOrdenada = ordenamientoBurbuja(listaDesordenada);
  console.log("Lista ordenada:", listaOrdenada);
  

/*

Explicación:

El código anterior define una función llamada ordenamientoBurbuja que toma una lista como entrada. La función utiliza dos bucles anidados para recorrer la lista. 
El bucle externo itera sobre la lista desde el principio hasta el final, mientras que el bucle interno itera desde el principio hasta el final menos la cantidad 
actual de iteraciones del bucle externo.

En cada iteración del bucle interno, se comparan dos elementos adyacentes de la lista. Si el primer elemento es mayor que el segundo, se intercambian utilizando 
la sintaxis de desestructuración de arreglos. Este proceso se repite hasta que la lista esté ordenada, es decir, hasta que no haya más intercambios necesarios.

Finalmente, la función devuelve la lista ordenada.

Complejidad del algoritmo:

El ordenamiento burbuja tiene una complejidad de tiempo de O(n^2), lo que significa que su eficiencia disminuye significativamente a medida que aumenta el tamaño de la lista. 
Sin embargo, es un algoritmo simple y fácil de entender, lo que lo convierte en una buena opción para principiantes o para casos donde la eficiencia no es crítica.

Alternativas:

Existen algoritmos de ordenamiento más eficientes que el ordenamiento burbuja, como el ordenamiento rápido o el ordenamiento por mezcla. Sin embargo,
 el ordenamiento burbuja puede ser útil en algunos casos, como cuando se necesita comparar elementos personalizados o cuando la simplicidad es más importante que la eficiencia.

*/