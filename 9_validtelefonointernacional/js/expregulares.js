/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iTin').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^[0-9]{2,4}\d{9}$/)
    if(! document.getElementById('iTin').value.match(exp1))
    {
        console.log('Formato de telefono incorrecto')
    }
}



