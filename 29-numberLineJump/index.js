function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    return v2 < v1 && (x1 - x2) % (v2 - v1) === 0 ? "YES" : "NO"

}



/**
 * La función kangaroo(x1, v1, x2, v2) determina si dos 
canguros, que comienzan en diferentes posiciones (x1 y x2) 
con diferentes velocidades (v1 y v2), se encontrarán en el 
mismo punto después de dar la misma cantidad de saltos.

 Variables

    x1: Posición inicial del primer canguro.
    v1: Velocidad (saltos por unidad de tiempo) del primer canguro.
    x2: Posición inicial del segundo canguro.
    v2: Velocidad del segundo canguro.

Análisis matemático

La ecuación de posición para cada canguro después de n 
saltos es:
Posicioˊn del canguro 1=x1+n×v1
Posicioˊn del canguro 1=x1+n×v1
Posicioˊn del canguro 2=x2+n×v2
Posicioˊn del canguro 2=x2+n×v2

Queremos encontrar un n donde ambas posiciones sean iguales:
x1+n×v1=x2+n×v2
x1+n×v1=x2+n×v2

Despejamos n:
x1−x2=n×(v2−v1)
x1−x2=n×(v2−v1)
n=x1−x2v2−v1
n=v2−v1x1−x2​

Para que n sea válido:

    Debe ser un número entero: (x1 - x2) % (v2 - v1) === 0
    Debe ser positivo (n ≥ 0): Para esto, v1 > v2 
    (porque si v2 es mayor, el segundo canguro siempre irá 
    más rápido y nunca se encontrarán).

Condición en la función

return v2 < v1 && (x1 - x2) % (v2 - v1) === 0 ? "YES" : "NO";

    v2 < v1
        Garantiza que el primer canguro sea más rápido que el
        segundo (para poder alcanzarlo).
    (x1 - x2) % (v2 - v1) === 0
        Garantiza que la distancia entre ellos sea múltiplo 
        de la diferencia de velocidades, es decir, que n sea 
        un número entero positivo.
 */