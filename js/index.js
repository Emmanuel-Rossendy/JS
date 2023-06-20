/*
   ✅ Algoritmo con un condicional
   ✅ Algoritmo con un ciclo
   ✅ Simulador interactivo
   ✅ Utilizar funciones
*/

function mostrarCuotas() {
    let intereses = "sin interes"
    console.log('Todas nuestras prendas tienen: 👇')
    for (let i = 1; i <= 12; i++) {
        if (i >= 6) {
            intereses = "con interés"
        }
        console.log ( i + "cuota(s)" + intereses)
    }
}

function mostrarPrecio(codigo) {
    switch (codigo) {
        case "1":
            console.log('El precio del Auricular es: $ 2500')
            break;

        case "2":
            console.log('El precio del Teclado es: $ 1900')
            break;

        case "3":
            console.log('El precio del Parlante es: $ 9000')
            break;

        case "4":
            console.log('El precio del Microfono es: $ 3400')
            break;    

        case "5":
            console.log('El precio de la Webcam es: $ 5000')
            break;  

        case "6":
            console.log('El precio del combo de teclado y mouse es: $ 5900')
            break;

        case "7":
            console.log('El precio del Mouse es: $ 7300')
            break;
                            
        default:
            console.error('No entendimos tu selección.')
            break;
    }
}

function consultarPeriferico() {
    let respuesta = confirm('¿Desea consultar el precio de un periférico?')
    if (respuesta === true) {
        let codigo = prompt('Ingresa el código numérico del periférico a consultar:')
        if (codigo === "1" || codigo === "2" || codigo === "3" || codigo === "4" || codigo === "5" || codigo === "6" || codigo === "7") 
        mostrarPrecio(codigo)
        mostrarCuotas()
    } else {
        console.warn('No hay problema. Te esperamos cuando gustes')
    }
}