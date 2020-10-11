$(document).ready(function(){
    $("body").hide().fadeIn(1000);
    $("#boton").click(function(){llamarApi()});

    $("#lista-pokemones").on("click","li",function(){
      console.log($(this).attr("data-url"));
      sessionStorage.setItem("datos",$(this).attr("data-url"));
      location.href="detalles.html";
    });
});
function llamarApi(){
$.ajax(
    {
      url : "https://pokeapi.co/api/v2/pokemon",
      type: "GET"
    })
      .done(function(data) {
        console.log(data);

        lista=data.results.map(function(x) {
        $("#lista-pokemones").append('<li data-url="'+ x.url +'">'+ x.name +"</li><br/>");
        });
         
      })
      .fail(function(data) {
        alert( "error" );
      })
}
