// const tempInput = document.getElementById("temp-input");
// const fromUnit = document.getElementById("from-unit");
// const toUnit = document.getElementById("to-unit");
// const converterBtn = document.getElementById("converter-btn");
// const resultValue = document.getElementById("result-value");
// const resultText = document.getElementById("result-text");

// // Function to check form validity and enable/disable button
// function validateForm() {
//   const hasValue = tempInput.value.trim() !== "";
//   const hasFromUnit = fromUnit.value !== "";
//   const hasToUnit = toUnit.value !== "";

//   // Button is enable only when all three fields are filled
//   converterBtn.disabled = !(hasValue && hasFromUnit && hasToUnit);
// }

// // Add input event listeners to track changes dynamically
// tempInput.addEventListener("input", validateForm);
// fromUnit.addEventListener("change", validateForm);
// toUnit.addEventListener("change", validateForm);

// // Conversion logic function
// function convertTemperature(value, from, to) {
//   if (from === to) return value;

//   let celsius;

//   // Step 1. Convert original unit to Celsius baseline
//   switch (from) {
//     case "celsius":
//       celcius = value;
//       break;
//     case "fahrenheit":
//       celsius = ((value - 32) * 5) / 9;
//       break;
//     case "kelvin":
//       celcius = value - 273.15;
//       break;
//   }

//   // Step 2. Convert Celsius baseline to the target unit
//   switch (to) {
//     case "celsius":
//       return celsius;
//     case "fahrenheit":
//       return (celcius * 9) / 5 + 32;
//     case "kelvin":
//       return celsius + 273.15;
//   }
// }

// // Handle click event
// converterBtn.addEventListener("click", () => {
//   const val = parseFloat(tempInput.value);
//   const from = fromUnit.value;
//   const to = toUnit.value;

//   const convertedValue = convertTemperature(val, from, to);

//   // Format result to maximum of 4 decimal places, trimming trailing zeros
//   const formattedResult = Number(convertedValue.toFixed(4));

//   // Display results
//   resultText.textContent = `${val}°${from === "kelvin" ? "" : ""}${from} = ${formattedResult}°${to === "kelvin" ? "" : ""}${to}`;
//   resultContainer.style.display = "block";
// });

// Get DOM Elements
const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");

// Function to check form validity and enable/disable button
function validateForm() {
  const hasValue = tempInput.value.trim() !== "";
  const hasFromUnit = fromUnit.value !== "";
  const hasToUnit = toUnit.value !== "";

  // Button is enabled only when all three fields are filled
  convertBtn.disabled = !(hasValue && hasFromUnit && hasToUnit);
}

// Add input event listeners to track changes dynamically
tempInput.addEventListener("input", validateForm);
fromUnit.addEventListener("change", validateForm);
toUnit.addEventListener("change", validateForm);

// Conversion Logic Function
function convertTemperature(value, from, to) {
  if (from === to) return value;

  let celsius;

  // Step 1: Convert original unit to Celsius baseline
  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = ((value - 32) * 5) / 9;
      break;
    case "K":
      celsius = value - 273.15;
      break;
  }

  // Step 2: Convert Celsius baseline to the target unit
  switch (to) {
    case "C":
      return celsius;
    case "F":
      return (celsius * 9) / 5 + 32;
    case "K":
      return celsius + 273.15;
  }
}

// Handle Click Event
convertBtn.addEventListener("click", () => {
  const val = parseFloat(tempInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  const convertedValue = convertTemperature(val, from, to);

  // Format result to maximum of 4 decimal places, trimming trailing zeros
  const formattedResult = Number(convertedValue.toFixed(4));

  // Display results
  resultText.textContent = `${val}°${from === "K" ? "" : ""}${from} = ${formattedResult}°${to === "K" ? "" : ""}${to}`;
  resultContainer.style.display = "block";
});
