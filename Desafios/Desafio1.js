let { mensaje,nombre, edad, numeroDeVentas, saldoDisponible, mensajeDeError } = [null];

// Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
alert("¡Bienvenida y bienvenido a nuestro sitio web!")
// Declara una variable llamada nombre y asígnale el valor "Lua".
nombre = "Lua";
console.log(nombre)
// Crea una variable llamada edady asígnale el valor 25.
edad = +25;
console.log(edad);
// Establece una variable numeroDeVentas y asígnale el valor 50.
numeroDeVentas = +50;
console.log(numeroDeVentas)
// Establece una variable saldoDisponible y asígnale el valor 1000.
saldoDisponible = +1000;
console.log(saldoDisponible);
// Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");
// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
mensajeDeError = "¡Error! Completa todos los campos";
alert(`Con variable: ${mensajeDeError}`);
// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
nombre = prompt("Escribe tu nombre: ");
console.log(nombre)
// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
edad = prompt("Escribe tu edad: ");
console.log(+edad)
// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección
if(+edad >= 18)
    alert("¡Puedes obtener tu licencia de conducir!")
