const btn = document.querySelector("#convert");
const result = document.querySelector("#result");

btn.addEventListener("click", async () => {
    const from = document.querySelector("#wantedTransfer").value.toLowerCase();
    const to = document.querySelector("#transferrer").value.toLowerCase();
    const amount = parseFloat(document.querySelector("#thevaltobeconverted").value);

    if (isNaN(amount)) {
        result.innerText = "Please enter a valid number!";
        return;
    }

    result.innerText = "Loading... ⏳";

    try {
        const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
        );

        const data = await response.json();

        if (!data[from][to]) {
            result.innerText = "Invalid currency code!";
            return;
        }

        const converted = amount * data[from][to];

        result.innerText = `${converted.toFixed(2)} ${to.toUpperCase()}`;
    } catch (err) {
        console.error(err);
        result.innerText = "Conversion failed ❌";
    }
});
