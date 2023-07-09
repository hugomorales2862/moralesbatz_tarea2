// OBTENER ELEMENTOS DEL DOM
// MEDIANTE SU ID
let titulo = document.getElementById('pagina');
let boton = document.getElementById('boton')

// console.log(titulo)

// con selectores
let enlace = document.querySelector('a');
let formulario = document.querySelector('form')
let texto = document.querySelectorAll('.text-success')
let boton2 = document.querySelector('#boton')
let enlaceFB = document.querySelector('a[href*="facebook"]')

let enlacesSeguros = document.querySelectorAll('a[href^="https"]');

let cajaParrafos = document.getElementById('container')
