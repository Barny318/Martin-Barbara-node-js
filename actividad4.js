let num=prompt("Escribe un número para saber si es divisible por 5:")

function divisible(num) {
    return num % 5 === 0;
}

if (divisible(num)===true) {
    console.log("Es divisible")
} else {
    console.log("No es divisible")
}