const billInput = document.getElementById("bill-input");
const numOfPeople = document.getElementById("num-of-people");
const totalDisplay = document.getElementById("total-display");
const tipDisplay = document.getElementById("tip-display");
const buttons = document.querySelectorAll("button");

// let x = .05 * "5";

// console.log(typeof x);

// x = x.toFixed(2);

// console.log(typeof x);
// console.log(x)

function clickButton() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
            if (button.textContent === "5%") {
                let tipAmount = .05 * billInput.value;
                let totalAmount = Number(billInput.value) + tipAmount;
                if (numOfPeople.value === "" || numOfPeople.value == 0 || numOfPeople.value == 1) {
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                } else {
                    tipAmount = (tipAmount/numOfPeople.value)
                    totalAmount = billInput.value/numOfPeople.value + tipAmount;               
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                }
            }

            if (button.textContent === "10%") {
                let tipAmount = .10 * billInput.value;
                let totalAmount = Number(billInput.value) + tipAmount;
                if (numOfPeople.value === "" || numOfPeople.value == 0 || numOfPeople.value == 1) {
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                } else {
                    tipAmount = (tipAmount/numOfPeople.value)
                    totalAmount = billInput.value/numOfPeople.value + tipAmount;               
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                }
            }

            if (button.textContent === "15%") {
                let tipAmount = .15 * billInput.value;
                let totalAmount = Number(billInput.value) + tipAmount;
                if (numOfPeople.value === "" || numOfPeople.value == 0 || numOfPeople.value == 1) {
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                } else {
                    tipAmount = (tipAmount/numOfPeople.value)
                    totalAmount = billInput.value/numOfPeople.value + tipAmount;               
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                }
            }

            if (button.textContent === "25%") {
                let tipAmount = .25 * billInput.value;
                let totalAmount = Number(billInput.value) + tipAmount;
                if (numOfPeople.value === "" || numOfPeople.value == 0 || numOfPeople.value == 1) {
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                } else {
                    tipAmount = (tipAmount/numOfPeople.value)
                    totalAmount = billInput.value/numOfPeople.value + tipAmount;               
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                }
            }

            if (button.textContent === "50%") {
                let tipAmount = .50 * billInput.value;
                let totalAmount = Number(billInput.value) + tipAmount;
                if (numOfPeople.value === "" || numOfPeople.value == 0 || numOfPeople.value == 1) {
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                } else {
                    tipAmount = (tipAmount/numOfPeople.value)
                    totalAmount = billInput.value/numOfPeople.value + tipAmount;               
                    tipDisplay.textContent = "$" + tipAmount.toFixed(2);
                    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
                }
            }

            if (button.textContent ==="RESET") {
                location.reload();
            }

            
        })
    })
}

clickButton();

