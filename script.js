// Get input elements
const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');

// Add event listeners for Celsius to Fahrenheit conversion
celsiusInput.addEventListener('input', function() {
  const celsiusTemperature = parseFloat(celsiusInput.value);
  const fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
  fahrenheitInput.value = fahrenheitTemperature.toFixed(2);
});

// Add event listeners for Fahrenheit to Celsius conversion
fahrenheitInput.addEventListener('input', function() {
  const fahrenheitTemperature = parseFloat(fahrenheitInput.value);
  const celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
  celsiusInput.value = celsiusTemperature.toFixed(2);
});