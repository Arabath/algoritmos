/*

Ejemplo de Sets (conjuntos) en JavaScript
Definición:

Un conjunto en JavaScript, también conocido como Set, es una estructura de datos que almacena una colección de valores únicos. 
A diferencia de los arreglos, que pueden contener valores duplicados, los conjuntos solo permiten valores únicos. Esto hace que 
los sets sean útiles para tareas como eliminar duplicados de una lista o verificar si un elemento existe en una colección.

*/

// Crear un conjunto vacío
const conjunto = new Set();

// Agregar elementos al conjunto
conjunto.add("valor1");
conjunto.add("valor2");
conjunto.add("valor3");

// Verificar si un elemento existe en el conjunto
console.log("¿'valor2' está en el conjunto?", conjunto.has("valor2")); // true

// Eliminar un elemento del conjunto
conjunto.delete("valor3");

// Recorrer el conjunto y mostrar los elementos
conjunto.forEach(valor => console.log(valor));

// Tamaño del conjunto
console.log("Tamaño del conjunto:", conjunto.size);

// Vaciar el conjunto
conjunto.clear();


/*

Explicación:

El código anterior crea un conjunto vacío usando la palabra clave new Set(). Luego, agrega elementos al conjunto usando el método add(). 
El método has() verifica si un elemento específico existe en el conjunto. El método delete() elimina un elemento del conjunto. 
El método forEach() recorre los elementos del conjunto y ejecuta una función para cada uno. La propiedad size devuelve la cantidad de elementos en el conjunto. 
El método clear() vacía el conjunto, eliminando todos los elementos.

Casos de uso:

Eliminar duplicados de una lista: Se puede crear un conjunto a partir de una lista y luego recorrer el conjunto para obtener los valores únicos.
Verificar si un elemento existe en una colección: El método has() es muy eficiente para verificar si un elemento existe en un conjunto, 
lo que lo hace ideal para tareas como la validación de datos o la búsqueda en bases de datos.
Combinar conjuntos: Los conjuntos se pueden combinar fácilmente usando el método union().
Encontrar la diferencia entre conjuntos: El método difference() devuelve los elementos que están en un conjunto pero no en otro.
Encontrar la intersección de conjuntos: El método intersection() devuelve los elementos que están presentes en ambos conjuntos.

*/