let num=prompt("Escribe un año para saber si es bisiesto o no:")

function bisiesto(num) {
    return num % 4 === 0;
}

if (bisiesto(num)===true) {
    console.log("El año ingresado es bisiesto")
} else {
    console.log("El año ingresado no es bisiesto")
}