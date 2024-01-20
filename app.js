let numeroSecreto = 0;
let intento = 0;
let listaNumeroAleatorio = [];
let maximoIntentos = 10;

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("numUsuario").value);

    if (numeroSecreto === numeroUsuario) {
        asiganarTextoElemento("p",`Acertaste el numero en ${intento} ${(intento === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(numeroUsuario > numeroSecreto){
            asiganarTextoElemento("p","El numero es menor");
        } else {
            asiganarTextoElemento("p","El numero es mayor");
        }

        intento++;
        limpiarCaja();
    }
}

function asiganarTextoElemento(elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
 
function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*maximoIntentos)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroAleatorio);

    if (listaNumeroAleatorio.length == maximoIntentos) {

        asiganarTextoElemento("p"," !! Se agotaron los numero !!")
        
    } else {
        if (listaNumeroAleatorio.includes(numeroGenerado)) {
            return numeroAleatorio();
        } else {
            listaNumeroAleatorio.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function limpiarCaja(){
    document.getElementById("numUsuario").value = " ";
    return;
}

function mensajesInicial() {
    asiganarTextoElemento("h1" , "Juego del numero secreto");
    asiganarTextoElemento("p" ,`Ingrese el numero del 1 al ${maximoIntentos}`);
    numeroSecreto = numeroAleatorio();
    intento = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mensaje inicial
    //crear nuevo numero aleatorio
    //reniciar el conteo
    mensajesInicial(); 
    //deshabilitar el boton 
    document.getElementById("reiniciar").setAttribute("disabled" , true);  
}



mensajesInicial();


