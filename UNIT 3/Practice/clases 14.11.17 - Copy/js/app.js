window.addEventListener("load", function(evento){
    /*console.log(evento);*/

    var title = document.getElementById("titlePrincipal");
        title.addEventListener("mouseover",function(){
            title.textContent = "Photography";
        });
        title.addEventListener("mouseout", function(){
            title.textContent = "Fotografia";
        });
    
    var imagen = document.getElementById ("photoGirl");
        imagen.addEventListener("mouseover",function(){
            imagen.src = "assets/images/gato-mujer.jpg";
            /*event.currentTarget.src = "assets/images/gato-mujer.jpg";*/
        });
        imagen.addEventListener("mouseout",function(){
            imagen.src = "assets/images/mujer.jpg";
             /*event.target.src = "assets/images/gato-mujer.jpg";*/
        });
    
    var form = document.getElementById("formulario");
        $(document).ready(function(){
            $("form").on("click", function(){
                $(this).hide();
       });
   });
       
   
}); 