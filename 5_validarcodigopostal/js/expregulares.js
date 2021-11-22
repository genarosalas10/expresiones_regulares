/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iCP').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^[0-9]{5}$/)
    if(! document.getElementById('iCP').value.match(exp1))
    {
        console.log('Formato de Codigo Postal incorrecto')
    }
}



