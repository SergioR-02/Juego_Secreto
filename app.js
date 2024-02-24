let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroDeUsuario);
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos==1)? 'intento':'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',`El número secreto es menor.`);
        } else {
            asignarTextoElemento('p',`El número secreto es mayor.`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroG = Math.floor(Math.random()*10)+1;
    if(listaNumeros.length === numeroMaximo){
        asignarTextoElemento('p',`Todos los numeros han sido adivinados.`);
    }else{
        if(listaNumeros.includes(numeroG)){
            return generarNumeroSecreto();
        }else{
            listaNumeros.push(numeroG);
            return numeroG;
        }
    }
}

function condicionesInicio(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Reiniciar la caja
    limpiarCaja();
    //Mensaje de inicio
    condicionesInicio();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}
condicionesInicio();