function swapCurrency(event) {
    event.preventDefault();
    var newRate = 1 / (Number(document.getElementById('exchangeRate').value));
    if (!isFinite(newRate)) {
        alert("Exchange rate is no number");
        return;
    }
    var currency1 = document.getElementById('curr1').value;
    var currency2 = document.getElementById('curr2').value;
    document.getElementById('exchangeRate').value = String(newRate);
    document.getElementById('curr1').value = currency2;
    document.getElementById('curr2').value = currency1;
}
function calculateTable(event) {
    event.preventDefault();
    var newRate = 1 / (Number(document.getElementById('exchangeRate').value));
    if (!isFinite(newRate)) {
        alert("Exchange rate is no number");
        return;
    }
    var currency1 = document.getElementById('curr1').value;
    var currency2 = document.getElementById('curr2').value;
    document.getElementById('tableTitle').value = "Exchange rate " + currency2 + "/" + currency1 + " : " + newRate;
}
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('swapButton').addEventListener("click", function (event) {
        swapCurrency(event);
    });
    document.getElementById('calcButton').addEventListener("click", function (event) {
        calculateTable(event);
    });
});
