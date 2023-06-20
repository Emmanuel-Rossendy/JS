let perifericos = {
    "1": { nombre: "Auricular", precio: 2500 },
    "2": { nombre: "Teclado", precio: 1900 },
    "3": { nombre: "Parlante", precio: 9000 },
    "4": { nombre: "Micrófono", precio: 3400 },
    "5": { nombre: "Webcam", precio: 5000 },
    "6": { nombre: "Combo de Teclado y Mouse", precio: 5900 },
    "7": { nombre: "Mouse", precio: 7300 }
};

let descuento = 0;
let precioDescuento = 0;

function mostrarCuotas() {
    let intereses = "sin interés";
    console.log('Este producto tiene las siguientes opciones de cuotas:');
    for (let i = 1; i <= 12; i++) {
        if (i >= 4) {
            intereses = "con interés";
        }
        console.log(i + " cuota(s) " + intereses);
    }
}

function mostrarPrecio(codigo) {
    let periferico = perifericos[codigo];
    if (periferico) {
        console.log(`El precio de ${periferico.nombre} es: $${periferico.precio}`);
    } else {
        console.error('No entendimos tu selección.');
    }
}

function calcularDescuento(codigo) {
    let periferico = perifericos[codigo];
    if (periferico) {
        descuento = periferico.precio * 0.20;
        precioDescuento = periferico.precio - descuento;
        console.log("Abonando en efectivo/transferencia tiene 20% de descuento");
        console.log("Precio total: $" + precioDescuento);
    } else {
        console.error('Código de periférico inválido.');
    }
}

function consultarPeriferico() {
    let respuesta = confirm('¿Desea consultar el precio de un periférico?');
    if (respuesta === true) {
        let codigo = prompt('Ingresa el código numérico del periférico a consultar:');
        mostrarPrecio(codigo);
        let respuestaCuotas = confirm('¿Desea pagar con tarjeta de crédito?');
        if (respuestaCuotas === true) {
            mostrarCuotas();
        } else {
            let respuestaDescuento = confirm('¿Abona en efectivo/transferencia?');
            if (respuestaDescuento === true) {
                calcularDescuento(codigo);
            }
        }
    } else {
        console.warn('No hay problema. Te esperamos cuando gustes.');
    }
}
