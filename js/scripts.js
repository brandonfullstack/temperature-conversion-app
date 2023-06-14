// business logic
function convertCF(celsius) {
  return celsius * 1.8 + 32;
}

function convertFC(fahrenheit) {
  return fahrenheit -32 * 5/9;
}

// user interface logic 
const celsius = prompt("Enter a temperature in Degrees Celsius:");
const fahrenheit = prompt("Enter a temperature in Degrees Fahrenheit:");

window.alert(convertCF(celsius) + "° Fahrenheit" + "\n" + 
convertFC(fahrenheit) + "° Celsius");