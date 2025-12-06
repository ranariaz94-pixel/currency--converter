const btn = document.querySelector("#convert");
const result = document.querySelector("#result");

btn.addEventListener("click", async () => {
    const wantedTransfer = document.querySelector("#wantedTransfer").value;
    const transferrer = document.querySelector("#transferrer").value;
    const input = parseFloat(document.querySelector("#thevaltobeconverted").value);

    if (isNaN(input)) {
        result.innerText = "Please enter a valid number!";
        return;
    }

    result.innerText = "Loading... ⏳";

    try {
        const response = await fetch(
            'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json'
        );
        const data = await response.json();

        const amountInEUR = input / data.eur[wantedTransfer.toLowerCase()];
        const converted = amountInEUR * data.eur[transferrer.toLowerCase()];

        result.innerText = converted.toFixed(4) + " " + transferrer;
    } catch (error) {
        console.error(error);
        result.innerText = "An error occurred!";
    }
});
