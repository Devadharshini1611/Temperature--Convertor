function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    if (isNaN(tempValue)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = tempValue;
        fahrenheit = (tempValue * 9/5) + 32;
        kelvin = tempValue + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (tempValue - 32) * 5/9;
        fahrenheit = tempValue;
        kelvin = celsius + 273.15;
    } else if (unit === "kelvin") {
        celsius = tempValue - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = tempValue;
    }

    displayResults(celsius, fahrenheit, kelvin);
}

function displayResults(celsius, fahrenheit, kelvin) {
    document.getElementById("celsius").textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("fahrenheit").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvin").textContent = `Kelvin: ${kelvin.toFixed(2)} K`;

    setBackground(document.getElementById("celsius"), celsius);
    setBackground(document.getElementById("fahrenheit"), fahrenheit);
    setBackground(document.getElementById("kelvin"), kelvin);
}

function setBackground(element, temp) {
    if (temp < 0) {
        element.className = "result-card cold";
    } else if (temp <= 30) {
        element.className = "result-card mild";
    } else {
        element.className = "result-card hot";
    }
}
