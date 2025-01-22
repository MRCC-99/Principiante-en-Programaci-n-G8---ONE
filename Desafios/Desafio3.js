// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
console.log("Ejercicio 1");
let i=1, maxNumber=10;
while (i <= maxNumber) {
    console.log(i);
    i++;
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
console.log("Ejercicio 2");
i=10;
maxNumber = 0;
while (i >= maxNumber) {
    console.log(i);
    i--;
}

// Crea un programa de cuenta regresiva. Pide un número y resta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
console.log("Ejercicio 3");
maxNumber = +prompt("Introduce un numero mayor a 1 para la cuenta regresiva");
while (maxNumber >= 0 ) {
    console.log(maxNumber);
    maxNumber--;
}

// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
console.log("Ejercicio 4");
maxNumber = +prompt("Introduce un numero mayor a 1 para la cuenta progresiva");
i=0;
while (i <= maxNumber) {
    console.log(i);
    i++;
}