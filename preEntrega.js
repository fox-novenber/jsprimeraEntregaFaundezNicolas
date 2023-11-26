alert("BIENVENIDO A MI MINI TIENDA VIRTUAL");

let mayores = prompt("DEBES TENER MÁS DE 18 PARA COMPRAR\n¿ERES MAYOR DE 18 AÑOS? si/no").toLowerCase();

verificacionEdad ()

let eleccion = prompt("Elige una opción\n1- Cerveza\n2- Vino\n3- Licores");

switch (eleccion) {
    case "1":
        alert("Solo tenemos cerveza disponible");
        break;
    case "2":
        alert("Solo tenemos vino Toro disponible");
        break;
    case "3":
        alert("Solo tenemos licores disponibles");
        break;
    default:
        alert("Opción no válida");
}

function verificacionEdad () {

    while (mayores !== "si") {
    alert("No puedes comprar alcohol, debes ser mayor de 18");
    mayores = prompt("¿Eres mayor de 18 años? si/no").toLowerCase();
}

}