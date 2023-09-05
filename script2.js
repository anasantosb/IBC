document.getElementById("btn").onclick = function() {
    var contAguia=0;
    var contTubarao=0;
    var contLobo=0;
    var contGato=0;
    var radios = document.getElementsByClassName("pergunta")
    
    for(var i=0; i<radios.length; i++) {
       if(radios[i].checked) {
          if(radios[i].value === "aguia") {
             contAguia++;
          } else if (radios[i].value === "tubarao") {
             contTubarao++;
          } else if (radios[i].value === "lobo") {
             contLobo++;
          } else {
             contGato++;
       }
    }
 }
        
//salvando as porcentagens em um "banco" provisório para recuperar em outra página
//localStorage que permite que você salve na sessão do navegador algumas informações
// e com isso você pode acessar na outra página.
localStorage.setItem('porcAguia', `Águia = ${contAguia*4} %`) ;    
localStorage.setItem('porcTubarao', `Tubarão = ${contTubarao*4} %`) ; 
localStorage.setItem('porcLobo', `Lobo = ${contLobo*4} %`) ; 
localStorage.setItem('porcGato', `Gato = ${contGato*4} %`) ; 

 var resultado = `Águia = ${contAguia}<br> Tubarão = ${contTubarao}<br> Lobo = ${contLobo}<br> Gato = ${contGato}`;
 
 document.getElementById("resultado").innerHTML = resultado;
 const mostrarResultado = Math.max(contAguia, contGato, contLobo, contTubarao);
 switch(mostrarResultado){
    case contAguia:
       window.open("aguia.html");
       break;
       case contLobo:
          window.open("lobo.html");
          break;
          case contGato:
             window.open("gato.html");
             break;
             case contTubarao:
                window.open("tubarao.html");
                break;
    }
}