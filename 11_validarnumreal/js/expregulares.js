/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iTnr').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^\-?[0-9]+\.?[0-9]*$/)
    if(! document.getElementById('iTnr').value.match(exp1))
    {
        console.log('numero incorrecto')
    }
}



