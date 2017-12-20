window.addEventListener("load", function(event) {
    var title = document.getElementsByClassName("title2")[0];
    /*crear un evento hover: cambia el titulo al colocar el mouse*/
    title.addEventListener('mouseover', function(event) {
        title.textContent = "Evento nuevoooo";
    })
    title.addEventListener('mouseout', function(event){
        title.textContent = "Eventos de Javascript"
    });

    var imagen = document.getElementById("imagenCake");
    
    imagen.addEventListener ('mouseover', function(event) {
        /*this.setAttribute("src", "assets/images/profile.png")*/
        imagen.src = "assets/images/profile.png"
    });

    imagen.addEventListener ('mouseout', function(event) {
        /*this.setAttribute("src", "assets/images/cake.png")*/
        imagen.src = "assets/images/cake.png";
        /*console.log(event.target.src);*/
        console.log(event);
    });

});