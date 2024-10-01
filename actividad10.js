function ingles(color) {
    let result;
    switch (color.toLowerCase()) {
      case 'azul':
        result = 'blue';
        break;
      case 'rojo':
        result = 'red';
        break;
      case 'verde':
        result = 'green';
        break;
      case 'naranja':
        result = 'orange';
        break;
      case 'amarillo':
        result = 'yellow';
        break;
      default:
        result = 'Color not found';
    }
    return result;
  }
  
const color= prompt("Ingresa un color:");
const ingleslisto = ingles(color);
console.log(ingleslisto);
  