// Function to convert Celsius to Fahrenheit
function fahrenheitToCelsius(celsius) {
let toFahrenheit = (celsius * 9) / 5 + 32;
return toFahrenheit;
}
  // Function to convert Fahrenheit to Celsius
  function celsiusToFahrenheit (fahrenheit) {
let toCelsius =((fahrenheit - 32) * 5) / 9;
return toCelsius;
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (to °c or to °f)");
  
  if (conversionType.toLowerCase() === "c") {
   let result = celsiusToFahrenheit(temperature);
   alert(result + "°C");
  } else if (conversionType.toLowerCase() === "f") {
    let result = fahrenheitToCelsius(temperature);
    alert(result + "°F");
  } else {
    alert("Invalid conversion type.");
  }
