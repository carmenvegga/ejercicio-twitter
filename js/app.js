//1. Encontrar el elemento en donde se requiere poner un detector de eventos
var clickerButton = document.getElementById('clicker');
var txt = document.getElementById('txt-tweet');
var contentsTweet = document.getElementById('cont-tweet');
var longTxt = txt.value.length;
var txtValue = txt.value;


//2. Definir una función que será llamada cuando suceda el evento, (hacer click)
//2.1 Segunda función, deshabilitar si hay mas de 140 caracteres
var btnDisabled = function() {
  longTxt = txt.value.length;
  //console.log("longitud de texto:", longTxt);
  if (longTxt <= 139) {
    clickerButton.disabled = false;
    //console.log("habilitado");
  } else {
    clickerButton.disabled = true;
    //console.log("deshabilitado");
  }
}
var contador = function() {
  longTxt.onkeypress;
  console.log("hola");
}
contador();
/*var changeColor = function() {
  me falta el contador
}
*/

txt.placeholder=("¿Qué estás pensando?");

//Creando función al evento del click en el boton
var onButtonClick = function() {
  txtValue = txt.value;
  var tweet = document.createElement('p');
  tweet.classList.add('block-tweet');
  tweet.innerHTML = txtValue;
  tweet.style.marginBottom = "20px";
  contentsTweet.appendChild(tweet);
  clearDiv();
}
//Limpiando pantalla de ingreso de texto
var clearDiv = function (){
  txt.value = '';
}

//3. Llamar a la función definida anteriormente, usando addEventListener
//cuando suceda el evento "click" en el boton.

txt.addEventListener('keypress', btnDisabled);

clickerButton.addEventListener('click', onButtonClick);
