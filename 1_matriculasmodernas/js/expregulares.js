/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iMatriculaM').onblur =comprobar
}
function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^[0-9]{4}[A-Z]{3}$/)
    if(! document.getElementById('iMatriculaM').value.match(exp1))
    //if(!exp1.text(document.getElementById('iIP').value))
    {
        console.log('MATRICULA INCORRECTA')
    }
}