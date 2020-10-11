$(document).ready(function(){
    $("body").hide().fadeIn(1000);
    llamarApi();
    $("#regresar").click(function(){regresar()});
    
});

function llamarApi(){
    $.ajax(
        {
          url : sessionStorage.getItem("datos"),
          type: "GET"
        })
          .done(function(data) {
            console.log(data);
            console.log(data.sprites.front_default);
            $("#pokemon").attr("src",data.sprites.front_default);
           
            $("#detalle").append('<p id="nombre">Nombre:<p/>');
            $("#detalle").append('<p>'+ data.name +"<p/>");
           
            $("#detalle").append('<p id="tipo">Tipo:<p/>');
            tipo=data.types.map(function(x){
              $("#detalle").append("<p>"+ x.type.name + "</p>");
            });
           
            $("#detalle").append('<p id="habilidades">Principales habilidades:<p/>');
            habilidades=data.abilities.map(function(y) {
              $("#detalle").append('<li>-'+ y.ability.name +"</li><br/>");
              });
           
            $("#detalle").append('<p id="movimientos">Movimientos extra:<p/>');
            movimientos=data.moves.map(function(z) {
              $("#detalle").append('<li>-'+ z.move.name +"</li><br/>");
              });
             
          })
          .fail(function(data) {
            alert( "error" );
          })
    }
function regresar(){
  location.href="index.html";
}