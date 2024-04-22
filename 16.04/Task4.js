let celciumTemperature = [0, 10, 20, 30, 40];

let fahrenheitTemperature = celciumTemperature.map((temperature) => (temperature * 9) / 5 + 32);
console.log(fahrenheitTemperature);