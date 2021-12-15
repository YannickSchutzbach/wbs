function swapCurrency(event) {
    event.preventDefault();

    if ((<HTMLInputElement>document.getElementById('case')).value === "") {
        alert("Calculate First!");
        return;
    }
    if ((<HTMLInputElement>document.getElementById('case')).value === "a") {
        (<HTMLInputElement>document.getElementById('case')).value = "b";
    } else {
        (<HTMLInputElement>document.getElementById('case')).value = "a";
    }
    calculateTable();
}

function buttonCalculate(event) {
    event.preventDefault();
    if (!(<HTMLInputElement>document.getElementById('curr1')).value || !(<HTMLInputElement>document.getElementById('curr2')).value) {
        alert("No currency declared!")
        return;

    } else if (!isFinite(1 / Number((<HTMLInputElement>document.getElementById('exchangeRate')).value))) {
        alert("Exchange rate is no number");
        return;
    }

    (<HTMLInputElement>document.getElementById('hideRate')).value = Number((<HTMLInputElement>document.getElementById('exchangeRate')).value).toFixed(4);
    (<HTMLInputElement>document.getElementById('hideCurr1')).value = (<HTMLInputElement>document.getElementById('curr1')).value;
    (<HTMLInputElement>document.getElementById('hideCurr2')).value = (<HTMLInputElement>document.getElementById('curr2')).value;
    (<HTMLInputElement>document.getElementById('case')).value = "b";

    calculateTable();
}

function calculateTable() {
    let rate;
    let currency1;
    let currency2;
    if ((<HTMLInputElement>document.getElementById('case')).value === "a") {
        rate = 1 / (Number((<HTMLInputElement>document.getElementById('hideRate')).value));
        rate = Number(rate.toFixed(4));
        currency1 = (<HTMLInputElement>document.getElementById('hideCurr2')).value;
        currency2 = (<HTMLInputElement>document.getElementById('hideCurr1')).value;
    }
    if ((<HTMLInputElement>document.getElementById('case')).value === "b") {
        rate = (Number((<HTMLInputElement>document.getElementById('hideRate')).value));
        currency1 = (<HTMLInputElement>document.getElementById('hideCurr1')).value;
        currency2 = (<HTMLInputElement>document.getElementById('hideCurr2')).value;
    }

    //generate Table
    document.getElementById('table').innerHTML = `
    <table class="table">
    <thead>
    <td id="tableCurrency1"></td>
    <td id="tableCurrency2"></td>
    </thead>
    <tr class="1">
        <td id="10">1.00</td>
        <td id="11"></td>
    </tr>
    <tr class="1">
        <td id="20">2.00</td>
        <td id="21"></td>
    </tr>
    <tr class="1">
        <td id="30">3.00</td>
        <td id="31"></td>
    </tr>
    <tr class="1">
        <td id="40">4.00</td>
        <td id="41"></td>
    </tr>
    <tr class="1">
        <td id="50">5.00</td>
        <td id="51"></td>
    </tr>
    <tr class="1">
        <td id="60">6.00</td>
        <td id="61"></td>
    </tr>
    <tr class="1">
        <td id="70">7.00</td>
        <td id="71"></td>
    </tr>
    <tr class="1">
        <td id="80">8.00</td>
        <td id="81"></td>
    </tr>
    <tr class="1">
        <td id="90">9.00</td>
        <td id="91"></td>
    </tr>
    <tr class="1">
        <td id="100">10.00</td>
        <td id="101"></td>
    </tr>
    <tr class="2">
        <td id="110">20.00</td>
        <td id="111"></td>
    </tr>
    <tr class="2">
        <td id="120">30.00</td>
        <td id="121"></td>
    </tr>
    <tr class="2">
        <td id="130">40.00</td>
        <td id="131"></td>
    </tr>
    <tr class="2">
        <td id="140">50.00</td>
        <td id="141"></td>
    </tr>
    <tr class="2">
        <td id="150">60.00</td>
        <td id="151"></td>
    </tr>
    <tr class="2">
        <td id="160">70.00</td>
        <td id="161"></td>
    </tr>
    <tr class="2">
        <td id="170">80.00</td>
        <td id="171"></td>
    </tr>
    <tr class="2">
        <td id="180">90.00</td>
        <td id="181"></td>
    </tr>
    <tr class="2">
        <td id="190">100.00</td>
        <td id="191"></td>
    </tr>
    <tr class="3">
        <td id="200">200.00</td>
        <td id="201"></td>
    </tr>
    <tr class="3">
        <td id="210">300.00</td>
        <td id="211"></td>
    </tr>
    <tr class="3">
        <td id="220">400.00</td>
        <td id="221"></td>
    </tr>
    <tr class="3">
        <td id="230">500.00</td>
        <td id="231"></td>
    </tr>
    <tr class="3">
        <td id="240">600.00</td>
        <td id="241"></td>
    </tr>
    <tr class="3">
        <td id="250">700.00</td>
        <td id="251"></td>
    </tr>
    <tr class="3">
        <td id="260">800.00</td>
        <td id="261"></td>
    </tr>
    <tr class="3">
        <td id="270">900.00</td>
        <td id="271"></td>
    </tr>
    <tr class="3">
        <td id="280">1000.00</td>
        <td id="281"></td>
    </tr>
</table>
    `

    document.getElementById('tableTitle').innerHTML = "Exchange rate " + currency2 + "/" + currency1 + " = " + rate.toFixed(4);
    document.getElementById('tableCurrency1').innerHTML = currency1;
    document.getElementById('tableCurrency2').innerHTML = currency2;

    //fill Table
    for (let i = 1; i < 29; i++) {
        let value = (Number(document.getElementById(i + '0').innerHTML) * rate).toFixed(2);
        document.getElementById(i + '1').innerHTML = String(value);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('swapButton').addEventListener("click", (event) => {
        swapCurrency(event);
    })
    document.getElementById('calcButton').addEventListener("click", (event) => {
        buttonCalculate(event);
    })
})