function solucion(num1, num2) {
    let resta = num1 - num2;
    let suma = num1 + num2;
    let resultado = parseInt("" + resta + suma);

    console.log(num1 + " + " + num2 + " = " + resultado)
    return resultado
}

solucion(5, 4)       // Imprime: 5 + 4 = 19
solucion(8, 2)       // Imprime: 8 + 2 = 610
solucion(10, 8)      // Imprime: 10 + 8 = 218
solucion(12, 9)      // Imprime: 12 + 9 = 321
solucion(18, 2)      // Imprime: 18 + 2 = 1620
solucion(21, 5)      // Imprime: 21 + 5 = 1626
solucion(12, 8)      // Imprime: 12 + 8 = 420
