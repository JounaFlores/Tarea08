// Función fábrica para crear una cuenta bancaria
function crearCuentaBancaria(saldoInicial) {
    // Propiedad privada
    let saldo = saldoInicial;

    // Método privado para depositar dinero
    function depositar(cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        } else {
            console.log("La cantidad a depositar debe ser mayor a cero.");
        }
    }

    // Método privado para retirar dinero
    function retirar(cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
        } else {
            console.log("La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible.");
        }
    }

    // Retornamos un objeto con métodos públicos
    return {
        consultarSaldo: function() {
            return saldo;
        },
        realizarDeposito: function(cantidad) {
            depositar(cantidad);
        },
        realizarRetiro: function(cantidad) {
            retirar(cantidad);
        }
    };
}

// Ejemplo de uso
var miCuenta = crearCuentaBancaria(1000);
console.log("Saldo inicial:", miCuenta.consultarSaldo()); // Saldo inicial: 1000
miCuenta.realizarDeposito(500);
console.log("Saldo después del depósito:", miCuenta.consultarSaldo()); // Saldo después del depósito: 1500
miCuenta.realizarRetiro(200);
console.log("Saldo después del retiro:", miCuenta.consultarSaldo()); // Saldo después del retiro: 1300

// Intento de acceder a métodos privados (no funcionará)
try {
    miCuenta.depositar(100); // Error: miCuenta.depositar is not a function
} catch (e) {
    console.log(e.message); // message es la propiedad del objeto e, contiene una string describiendo al error
}

try {
    miCuenta.retirar(100); // Error: miCuenta.retirar is not a function
} catch (e) {
    console.log(e.message);
}
