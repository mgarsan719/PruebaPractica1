function precio() {
    let salir;
    let importeTot;
    while (!salir) {
        let precio = parseFloat(window.prompt("Dame el precio del producto"));
        let cantidad = parseFloat(window.prompt("Dame la cantidad de productos"));
        importeTot = parseFloat(precio * cantidad);

        if (isNaN(precio) || precio < 0) {
            console.log("Pon un precio valido");
        }

        if (isNaN(cantidad) || cantidad <= 0) {
            console.log("Pon una cantidad valida");
        }

        if (!isNaN(precio) && precio >= 0 && !isNaN(cantidad) && cantidad > 0) {
            salir = true;
        }
    }

    return importeTot;
}

function descuento(importe) {
    let descuento = importe;

    if (importe >= 50 && importe < 100) {
        descuento = importe - importe * 0.05;
    }
    else if (importe >= 100 && importe < 200) {
        descuento = importe - importe * 0.10;
    }
    else if (importe >= 200) {
        descuento = importe - importe * 0.15;
    }

    console.log("Precio con descuento: " + descuento);
    return descuento;
}

function IVA(importe) {
    let iva = importe * 1.21;

    console.log("Precio con IVA: " + iva);
    return iva;
}

let salir;
let precioFinal;
let operaciones = 1;
let sumaPrecios = 0;
let media = 0;
let mayor = 0;
let menor = Infinity;

while (!salir) {
    precioFinal = parseFloat(IVA(descuento(precio())));

    sumaPrecios += precioFinal;

    if (precioFinal < menor) {
        menor = precioFinal;
    }
    if (precioFinal > mayor) {
        mayor = precioFinal;
    }

    let respuesta = window.confirm("¿Volver a realizar todo?");

    if (respuesta) {
        operaciones++;
        console.log("Volviendo al inicio");
    }
    else {
        media = sumaPrecios / operaciones;
        salir = true;
    }
}

console.log(`Ejecución finalizada. Detalles: \n`
    + `Numero de operaciones realizadas: ${operaciones} \n`
    + `Gasto total realizado: ${sumaPrecios} \n`
    + `Gasto medio: ${media}\n`
    + `Gasto mayor: ${mayor}\n`
    + `Gasto menor: ${menor}\n`
);