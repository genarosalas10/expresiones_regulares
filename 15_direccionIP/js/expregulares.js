/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iIP').onblur =comprobar
}
function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^(\d{1,3}\.){3}\d{1,3}$/)
    if(! document.getElementById('iIP').value.match(exp1))
    //if(!exp1.text(document.getElementById('iIP').value))
    {
        console.log('Ip erronea')
    }
}