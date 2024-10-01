let angulo1 = parseFloat(prompt("Introduce el primer ángulo del triángulo:"));
let angulo2 = parseFloat(prompt("Introduce el segundo ángulo del triángulo:"));
let angulo3 = parseFloat(prompt("Introduce el tercer ángulo del triángulo:"));

function Valido(a1, a2, a3) {
    
    return (a1 + a2 + a3 === 180) && (a1 > 0) && (a2 > 0) && (a3 > 0);
}

let triangulo = Valido(angulo1, angulo2, angulo3);

if (triangulo) {
    console.log("El triángulo es válido.");
} else {
    console.log("El triángulo no es válido.");}
    
    