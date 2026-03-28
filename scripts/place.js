document.addEventListener("DOMContentLoaded", () => {
    // Get references to HTML elements
    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("windSpeed");
    const chillElement = document.getElementById("windChill");

    // Extract values and fix the comma issue for calculations
    const temperature = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windElement.textContent.replace(',', '.'));

    // Wind Chill function
    function calculateWindChill(temp, speed) {
        // Standard Metric formula conditions: Temp <= 10°C and Wind > 4.8 km/h
        if (temp <= 10 && speed > 4.8) {
            const chill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
            return `${chill.toFixed(1)} °C`;
        } else {
            return "N/A";
        }
    }

    // Update with the calculation
    chillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Update Year and Last Modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});