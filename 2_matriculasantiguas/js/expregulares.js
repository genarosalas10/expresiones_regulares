/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iMatriculaA').onblur =comprobar
}
function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/(^([A-Z]{2})\d{4}[A-Z]{1,2})$|(^([A-Z]){1}\d{5})$/)
    if(! document.getElementById('iMatriculaA').value.match(exp1))
    //if(!exp1.text(document.getElementById('iIP').value))
    {
        console.log('MATRICULA INCORRECTA')
    }
}