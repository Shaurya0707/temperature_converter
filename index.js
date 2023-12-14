
   
        document.addEventListener("DOMContentLoaded", function () {
            // Select your input elements
            const temperatureInput = document.getElementById("temperatureInput");
            const celsiusRadio = document.getElementById("celsiusRadio");
            const fahrenheitRadio = document.getElementById("fahrenheitRadio");
            const resultOutput = document.getElementById("resultOutput");
            const convertButton = document.getElementById("convert");

            // Add a click event listener to the "Convert" button
            convertButton.addEventListener("click", function () {
                // Get the value from the input field
                const inputValue = parseFloat(temperatureInput.value);

                // Check if Celsius is selected and convert to Fahrenheit
                if (celsiusRadio.checked) {
                    const fahrenheitValue = (inputValue * 9 / 5) + 32;
                    resultOutput.value = fahrenheitValue + "°F";
                }
                // Check if Fahrenheit is selected and convert to Celsius
                else if (fahrenheitRadio.checked) {
                    const celsiusValue = (inputValue - 32) * 5 / 9;
                    resultOutput.value = celsiusValue + "°C";
                }
            });
        });
    