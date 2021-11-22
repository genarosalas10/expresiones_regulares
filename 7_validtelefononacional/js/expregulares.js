/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iTn').onblur =comprobar
}

function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^9|0[0-9]{8}$/)
    if(! document.getElementById('iTn').value.match(exp1))
    {
        console.log('Formato de telefono incorrecto')
    }
    else
    {
        if(document.getElementById('iTn').value.charAt(0)=='0')
        {
            if(document.getElementById('iTn').value.charAt(1)!='9')
            {
                console.log('Formato de telefono incorrecto debe empezar por 9')
            }
        }
    }
}



