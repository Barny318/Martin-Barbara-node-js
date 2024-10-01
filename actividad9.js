let num=prompt("Escribe la edad:")

if(num<13){
    console.log("Es un niño")
} else if(num>=13 && num<=17){
    console.log("Es un Adolescente")
} else if(num>=18 && num<=110){
    console.log("Es un Adulto")
} else{
    console.log("No es una edad válida")
}