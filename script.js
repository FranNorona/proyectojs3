// Capturamos los elementos via ID del documento HTML que vamos a utilizar.
const iniciarTexto = document.getElementById('init_text');
const finalizarTexto = document.getElementById('end_text');
const sectionArray = document.getElementById('section_array');

//Generamos un array para luego almacenarlo en el localstorage.
const palabrasAleatorias = ['esto', 'es', 'una', 'prueba', 'para', 'saber', 'si', 'la', 'funcionalidad', 'del', 'codigo', 'es', 'correcta', 'y', 'aplica', 'al', 'boton'];

//Aplicamos el metodo JSON STRINGIFY para convertir el array en una cadena de texto.
localStorage.setItem('palabrasAleatorias', JSON.stringify(palabrasAleatorias));

//Creamos la funcion que nos va a permitir insertar la cadena de texto o eliminarla de nuestro HTML.
function iniciarTextoEnHtml()   {
    sectionArray.innerHTML = '';

    palabrasAleatorias.forEach((elemento) => {
        const parrafo = document.createElement('p');
        parrafo.textContent = elemento;
        sectionArray.appendChild(parrafo);
    });
}

function finalizarTextoEnHtml() {
    sectionArray.innerHTML = '';
}

//Hacemos los eventos correspondientes.
iniciarTexto.addEventListener('click', iniciarTextoEnHtml);
finalizarTexto.addEventListener('click', finalizarTextoEnHtml);