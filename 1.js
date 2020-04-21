
function changeUser(){
  var inputVal = document.getElementById("user").value;
  document.getElementById("guest").innerHTML = inputVal;
}

function maxQtd(id){
  var username = "p-qtd-"+id;

  val = parseInt(document.getElementById(username).value);
  val += 1;
  document.getElementById(username).value = val;

  if(id === '1'){
    var preco = 2.37;
  } else {
    var preco = 7.95;
  }
  var total = val * preco;
  document.getElementById("total"+id).innerHTML = total;
}

function lssQtd(id){
  var username = "p-qtd-"+id;

  val = parseInt(document.getElementById(username).value);
  val -= 1;
  document.getElementById(username).value = val;

  if(id === '1'){
    var preco = 2.37;
  } else {
    var preco = 7.95;
  }
  var total = val * preco;
  document.getElementById("total"+id).innerHTML = total;
}

function thx(){
  alert("Obrigado pela preferência");
}
