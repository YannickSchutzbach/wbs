function swapCurrency(event) {
    event.preventDefault();

    let newRate = 1/(Number((<HTMLInputElement>document.getElementById('exchangeRate')).value));
    let currency1 = (<HTMLInputElement>document.getElementById('curr1')).value;
    let currency2 = (<HTMLInputElement>document.getElementById('curr2')).value;

    if (!isFinite(newRate)){
        alert("Exchange rate is no number");
        return;
    }else if(currency1 === "" || currency2 ===""){
        alert("No currency declared");
        return;
    }

    (<HTMLInputElement>document.getElementById('exchangeRate')).value = String(newRate.toFixed(4));
    (<HTMLInputElement>document.getElementById('curr1')).value = currency2;
    (<HTMLInputElement>document.getElementById('curr2')).value = currency1;
    calculateTable(event);
}

function calculateTable(event) {
    event.preventDefault();

    let rate = (Number((<HTMLInputElement>document.getElementById('exchangeRate')).value));
    let currency1 = (<HTMLInputElement>document.getElementById('curr1')).value;
    let currency2 = (<HTMLInputElement>document.getElementById('curr2')).value;

    if (!isFinite(1/rate)){
        alert("Exchange rate is no number");
        return;
    }else if (currency1 === "" || currency2 ===""){
        alert("No currency declared");
        return;
    }

    document.getElementById('tableTitle').innerHTML = "Exchange rate "+currency2+"/"+currency1+" = "+rate.toFixed(4);

    document.getElementById('tableCurrency1').innerHTML = currency1;
    document.getElementById('tableCurrency2').innerHTML = currency2
    for (let i = 1; i < 29; i++) {
        let value = (Number(document.getElementById(i+'0').innerHTML)*rate).toFixed(2);
        document.getElementById(i+'1').innerHTML = String(value);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('swapButton').addEventListener("click", (event) => {
        swapCurrency(event);
    })
    document.getElementById('calcButton').addEventListener("click", (event) => {
        calculateTable(event);
    })
})