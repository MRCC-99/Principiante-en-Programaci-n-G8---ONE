// let numberSecret = 6, userNumber = 0, intentos = 1;
// number();
// function number() {
//     userNumber = prompt("Me indicas un numero entre el 1 y el 10:");
//     if (numberSecret === +userNumber) {
//         alert(`Descubriste el número secreto!, el numero era ${numberSecret}, Intentos ${+intentos}`);
//     }else{
//         if(+userNumber > numberSecret){
//             alert("Es menor");
//         }else{
//             alert("Es mayor")
//         }
//         intentos++;
//         number();
//     }
// }


//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos = intentos + 1;
        palabraVeces = 'veces';
    }
}