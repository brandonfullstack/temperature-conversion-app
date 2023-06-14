// business logic
function convert(celsius) {
  return celsius * 1.8 + 32;
}

// user interface logic 
const celsius = prompt("Enter a temperature in Degrees Celsius:");

window.alert(convert(celsius) + "° Fahrenheit");
