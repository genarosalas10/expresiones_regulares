/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iCe').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^\w{5,60}\@[a-z]{3,30}\.[a-z]{2,5}$/)
    if(! document.getElementById('iCe').value.match(exp1))
    {
        console.log('Formato de Codigo Postal incorrecto')
    }
}



