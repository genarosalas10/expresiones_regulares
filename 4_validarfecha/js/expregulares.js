/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iFecha').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    //let exp1 = new RegExp(/^(\d{1,3}\.){3}\d{1,3}$/)
    let exp1 = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)
    if(! document.getElementById('iFecha').value.match(exp1))
    {
        console.log('Formato de fecha incorrecto')
    }
}



