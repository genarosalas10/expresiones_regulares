/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iTm').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^6|7[0-9]{8}$/)
    if(! document.getElementById('iTm').value.match(exp1))
    {
        console.log('Formato de telefono movil incorrecto')
    }
    
}



