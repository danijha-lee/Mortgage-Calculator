let amount = document.getElementById("amount").value;
let term = document.getElementById("term").value;
let rate = document.getElementById("rate").value;

function calcPayment(amount, term, rate) {
    return (amount * rate) / (1 - Math.pow(1 + rate, - term));
}

function calcInterest(balance, rate) {
    return balance * rate;
}

function calcRate() {
    let rate = parseFloat(document.getElementById("rate").value);
    return rate = rate / 1200;
}

function buildSchedule() {
    let loanAmount = Number(document.getElementById("lamount").value);
    let term = parseInt(document.getElementById("lterm").value);
    let rate = calcRate();

    let payment = calcPayment(loanAmount, rate, term);
    let payments = getPayments(loanAmount, rate, term, payment);

    displayData(payments, loanAmount, payment);
}

function getPayments(amount, rate, term, payment) {
    let payments = [];
}

let balance = amount