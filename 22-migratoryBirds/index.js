function migratoryBirds(arr) {
    // Write your code here
   let max = 0;
   let max_id = 6;
   let store = new Array (6).fill(0);
   for (const num of arr){
       store[num]++;
       if(store[num]> max){
           max=store[num]
           max_id = num;
      } else if (store [num] === max && num < max_id){
          max_id = num
      }
   }
   return max_id
    }

    /**
     Esta función, migratoryBirds, toma un arreglo arr de números que representan identificadores de tipos de aves y encuentra el identificador del tipo de ave más frecuente. Si hay varios tipos con la misma frecuencia, retorna el identificador más bajo entre ellos. Aquí tienes una explicación paso a paso:

    Inicialización de variables:
        max: Almacena la frecuencia máxima encontrada para un tipo de ave. Comienza en 0.
        max_id: Almacena el identificador del ave más frecuente. Comienza en 6, ya que los tipos de aves están en el rango 1-5.
        store: Un arreglo de longitud 6 lleno de ceros, donde el índice representa el identificador de un ave, y el valor almacenado en cada índice cuenta las ocurrencias de ese identificador.

    Llenado y conteo de frecuencia:
        Se recorre el arreglo arr con un bucle for...of, donde cada número num representa un identificador de ave.
        Para cada num, se incrementa el valor en store[num] para contar la ocurrencia de ese tipo de ave.

    Actualización de max y max_id:
        Si store[num] (la frecuencia del ave num) supera el valor de max, se actualizan max a esta nueva frecuencia y max_id a num.
        Si store[num] es igual a max (hay un empate en frecuencia), pero num es menor que el valor actual de max_id, entonces max_id se actualiza a num para asegurar que se selecciona el menor identificador en caso de empate.

    Retorno del resultado:
        Al final, la función devuelve max_id, que corresponde al identificador del tipo de ave más frecuente en arr, o el menor identificador entre los más frecuentes en caso de empate.

Ejemplo de uso


const birds = [1, 1, 2, 2, 3, 3, 3, 4, 5];
console.log(migratoryBirds(birds)); // Supón que devuelve 3

En este caso, el resultado será 3 si el tipo de ave 3 tiene la mayor frecuencia en el arreglo birds.
     */
    /**
EJEMPLO
Claro, aquí tienes un ejemplo paso a paso de cómo funcionaría la función `migratoryBirds`:

### Ejemplo
Supón que tienes el siguiente arreglo de tipos de aves:

```javascript
const arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5];
```

Queremos encontrar el tipo de ave que aparece con mayor frecuencia. Si hay un empate en la frecuencia, devolveremos el tipo de ave con el identificador menor.

### Paso 1: Inicialización
- `max = 0` (para almacenar la frecuencia máxima encontrada).
- `max_id = 6` (para almacenar el identificador del ave con frecuencia máxima, comenzamos en 6, fuera del rango).
- `store = [0, 0, 0, 0, 0, 0]` (para contar las ocurrencias de cada tipo de ave, del 1 al 5).

### Paso 2: Recorrer el arreglo `arr`
Para cada elemento en `arr`, incrementaremos su contador en `store`:

1. `num = 1`, entonces `store[1]++` → `store = [0, 1, 0, 0, 0, 0]`.
   - `store[1] > max`, entonces:
     - `max = 1`
     - `max_id = 1`

2. `num = 1`, entonces `store[1]++` → `store = [0, 2, 0, 0, 0, 0]`.
   - `store[1] > max`, entonces:
     - `max = 2`
     - `max_id = 1`

3. `num = 2`, entonces `store[2]++` → `store = [0, 2, 1, 0, 0, 0]`.
   - No cambia `max` o `max_id` porque `store[2]` no es mayor que `max`.

4. `num = 2`, entonces `store[2]++` → `store = [0, 2, 2, 0, 0, 0]`.
   - `store[2] == max`, pero `num` no es menor que `max_id`, así que no cambiamos nada.

5. `num = 3`, entonces `store[3]++` → `store = [0, 2, 2, 1, 0, 0]`.

6. `num = 3`, entonces `store[3]++` → `store = [0, 2, 2, 2, 0, 0]`.

7. `num = 3`, entonces `store[3]++` → `store = [0, 2, 2, 3, 0, 0]`.
   - `store[3] > max`, entonces:
     - `max = 3`
     - `max_id = 3`

8. `num = 4`, entonces `store[4]++` → `store = [0, 2, 2, 3, 1, 0]`.

9. `num = 4`, entonces `store[4]++` → `store = [0, 2, 2, 3, 2, 0]`.

10. `num = 4`, entonces `store[4]++` → `store = [0, 2, 2, 3, 3, 0]`.

11. `num = 5`, entonces `store[5]++` → `store = [0, 2, 2, 3, 3, 1]`.

### Paso 3: Retorno del resultado
Al final, `max_id = 3`, por lo que la función retornará `3`, que es el tipo de ave con la mayor frecuencia en el arreglo `arr`. 

```javascript
console.log(migratoryBirds(arr)); // Devuelve 3
```
     */