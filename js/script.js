document.getElementById("calculate-button").addEventListener("click", function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name").value.trim();
    const kilometers = document.getElementById("user-kilometers").value;
    const age = document.getElementById("user-age").value;

    const = pricePerKm = 0.21;
    let = ticketPrice = kilometers * pricePerKm;

    if (age < 18) {
        ticketPrice = ticketPrice * 0.8;
    } else if (age >= 65) {
        ticketPrice = ticketPrice * 0.6;
    }

    ticketPrice = ticketPrice.toFixed(2);

});