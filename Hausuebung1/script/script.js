function swapCurrency(event) {
    event.preventDefault();
    var newRate = 1 / (Number(document.getElementById('exchangeRate').value));
    var currency1 = document.getElementById('curr1').value;
    var currency2 = document.getElementById('curr2').value;
    if (!isFinite(newRate)) {
        alert("Exchange rate is no number");
        return;
    }
    else if (currency1 === "" || currency2 === "") {
        alert("No currency declared");
        return;
    }
    document.getElementById('exchangeRate').value = String(newRate.toFixed(4));
    document.getElementById('curr1').value = currency2;
    document.getElementById('curr2').value = currency1;
    calculateTable(event);
}
function calculateTable(event) {
    event.preventDefault();
    var rate = (Number(document.getElementById('exchangeRate').value));
    var currency1 = document.getElementById('curr1').value;
    var currency2 = document.getElementById('curr2').value;
    if (!isFinite(1 / rate)) {
        alert("Exchange rate is no number");
        return;
    }
    else if (currency1 === "" || currency2 === "") {
        alert("No currency declared");
        return;
    }
    document.getElementById('tableTitle').innerHTML = "Exchange rate " + currency2 + "/" + currency1 + " = " + rate.toFixed(4);
    document.getElementById('tableCurrency1').innerHTML = currency1;
    document.getElementById('tableCurrency2').innerHTML = currency2;
    for (var i = 1; i < 29; i++) {
        var value = (Number(document.getElementById(i + '0').innerHTML) * rate).toFixed(2);
        document.getElementById(i + '1').innerHTML = String(value);
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('swapButton').addEventListener("click", function (event) {
        swapCurrency(event);
    });
    document.getElementById('calcButton').addEventListener("click", function (event) {
        calculateTable(event);
    });
});
