/*
    validaciones.js
    scrip para expresiones regulares
    @author Genaro Salas <gsalasgalindo.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/
'use strict'
window.onload = iniciar

function iniciar() {
    document.getElementById('iDNI').onblur =comprobar
}
function comprobar() {
    console.log("comprobar...")
    let exp1 = new RegExp(/^\d{8}[A-Z]{1}$/)
    const letras="TRWAGMYFPDXBNJZSQVHLCKE"
    let dni= document.getElementById('iDNI').value.substr(0,8)
    let letra = letras.charAt(calcular(dni))
    if(! document.getElementById('iDNI').value.match(exp1))
    //if(!exp1.text(document.getElementById('iIP').value))
    {
        console.log('DNI erroneo')
    }
    else
    {
        if(document.getElementById('iDNI').value.charAt(8)!=letra)
        {
            console.log('Su letra es incorecta')
        }
    }
}


function calcular(dni)
{
    let numero=Math.trunc(dni%23)
    console.log(numero)
     return numero;
}