var request = new XMLHttpRequest();
 
request.onreadystatechange = function(){
alert("readyState: " + this.readyState + " status: " + this.status + " this.responseText: " + this.responseText);
    if(this.readyState == 4){
      if(this.status == 200){
        if(this.responseText != null){
          var dados = JSON.parse(this.responseText);
          alert("Temperatura: " + dados.gt)
           }
          }
        }
      }
request.open("GET", "http://172.32.0.100/dht/0/r", true);
request.send(null);