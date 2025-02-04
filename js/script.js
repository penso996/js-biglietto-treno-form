document.getElementById("calculate-button").addEventListener("click", function (event) {
    event.preventDefault();

    //INPUT DATI UTENTE DAL FORM
    const userName = document.getElementById("user-name").value.trim();
    const kilometers = document.getElementById("user-kilometers").value;
    const age = document.getElementById("user-age").value;

    //CALCOLO DEL PREZZO
    const pricePerKm = 0.21;
    let ticketPrice = kilometers * pricePerKm;
    let discount = "Prezzo pieno";

    if (age < 18) {
        ticketPrice = ticketPrice * 0.8;
        discount = "20%";
    } else if (age >= 65) {
        ticketPrice = ticketPrice * 0.6;
        discount = "40%";
    }

    ticketPrice = ticketPrice.toFixed(2);

    //OUTPUT
    document.getElementById("user-name-output").textContent = userName;
    document.getElementById("user-age-output").textContent = age + " anni";
    document.getElementById("user-discount-output").textContent = discount;
    document.getElementById("user-kilometers-output").textContent = kilometers + " km";
    document.getElementById("user-price-output").textContent = "€ " + ticketPrice;

});