function logout(){
  var xhttp = inicializa_xhr();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      logout_borrar_cookie();
      document.getElementById("header_usuario").innerHTML =
        this.responseText;
    }
  };

  xhttp.open("GET", "../utils/cabecera_visitante.txt", true);
  xhttp.send();
}

function logout_borrar_cookie(){
  document.cookie = "user_logueado=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "correo_logueado=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
