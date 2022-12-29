function encriptar(texto){
    let textoEncriptado="";

    for (var i=0; i < texto.length; i++){
        let flag = false;

        for (var j=0; j < llaves.length; j++){
            if (texto.charAt(i).includes(llaves[j])){
                textoEncriptado += claves[j];
                flag = true;
                break;
            }
        }

        if (flag == false){
            textoEncriptado += texto.charAt(i);
        }
    }

    limpiar();

    return mostrarMensaje(textoEncriptado);
}


function desencriptar(texto){
    for (var i=0; i < claves.length; i++){
        if (texto.includes(claves[i])){
            texto = texto.replaceAll(claves[i], llaves[i]);
        }
    }

    limpiar();

    return mostrarMensaje(texto);
}


function mostrarMensaje(mensaje) {
    var resultado = document.querySelector("#resultado");
    var botonCopiar = document.querySelector("#boton-copiar");

    botonCopiar.style.display = "inline-block";
    ocultarImagen();
    resultado.innerHTML = mensaje;
}


function ocultarImagen() {
    var contenido = document.querySelector("#contenido-mensaje");
    contenido.style.display = "none";
}


function limpiar() {
    var caja = document.querySelector("#caja-texto");
    caja.value = "";
    caja.focus();
}


function muestraAlerta() {
    alert("Ingresa un texto primero !");
}

function copiar(texto){
    // No me funcionó execCommand(), ya que aparte de deprecado aparentemente solo funciona con inputs y yo usé un div:(
    navigator.clipboard.writeText(texto);
    myFunction();
}

var llaves = ["a", "e", "i", "o", "u"];
var claves = ["ai", "enter", "imes", "ober", "ufat"];


var botonEncriptar = document.querySelector("#boton-encriptar");

botonEncriptar.onclick = function () {
    var texto = document.querySelector("#caja-texto").value;
    if (texto != "") {
        encriptar(texto.toLowerCase());
    } else {
        muestraAlerta();
    }
}


var botonDesencriptar = document.querySelector("#boton-desencriptar");

botonDesencriptar.onclick = function () {
    var texto = document.querySelector("#caja-texto").value;
    if (texto != "") {
        desencriptar(texto.toLowerCase());
    } else {
        muestraAlerta();
    }
}


var botonCopiar = document.querySelector("#boton-copiar");

botonCopiar.onclick = function () {
    // Obtener el texto del div, el node.innerText es para navegadores viejos como IE
    var texto = document.querySelector("#resultado").textContent || node.innerText;
    copiar(texto);
}

botonCopiar.onmouseout = function() {
    outFunc();
}