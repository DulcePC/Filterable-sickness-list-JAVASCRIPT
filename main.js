//inicializar dropdown
$( document ).ready(function() {
    $('.dropdown-trigger').dropdown();
});

//inicializar collapsible
$(document).ready(function(){
    $('.collapsible').collapsible();
});

/*(prueba 1 con funciones )cambiar los colores del background cuando este es clickeado por el usuario
function cambioBackground(){
    //var obtener=document.getElementById("prueba");
    document.getElementsByTagName('div').style.backgroundColor = "lightblue";
}
function quitarBackground(){
    document.getElementById("prueba").style.backgroundColor = "red";
    
}*/

//(prueba 2 con global)cambiar los colores del background cuando este es clickeado por el usuario
$(document).ready(function(){
    $("div.cambioColor").mouseenter(function(){
        $("div.cambioColor").css("background-color", "#ff80ab");
    });
    $("div.cambioColor").mouseleave(function(){
        $("div.cambioColor").css("background-color", "lightgray");
    });
});