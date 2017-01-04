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
          var dados = json.parse(this.responseText);
          alert(dados.gt)
          if (dados.gt < 100 && dados.gt > 0){
            gauge3.setValueAnimated(dados.gt,1);
          };
          if (dados.gh < 100 && dados.gh > 0){
            gauge2.setValueAnimated(dados.gh,1);
          };
          if(dados.led == 0){
            document.getElementById("botao1").style.backgroundColor = "#ff704d";
          }
          else{
            document.getElementById("botao1").style.backgroundColor = "#ADFF85";
          }
          }
        }
      }
    }
  request.open("GET", "http://172.32.0.100/dht/0/r/", true);
  request.send(null);
  setTimeout(LerSensores,1000 * 50);

}
function BotaoCarga1(){
  var request = new XMLHttpRequest();
  request.open("GET", "http://172.32.0.100/led/2/s", true);
  request.send(null);
  LerSensores();
}