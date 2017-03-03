function saludo (idioma) {
  //Escribe tu codigo aqui
  switch(idioma){
    case "en": return "Hello World";
               break;
    case "es": return "Hola Mundo";
              break;
    case "de": return "Hallo Welt";
  }

}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.saludo = saludo;
}
