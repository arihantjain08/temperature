let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

function cc() {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
}
function ff() {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}
function kk() {
    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(2));

    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
}