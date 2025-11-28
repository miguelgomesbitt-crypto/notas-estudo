function fahrenheitParaCelsius(fahrenheit) {
    //Formula para a conversão
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

//exemplo de uso
let temperaturaFahrenheit = 68;
let temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);

console.log(`${temperaturaFahrenheit}°F é igual a ${temperaturaCelsius}°C`); // Exibe: 68°F é igual a 20°C