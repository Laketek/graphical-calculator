function calcCheck() {
  if($('#calcTable1').is(":visible") === true) {
    return true;
  }
  else if($('#calcTable2').is(":visible") === true) {
    return false;
  }
}

function backspace() {
  if(calcCheck() === true) {
    document.getElementById("ans1").value = document.getElementById("ans1").value.substr(0, document.getElementById("ans1").value.length - 1);
  }
  else if(calcCheck() === false) {
    document.getElementById("ans2").value = document.getElementById("ans2").value.substr(0, document.getElementById("ans2").value.length - 1);
  }
}

function evalAnswer() {
  if(calcCheck() === true) {
    if(document.getElementById("ans1").value.length > 0) {
      document.getElementById("ans1").value = math.eval(document.getElementById("ans1").value);
    }
  }
  else if(calcCheck() === false) {
    if(document.getElementById("ans2").value.length > 0) {
      document.getElementById("ans2").value = math.eval(document.getElementById("ans2").value);
    }
  }
}

document.addEventListener('keypress', function(event) {
  if(calcCheck() === true) {
    if(event.which === 13) {
      event.preventDefault();
      document.getElementById("ans1").value = math.eval(document.getElementById("ans1").value);
    }
    else {
      event.preventDefault();
      document.getElementById("ans1").value += String.fromCharCode(event.keyCode);
    }
  }
  else if(calcCheck() === false) {
    if(event.which === 13) {
      event.preventDefault();
      document.getElementById("ans2").value = math.eval(document.getElementById("ans2").value);
    }
    else {
      event.preventDefault()
      document.getElementById("ans2").value += String.fromCharCode(event.keyCode);
    }
  }
});

document.addEventListener('keydown', function(event) {
  if(event.which === 8) {
    backspace();
  }
});

$(document).ready(function() {
  $('#standardButton').click(function() {
    $('#calcTable1').hide(400);
    $('#calcTable2').show(400);
  });
  $('#scientificButton').click(function() {
    $('#calcTable1').show(400);
    $('#calcTable2').hide(400);
  });
  $('#formulaButton').click(function() {
    $('#formulaBox').toggle(400);
  });
});

$(window).ready(function() {
  $('#calcTable1').hide();
  $('#formulaBox').hide();
});
