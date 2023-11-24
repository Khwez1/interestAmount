// Declaring variables

let amountIpt = document.getElementById('amountInput');
let rateIpt = document.getElementById('rateInput');
let timeIpt = document.getElementById('timeInput');
let intrestOpt = document.getElementById('interestOutput');
let Btn = document.getElementById('Btn');

//creating a function that numbers to have decimals

function calculateSimpleInterest() {
    let amount = parseFloat(amountIpt.value);
    let rate = parseFloat(rateIpt.value);
    let time = parseFloat(timeIpt.value);

    //calculating the interest.

    if (!isNaN(amount) && !isNaN(rate) && !isNaN(time)) {
        let interest = (amount * rate * time) / 100;
        intrestOpt.value = interest.toFixed(2);
    } else {
        alert('Please input valid numbers');
    }
}

Btn.addEventListener('click', calculateSimpleInterest);