const display = document.getElementById("display");

function clearAll() {
  display.value = "";
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function appendValue(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function sqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function square() {
  display.value = Math.pow(eval(display.value), 2);
}

function cube() {
  display.value = Math.pow(eval(display.value), 3);
}

function sin() {
  display.value = Math.sin(toRadians(eval(display.value)));
}

function cos() {
  display.value = Math.cos(toRadians(eval(display.value)));
}

function tan() {
  display.value = Math.tan(toRadians(eval(display.value)));
}

function log() {
  display.value = Math.log10(eval(display.value));
}

function exp() {
  display.value = Math.exp(eval(display.value));
}

function pi() {
  display.value = Math.PI;
}

function percent() {
  display.value = eval(display.value) / 100;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
