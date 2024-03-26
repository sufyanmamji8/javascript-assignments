// question 1

    let num1 = +prompt("Enter first number: ");
    let num2 = +prompt("Enter second number: ");
    let sum = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);

    //question 2
let firstNumber = prompt("Enter First Number : ")
let secondNumber = prompt("Enter Second Number : ")
let subtract = firstNumber - secondNumber
document.write(" Subtraction of " + firstNumber + " and " + secondNumber + " is " + subtract)
document.write("<br>")
 

// question 3
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR.");

//question 5

let tableNumber = 5;
for (let i = 1; i <= 10; i++) {
    document.write(tableNumber + " * " + i + " = " + (tableNumber * i));
}

// question 6

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
 }
 function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
 }
 let celsiusTemperature = 30;
 let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
 console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");
 
 fahrenheitTemperature = 86;
 celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
 console.log(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");

 // question 7

 let priceItem1 = 25;
let priceItem2 = 30; 
let quantityItem1 = 2; 
let quantityItem2 = 1;

let shippingCharges = 10;

let totalprice = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalprice + "</h3>");


// question 8
let totalMarks = 1000;
let marksObtained = 720;

let percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

// question 9


let usDollars = 10;
let saudiRiyals = 25;


let usdToPkrRate = 104.80;
let sarToPkrRate = 28;


let totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);


document.write("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2));

