function pageCount(n, p) {
    // Write your code here
    let front = Math.floor(p/2)
    let back = Math.floor(n/2 - front)
    return Math.min(front, back)
}
/**
 Esta función, llamada pageCount, resuelve un problema típico de determinar el número mínimo de páginas que se deben pasar para llegar a la página deseada p en un libro con n páginas.
Entrada:

    n: Número total de páginas del libro.
    p: Página objetivo a la que deseas llegar.

Salida:

    El número mínimo de páginas que se deben pasar para llegar a la página p, comenzando desde el principio o el final del libro.

Explicación paso a paso:

    Cálculo de las páginas desde el inicio (front):

let front = Math.floor(p / 2);

    Cuando pasas páginas desde el inicio, cada "paso" o vuelta de página abarca 2 páginas (por ejemplo, del lado izquierdo está la página 1, y del lado derecho, la página 2).
    Por lo tanto, para calcular cuántas vueltas necesitas para alcanzar la página p, simplemente divides p entre 2 y redondeas hacia abajo con Math.floor.

Cálculo de las páginas desde el final (back):

let back = Math.floor(n / 2 - front);

    Similar al cálculo de front, el total de vueltas posibles desde el final del libro es Math.floor(n / 2).
    Restando front (las vueltas desde el principio hasta la página p), calculamos cuántas vueltas serían necesarias si comenzáramos desde la última página hacia atrás.

Elegir el menor número de vueltas:

    return Math.min(front, back);

        Devuelve el número mínimo de vueltas entre las que necesitas desde el inicio (front) y desde el final (back).

Ejemplo de uso:

pageCount(6, 5); // Devuelve 1

    n = 6: El libro tiene 6 páginas.
    p = 5: Deseas llegar a la página 5.

Cálculo:

    front = Math.floor(5 / 2) = 2 → Dos vueltas desde el principio.
    back = Math.floor(6 / 2 - 2) = 1 → Una vuelta desde el final.
    Resultado: Math.min(2, 1) = 1.

En este caso, es más rápido llegar desde el final con una vuelta.
 */