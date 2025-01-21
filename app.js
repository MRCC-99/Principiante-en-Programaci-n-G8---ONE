let numberSecret = 6;
let userNumber = 0
number();
function number() {
    userNumber = prompt("Me indicas un numero entre el 1 y el 10:");
    if (numberSecret === +userNumber) {
        alert(`Descubriste el número secreto!, el numero era ${numberSecret}`);
    }else{
        number();
    }
}