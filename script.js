var gauge2 = Gauge(
  document.getElementById("gauge2"), {
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: 0,
    value: 50
  }
);

var gauge3 = Gauge(
  document.getElementById("gauge3"), {
    max: 100,
    value: 50
  }
);

function LerSensores(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4){
      if(this.status == 200){
        if(this.responseText != null){
          var dados = this.responseText.split('|');
          if (dados[1] < 100 && dados[1] > 0){
            gauge3.setValueAnimated(dados[1],1);
          };
          if (dados[0] < 100 && dados[0] > 0){
            gauge2.setValueAnimated(dados[0],1);
          };
          if(dados[2] == 0){
            document.getElementById("botao1").style.backgroundColor = "#ff704d";
          }
          else{
            document.getElementById("botao1").style.backgroundColor = "#ADFF85";
          }
          }
        }
      }
    }
  request.open("GET", "index.php", true);
  request.send(null);
  setTimeout(LerSensores,1000 * 50);

}
function BotaoCarga1(){
  var request = new XMLHttpRequest();
  request.open("GET", "http://192.168.43.254/led/2/s", true);
  request.send(null);
  LerSensores();
}
