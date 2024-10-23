function sockMerchant(n, ar) {
    // Write your code here
    const counter = {}
    let pair = 0
    for (let i = 0; i < n; i++){
        counter[ar[i]] = counter[ar[i]]? counter [ar[i]]+1 : 1;
        }
        const keys = Object.keys(counter);
        for (let i=0; i< keys.length; i+=1){
            pair += Math.floor(counter[keys[i]]/2)
        } 
    return pair                 
    }
/*
    Esta función, llamada sockMerchant, se utiliza para contar cuántos pares de calcetines se pueden hacer a partir de una lista de calcetines dados. Aquí está la explicación paso a paso de lo que hace:
    Parámetros:
    
        n: El número total de calcetines.
        ar: Un arreglo (lista) de enteros que representan los diferentes tipos de calcetines.
    
    Objetivo:
    
    El objetivo es encontrar cuántos pares de calcetines se pueden hacer. Cada par está compuesto por dos calcetines del mismo tipo.
    Paso a paso:
    
        Inicialización del contador y la variable de pares:
    
        javascript
    
    const counter = {};
    let pair = 0;
    
        Se crea un objeto counter vacío que servirá para contar cuántos calcetines de cada tipo hay.
        La variable pair se inicializa en 0, que almacenará la cantidad total de pares de calcetines.
    
    Primer bucle: contar los calcetines:
    
    javascript
    
    for (let i = 0; i < n; i++) {
        counter[ar[i]] = counter[ar[i]] ? counter[ar[i]] + 1 : 1;
    }
    
        Este bucle recorre el arreglo ar de calcetines.
        Para cada calcetín (es decir, ar[i]), verifica si ya está registrado en el objeto counter:
            Si el tipo de calcetín ya existe en el contador, aumenta su valor en 1 (counter[ar[i]] + 1).
            Si no existe, lo inicializa con 1 (counter[ar[i]] = 1).
    
    Ejemplo: Si el arreglo ar es [1, 2, 1, 2, 1, 3, 2], el objeto counter resultante sería:
    
    javascript
    
    { '1': 3, '2': 3, '3': 1 }
    
    Esto significa que hay 3 calcetines del tipo 1, 3 del tipo 2 y 1 del tipo 3.
    
    Segundo bucle: contar los pares:
    
    javascript
    
    const keys = Object.keys(counter);
    for (let i = 0; i < keys.length; i++) {
        pair += Math.floor(counter[keys[i]] / 2);
    }
    
        Primero, se obtienen las claves (tipos de calcetines) del objeto counter usando Object.keys(counter).
        Luego, se recorre cada tipo de calcetín. Para cada tipo, se calcula cuántos pares se pueden formar dividiendo la cantidad de calcetines por 2 (counter[keys[i]] / 2) y tomando solo la parte entera con Math.floor(). Este valor se añade a la variable pair.
    
    Ejemplo: Siguiendo el ejemplo anterior:
    
        Para el tipo 1 (hay 3 calcetines), se pueden formar 1 par (Math.floor(3 / 2) = 1).
        Para el tipo 2 (hay 3 calcetines), se pueden formar 1 par (Math.floor(3 / 2) = 1).
        Para el tipo 3 (hay 1 calcetín), no se puede formar ningún par (Math.floor(1 / 2) = 0).
    
    Entonces, pair será 1 + 1 + 0 = 2.
    
    Retornar el número de pares:
    
    javascript
    
        return pair;
    
            Finalmente, la función retorna el número total de pares de calcetines.
    
    Resumen:
    
    Este código cuenta cuántos calcetines hay de cada tipo y luego calcula cuántos pares se pueden formar dividiendo el número de calcetines de cada tipo por 2 y sumando los resultados.
    */