function countingValleys(steps, path) {
    // Write your code here
    let valleys = 0;
    let elevation = 0;
    for (let i = 0; i < steps; i++) {
        if(path[i] == "D") {
            elevation --;
        }
        else { //"U"
            if(elevation == -1) {
                valleys++;
            }
            elevation++;
        }
    }
    return valleys;
}

/**
 Ejemplo de funcionamiento

Supongamos que steps es 8 y path es "UDDDUDUU".

    Inicialización:
        valleys = 0
        elevation = 0

    Iteración:
        Paso 1: 'U' -> elevation = 1
        Paso 2: 'D' -> elevation = 0
        Paso 3: 'D' -> elevation = -1
        Paso 4: 'D' -> elevation = -2
        Paso 5: 'U' -> elevation = -1
        Paso 6: 'D' -> elevation = -2
        Paso 7: 'U' -> elevation = -1
        Paso 8: 'U' -> elevation = 0 (Sube desde el valle, valleys++)

Al final del bucle, valleys será 1, porque se atravesó un valle.
 */