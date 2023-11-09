// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cripto.tiiny.site/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==
// ==/UserScript==

(function() {
    'use strict';

    // Obtén el párrafo de la página
    var parrafo = document.querySelector('p'); // Puedes ajustar el selector según tu HTML

    // Función para obtener la clave a partir de las letras mayúsculas del párrafo
    function obtenerClaveDesdeParrafo(parrafo) {
        var clave = '';
        var texto = parrafo.textContent;

        for (var i = 0; i < texto.length; i++) {
            var caracter = texto[i];
            if (caracter === caracter.toUpperCase() && caracter.match(/[A-Z]/)) {
                clave += caracter;
            }
        }

        return clave;
    }

    // Obtiene la clave
    var clave = obtenerClaveDesdeParrafo(parrafo);

    // Imprime la clave en la consola
    console.log('La llave es: ' + clave);

    // Función para contar y mostrar la cantidad de mensajes cifrados
    function contarMensajesCifrados() {
        var mensajesCifrados = document.querySelectorAll('div[class^="M"]');
        var cantidadMensajesCifrados = mensajesCifrados.length;

        console.log('Los mensajes cifrados son: ' + cantidadMensajesCifrados);
        mensajesCifrados.forEach(function (mensajeCifrado) {
            var id = mensajeCifrado.id;
            console.log('Los mensajes cifrados son: ' + id);
        });
    }

    // Llama a la función para contar y mostrar los mensajes cifrados
    contarMensajesCifrados();

    //------------------------------------------------------------------------------------------------------------------------------------------------//

    function contarMensajesCifrados2() {
        var mensajesCifrados = document.querySelectorAll('div[class^="M"]');
        var cantidadMensajesCifrados = mensajesCifrados.length;
        var idsMensajesCifrados = []; // Arreglo para almacenar los IDs

        mensajesCifrados.forEach(function (mensajeCifrado) {
            var id = mensajeCifrado.id;
            idsMensajesCifrados.push(id); // Agregar el ID al arreglo
        });

        return idsMensajesCifrados; // Devolver el arreglo de IDs
    }

    // Llama a la función para contar y obtener los mensajes cifrados
    var idsMensajesCifrados = contarMensajesCifrados2();

    // Imprime los IDs almacenados en el arreglo
    //console.log('IDs de mensajes cifrados:', idsMensajesCifrados);

    // Función para descifrar contraseñas cifradas usando 3DES con CryptoJS
    function descifrar3DES(ids, clave) {
        var contrasenasDescifradas = [];

        var claveConvertido = CryptoJS.enc.Utf8.parse(clave);
        var claveEnBase64 = CryptoJS.enc.Base64.stringify(claveConvertido);
        //console.log('la clave2 es: ', claveEnBase64);

        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            //var mensajeCifrado = id; // Reemplaza con tu función para obtener el mensaje cifrado

            //console.log('el id es: ', id);

            // Clave y mensaje cifrado en formato Base64 (esto debe ser tu entrada real)
            //var claveBase64 = "U0VHVVJPU0VHVVJPU0VHVVJPU0VHVVJP";
            //var mensajeCifradoBase64 = "xEopI5pGBCQ=";

            // Decodificar la clave y el mensaje cifrado desde Base64
            var clave4 = CryptoJS.enc.Base64.parse(claveEnBase64);
            var mensajeCifrado4 = CryptoJS.enc.Base64.parse(id);

            // Realizar el descifrado
            var mensajeDescifrado5 = CryptoJS.TripleDES.decrypt({
                ciphertext: mensajeCifrado4
            }, clave4, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            // Convertir el resultado a texto plano
            var mensajeDescifradoTexto = CryptoJS.enc.Utf8.stringify(mensajeDescifrado5);

            //console.log('Mensaje descifrado en texto plano:', mensajeDescifradoTexto);

            console.log(id, mensajeDescifradoTexto);

            // Actualizar el contenido del elemento <p> en el DOM
            var parrafo = document.querySelector('p'); // Selecciona el único elemento <p> en el documento
            if (parrafo) {
                // Agregar el mensaje descifrado al párrafo con saltos de línea
                parrafo.innerHTML += '<br>' + mensajeDescifradoTexto;
            }
            //console.log("-----------------------------------------------------------------------------------------------------------");

        }
    }

    // Llama a la función para descifrar contraseñas y pasa los IDs y la clave
    var Descifradas = descifrar3DES(idsMensajesCifrados, clave);

})();
