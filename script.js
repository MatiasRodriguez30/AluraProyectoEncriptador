function encriptar(){
    var frase = document.getElementById("textoencriptado").value.toLowerCase();
    var textoencriptado = frase.replace(/e/img,"enter");
    var textoencriptado = textoencriptado.replace(/i/img,"imes");
    var textoencriptado = textoencriptado.replace(/a/img,"ai");
    var textoencriptado = textoencriptado.replace(/o/img,"ober");
    var textoencriptado = textoencriptado.replace(/u/img,"ufat");

    document.getElementById("textodesencriptado").innerHTML = textoencriptado;
}

function desencriptar(){
    var frase = document.getElementById("textoencriptado").value.toLowerCase();
    var textodesencriptado= frase.replace(/enter/img,"e");
    var textodesencriptado= textodesencriptado.replace(/imes/img,"i");
    var textodesencriptado= textodesencriptado.replace(/ai/img,"a");
    var textodesencriptado= textodesencriptado.replace(/ober/img,"o");
    var textodesencriptado= textodesencriptado.replace(/ufat/img,"u");

    document.getElementById("textodesencriptado").innerHTML= textodesencriptado;
}

function copiar(){
    var contenido= document.querySelector("#textodesencriptado");
    contenido.select();
    document.execCommand("copy");
}