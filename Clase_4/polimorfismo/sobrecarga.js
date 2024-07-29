class Calculador {
    Suma(a, b, c) {
        if (a !== undefined && b === undefined && c === undefined) {
            return a + a;
        }

        if (a !== undefined && b !== undefined && c === undefined) {
            return a + b;
        }

        if (a !== undefined && b !== undefined && c !== undefined) {
            return a + b + c;
        }

        return 0; // Para manejar casos donde no se cumpla ninguna condición.
    }
}

let objCalculador = new Calculador();
console.log(objCalculador.Suma(5)); // Debe imprimir 10 (5 + 5)

let objCalculador2 = new Calculador();
console.log(objCalculador2.Suma(5, 2)); // Debe imprimir 7 (5 + 2)

let objCalculador3 = new Calculador();
console.log(objCalculador3.Suma(5, 3, 1)); // Debe imprimir 9 (5 + 3 + 1)
