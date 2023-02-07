

document.getElementById("submitButton").onclick = function () {
  let temp;
  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toCelsius(temp);
} else if (document.getElementById("fButton").checked) {
      document.getElementById("tempLabel").innerHTML = temp + "°C";
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  } else {
    document.getElementById("tempLabel").innerHTML = "select a unit";
  }
};



function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
