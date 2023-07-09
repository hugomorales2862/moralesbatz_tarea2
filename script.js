 // OBTENER ELEMENTOS DEL DOM
 let titulo = document.getElementById('pagina');
 let botonIniciar = document.getElementById('botonIniciar');
 let formulario = document.querySelector('form');
 let labelHoraSalida = document.getElementById('label_hora_salida');

 // MODIFICAR TEXTO DEL LABEL
 labelHoraSalida.textContent = 'Hora de salida';

 // ASIGNAR VALORES AL FORMULARIO
 formulario.action = "/moralesb_recuperacion/controladores/visita/guardar.php";
 formulario.method = "POST";
 
 // Asigna el valor al atributo 'name'
 titulo.name = 'miNombre';

 // Verifica el nuevo valor asignado
 console.log("Valor del atributo 'name': " + titulo.name);

 // con selectores
 let enlace = document.querySelector('a');
 let cajaParrafos = document.getElementById('container');

 // HIJOS DEL ELEMENTO
 console.log(cajaParrafos.childNodes);
 console.log(cajaParrafos.children[4].innerText = 'cambio desde JS');
 
 // Cambiar acción del formulario
 formulario.action = "/controladores/guardar.php";

 let input = document.querySelector('input');

 console.log(titulo.classList);

 titulo.classList.add('fs-6');
 titulo.classList.remove('text-success');
 titulo.classList.add('text-danger');

 const tablaGenerada = document.createElement('table');
 const parrafoNuevo = document.createElement('p');

 parrafoNuevo.textContent = "ejemplo de cómo se crea un párrafo desde JS";
 parrafoNuevo.classList.add('text-info', 'fw-bold');

 cajaParrafos.appendChild(tablaGenerada);
 cajaParrafos.appendChild(parrafoNuevo);

 console.log(cajaParrafos.firstChild);
 console.log(cajaParrafos.firstElementChild);
 console.log(cajaParrafos.lastChild);
 console.log(cajaParrafos.lastElementChild);
 console.log(cajaParrafos.nextElementSibling);
 console.log(cajaParrafos.nextSibling);
 console.log(cajaParrafos.previousElementSibling.previousElementSibling);
 console.log(cajaParrafos.parentElement);

 let enlaceHermano = document.getElementById('email').parentElement.parentElement.parentElement.nextElementSibling;
 enlaceHermano.href = "https://www.google.com.gt/";
 enlaceHermano.innerText = "Ir a google";
 console.log(enlaceHermano);

 document.addEventListener('dblclick', (e) => {
     console.log(e);
 });