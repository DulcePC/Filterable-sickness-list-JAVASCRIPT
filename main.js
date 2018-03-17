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

//(prueba 2 con global)cambiar los colores del background cuando este le pasa el cursor al div por el usuario

/*$(document).ready(function(){
    $("div.cambioColor").mouseenter(function(){
        $("div.cambioColor",this).css("background-color", "#353b4b");

    });
    $("div.cambioColor").mouseleave(function(){
        $("div.cambioColor").css("background-color", "transparent");
    });
});*/

//EL BUSCADOR!
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){

    //tomamos los valors escritos en el input 
   let filterValue = document.getElementById('filterInput').value.toUpperCase();
   console.log();
   //tomamos el ul
    let ul = document.getElementById('names');
    //todos items
    let li = ul.querySelectorAll('li.collection-item');
    for(let i = 0; i < li.length; i++){
        //todos lo que esta en <a>
        let a = li[i].getElementsByTagName('a')[0];
        /*tomamos todo lo que esta en la etiquetas <a> HTML no importa si esta en mayuscula y con el
        indexOf delvolvemos la posicion de la primera aparecion de un valor especificado en una cadena, -1 significa
        que si no encuentra devolvera lo siguiente*/
        
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else{
            //si no se encuentra en li lo que buscamos pues no devulveve nada y simplemente devuelve los collection
            li[i].style.display = 'none';

        }
    }

}