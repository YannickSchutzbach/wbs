function swapCurrency(event) {
    event.preventDefault();
    if (document.getElementById('case').value === "") {
        alert("Calculate First!");
        return;
    }
    if (document.getElementById('case').value === "a") {
        document.getElementById('case').value = "b";
    }
    else {
        document.getElementById('case').value = "a";
    }
    calculateTable();
}
function buttonCalculate(event) {
    event.preventDefault();
    if (!document.getElementById('curr1').value || !document.getElementById('curr2').value) {
        alert("No currency declared!");
        return;
    }
    else if (!isFinite(1 / Number(document.getElementById('exchangeRate').value))) {
        alert("Exchange rate is no number");
        return;
    }
    document.getElementById('hideRate').value = Number(document.getElementById('exchangeRate').value).toFixed(4);
    document.getElementById('hideCurr1').value = document.getElementById('curr1').value;
    document.getElementById('hideCurr2').value = document.getElementById('curr2').value;
    document.getElementById('case').value = "b";
    calculateTable();
}
function calculateTable() {
    var rate;
    var currency1;
    var currency2;
    if (document.getElementById('case').value === "a") {
        rate = 1 / (Number(document.getElementById('hideRate').value));
        rate = Number(rate.toFixed(4));
        currency1 = document.getElementById('hideCurr2').value;
        currency2 = document.getElementById('hideCurr1').value;
    }
    if (document.getElementById('case').value === "b") {
        rate = (Number(document.getElementById('hideRate').value));
        currency1 = document.getElementById('hideCurr1').value;
        currency2 = document.getElementById('hideCurr2').value;
    }
    //generate Table
    document.getElementById('table').innerHTML = "\n    <table class=\"table\">\n    <thead>\n    <td id=\"tableCurrency1\"></td>\n    <td id=\"tableCurrency2\"></td>\n    </thead>\n    <tr class=\"1\">\n        <td id=\"10\">1.00</td>\n        <td id=\"11\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"20\">2.00</td>\n        <td id=\"21\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"30\">3.00</td>\n        <td id=\"31\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"40\">4.00</td>\n        <td id=\"41\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"50\">5.00</td>\n        <td id=\"51\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"60\">6.00</td>\n        <td id=\"61\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"70\">7.00</td>\n        <td id=\"71\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"80\">8.00</td>\n        <td id=\"81\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"90\">9.00</td>\n        <td id=\"91\"></td>\n    </tr>\n    <tr class=\"1\">\n        <td id=\"100\">10.00</td>\n        <td id=\"101\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"110\">20.00</td>\n        <td id=\"111\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"120\">30.00</td>\n        <td id=\"121\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"130\">40.00</td>\n        <td id=\"131\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"140\">50.00</td>\n        <td id=\"141\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"150\">60.00</td>\n        <td id=\"151\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"160\">70.00</td>\n        <td id=\"161\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"170\">80.00</td>\n        <td id=\"171\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"180\">90.00</td>\n        <td id=\"181\"></td>\n    </tr>\n    <tr class=\"2\">\n        <td id=\"190\">100.00</td>\n        <td id=\"191\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"200\">200.00</td>\n        <td id=\"201\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"210\">300.00</td>\n        <td id=\"211\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"220\">400.00</td>\n        <td id=\"221\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"230\">500.00</td>\n        <td id=\"231\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"240\">600.00</td>\n        <td id=\"241\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"250\">700.00</td>\n        <td id=\"251\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"260\">800.00</td>\n        <td id=\"261\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"270\">900.00</td>\n        <td id=\"271\"></td>\n    </tr>\n    <tr class=\"3\">\n        <td id=\"280\">1000.00</td>\n        <td id=\"281\"></td>\n    </tr>\n</table>\n    ";
    document.getElementById('tableTitle').innerHTML = "Exchange rate " + currency2 + "/" + currency1 + " = " + rate.toFixed(4);
    document.getElementById('tableCurrency1').innerHTML = currency1;
    document.getElementById('tableCurrency2').innerHTML = currency2;
    //fill Table
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
        buttonCalculate(event);
    });
});
