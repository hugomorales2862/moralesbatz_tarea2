 // OBTENER ELEMENTOS DEL DOM MEDIANTE SU ID
 let titulo = document.getElementById('pagina');
 let boton = document.getElementById('boton');

 // Asigna el valor al atributo 'name'
 titulo.name = 'miNombre';

 // Verifica el nuevo valor asignado
 console.log("Valor del atributo 'name': " + titulo.name);

 // OBTENER ELEMENTOS DEL DOM CON SELECTORES
 let enlace = document.querySelector('a');
 let formulario = document.querySelector('form');
 let texto = document.querySelectorAll('.text-success');
 let boton2 = document.querySelector('#boton');
 let enlaceFB = document.querySelector('a[href*="facebook"]');

 let enlacesSeguros = document.querySelectorAll('a[href^="https"]');

 let cajaParrafos = document.querySelector('.container');

 // CREAR ELEMENTOS DEL DOM
 const tablaGenerada = document.createElement('table');
 const parrafoNuevo = document.createElement('p');

 // ASIGNAR VALORES Y PROPIEDADES A LOS ELEMENTOS
 parrafoNuevo.textContent = "Ejemplo de cómo se crea un párrafo desde JS";
 parrafoNuevo.classList.add('text-info', 'fw-bold');

 // AGREGAR ELEMENTOS AL DOM
 cajaParrafos.appendChild(tablaGenerada);
 cajaParrafos.appendChild(parrafoNuevo);

 // MODIFICAR ATRIBUTOS DE ELEMENTOS EXISTENTES
 formulario.action = "/controladores/guardar.php";
 let input = document.querySelector('input');

 console.log(titulo.classList);

 // ASIGNAR VALORES AL ATRIBUTO TEXT
 titulo.classList.add('fs-6');
 titulo.classList.remove('text-success');
 titulo.classList.add('text-danger');

 // ASIGNAR VALORES AL ATRIBUTO HREF
 let enlaceHermano = document.querySelector('a[href*="google"]');
 enlaceHermano.href = "https://www.openai.com";
 enlaceHermano.innerText = "Ir a OpenAI";
 console.log(enlaceHermano);

 // EVENT LISTENER
 document.addEventListener('dblclick', (e) => {
     console.log(e);
 });