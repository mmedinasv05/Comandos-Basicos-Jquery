/******************Pregunta #1*******************/
$(document).ready(function() {
    /********************************SELECCIONES*****************************/
    /*1 - Seleccionar todos los elementos div que poseen la clase "module". */
        $elementModule = $('div.module');
        console.log($elementModule);

    /*2 - Averiguar cuantos elementos en la página están ocultos (ayuda: .length)*/
        $elementHidden = $('div:hidden');
        console.log("El total de elementos en la página que están ocultos son: " + $elementHidden.length);
        

    /*3 - Seleccionar todas las filas impares del cuerpo de la tabla.*/
        $elementTr = $("tr:odd");
        console.log($elementTr);


    /*****************************RECORRER EL DOM**************************/
    /*1 - Seleccionar el elemento input, luego dirigirse hacia el formulario y 
    añadirle una clase al mismo.*/
        $("#search input:text").addClass('style-new-form');

    /*2 - Seleccionar el ítem que posee la clase "current" dentro de la lista #myList 
    y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente 
    ítem de la lista.*/
        $('#myList .current').removeClass('current').next('#myList li').addClass('current');

    /*3 - Seleccionar el primer ítem de la lista en el elemento #slideshow; 
    añadirle la clase "current" al mismo y luego añadir la clase "disabled" 
    a los elementos hermanos.  */
        $('#slideshow li:first').addClass('current');
        $('#slideshow li:gt(0)').addClass('disable');
    
    
    /********************************MANIPULACION*****************************/
    /*1 - Añadir 5 nuevos ítems al final de la lista desordenada #myList */
        for (var i = 0; i<5; i++){
            $('#myList').append("<li>List item " + [i+8] + "</li>");
        }

    /*2 - Remover los ítems impares de la lista */
        $('#myList li:even').remove();

    /*3- Añadir otro elemento h2 y otro párrafo al último div.module. */
        $('#specials').append("<h2>Soy un nuevo titulo creado con Jquery</h2>");
        $('#specials').append("<p>Soy un nuevo parrafo creado con Jquery</p>");

    /*4 - Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday" */
        $('#select').append('<option value="Wednesday">Wednesday</option');

    /*5 -Añadir un nuevo div.module a la página después del último; luego añadir una copia 
    de una de las imágenes existentes dentro del nuevo div.*/
        $('#specials').append('<div class="new-div" id="newDiv"><h2>Soy el nuevo div con Jquery</h2></div>').next('#specials');
        $("#slideshow li img:first").clone().appendTo("#newDiv");
});
