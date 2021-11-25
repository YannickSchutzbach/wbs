function swapCurrency(event) {
    event.preventDefault();

    let newRate = 1/(Number((<HTMLInputElement>document.getElementById('exchangeRate')).value));
    if (!isFinite(newRate)){
        alert("Exchange rate is no number");
        return;
    }
    let currency1 = (<HTMLInputElement>document.getElementById('curr1')).value;
    let currency2 = (<HTMLInputElement>document.getElementById('curr2')).value;

    (<HTMLInputElement>document.getElementById('exchangeRate')).value = String(newRate);
    (<HTMLInputElement>document.getElementById('curr1')).value = currency2;
    (<HTMLInputElement>document.getElementById('curr2')).value = currency1;
}

function calculateTable(event) {
    event.preventDefault();

    let newRate = 1/(Number((<HTMLInputElement>document.getElementById('exchangeRate')).value));
    if (!isFinite(newRate)){
        alert("Exchange rate is no number");
        return;
    }
    let currency1 = (<HTMLInputElement>document.getElementById('curr1')).value;
    let currency2 = (<HTMLInputElement>document.getElementById('curr2')).value;

    (<HTMLInputElement>document.getElementById('tableTitle')).value = "Exchange rate "+currency2+"/"+currency1+" : " + newRate;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('swapButton').addEventListener("click", (event) => {
        swapCurrency(event);
    })
    document.getElementById('calcButton').addEventListener("click", (event) => {
        calculateTable(event);
    })

})
