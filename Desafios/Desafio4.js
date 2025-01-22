// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Ejercicio 1");
console.log("Bienvenido");

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
console.log("Ejercicio 2");
let nameUser = "Mario";
console.log(`Hola ${nameUser}`);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
console.log("Ejercicio 3");
alert(`Hola ${nameUser}`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
console.log("Ejercicio 4");
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada 
// "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log("Ejercicio 5");
let valor1=5, valor2=7, result = valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${result}.`);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada 
// "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log("Ejercicio 6");
result = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${result}.`);

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
console.log("Ejercicio 7");
let age = prompt("Introduce tu edad");
console.log(+age >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
console.log("Ejercicio 8");
let number = prompt("Ingresa un numero");
console.log(+number > 0 ? "Es positivo" : "Es negativo");

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
console.log("Ejercicio 9");
let i =1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
console.log("Ejercicio 10");
let nota = 7; 
console.log(+nota >= 7 ? "Aprobado" : "Reprobado");

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log("Ejercicio 11");
console.log(Math.random());

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
console.log("Ejercicio 12");
console.log(parseInt(Math.random() * 10) + 1);


// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log("Ejercicio 13");
console.log(parseInt(Math.random() * 1000) + 1);
