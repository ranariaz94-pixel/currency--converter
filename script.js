// let wantedTransfer = document.querySelector("#wantedTransfer").value
// const btn = document.querySelector("#convert");
// const result = document.querySelector("#result");
// let transferrer = document.querySelector("#transferrer");

let input = document.querySelector("#thevaltobeconverted").value;


async function currencyCoversion(){
    let response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json');
    let data = await response.json();
      const amountInEUR = input / data.eur[wantedTransfer.toLowerCase()];
  const converted = amountInEUR * data.eur[transferrer.toLowerCase()];

  result.textContent = converted.toFixed(2)
}
btn.addEventListener("click",() => {
   let wantedTransfer = document.querySelector("#wantedTransfer").value
     let   transferrer = document.querySelector("#transferrer").value
       let  input = document.querySelector("#thevaltobeconverted").value;
      
currencyCoversion();
})
