const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelsius');
const result = document.getElementById('result');
const btn = document.getElementById('button');

function getTemp() {
    const value = textBox.value.trim();
    if (value === '' || isNaN(value)) return false;
    return Number(value);
}

function convertTemp(temp) {
    if (toFahrenheit.checked) return ((temp * 9 / 5) + 32).toFixed(1) + "°F";
    if (toCelcius.checked) return ((temp - 32) * (5 / 9)).toFixed(1) + "°C";
}

btn.addEventListener('click', () => {
    const temp = getTemp();
    if (temp === false) { 
        result.textContent = 'Enter a valid number'; 
        return; 
    }
    if (!toFahrenheit.checked && !toCelcius.checked) {
        result.textContent = 'Select a unit';
        return;
    }
    const convertedTemp = convertTemp(temp); 
    result.textContent = convertedTemp;
});

