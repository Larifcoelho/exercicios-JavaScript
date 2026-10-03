function toCelsius(farenheit) {
  return (5/9) * (farenheit-32);
}

let value = toCelsius(77);

document.getElementById("demo").innerHTML = "The value is " + value;
