//temp converter


function celsiusToFahrenheit(temp) {
	return temp * 1.8 + 32;
}

console.log("The temp when converted to F is: " + celsiusToFahrenheit(1));


function farenheitToCelsius(temp) {
	return (temp -  32) / 1.8;
}

console.log("The temp when converted to C is: " + farenheitToCelsius(1));
