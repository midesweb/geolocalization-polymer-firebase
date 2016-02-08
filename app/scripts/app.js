//    var ref= new Firebase("https://geolocalizar.firebaseio.com/");
//    ref.unauth();
var app = document.getElementById("app");

app.crearDialogo = function(msg){
  app.mensaje = msg;
  app.$.dialogo.open();
};
