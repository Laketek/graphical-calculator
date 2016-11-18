function backspace() {
  var value = document.getElementById("ans").value;
  document.getElementById("ans").value = value.substr(0, value.length - 1);
}

function evalAnswer() {
  document.getElementById("ans").value = math.eval(document.getElementById("ans").value);
}
