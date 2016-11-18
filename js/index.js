function backspace() {
  document.getElementById("ans").value = document.getElementById("ans").value.substr(0, document.getElementById("ans").value.length - 1);
}

function evalAnswer() {
  document.getElementById("ans").value = math.eval(document.getElementById("ans").value);
}

document.addEventListener('keypress', function(event) {
  if(event.which === 13) {
    event.preventDefault();
    document.getElementById("ans").value = math.eval(document.getElementById("ans").value);
  }
  else {
    document.getElementById("ans").value += String.fromCharCode(event.keyCode);
  }
});

document.addEventListener('keydown', function(event) {
  if(event.which === 8) {
    backspace();
  }
});
