const billInput = document.getElementById("bill-input");
const numOfPeople = document.getElementById("num-of-people");
const errorMessage = document.getElementsByClassName("error-message");
const totalDisplay = document.getElementById("total-display");
const tipDisplay = document.getElementById("tip-display");
const buttons = document.querySelectorAll("button");


//Test Strings
let testInput1 = "jkahdf.lkadhf";
let testInput2 = "5.5.5";
let testInput3 = "5.5";
let testInput4 = "5";

//Count Decimals
function countDecimals(str) {
    if (str.match(/\./g) === null) {
        return 0;
    } else if (str.match(/\./g).length === 1) {
        return 1;
    } else {
        return 2;
    };
};

// console.log(countDecimals(testInput4));

function changeOutlineColor(input) {
    input.focus();
    return input.classList.add('error');
};

function removeErrorMessage() {
    errorMessage[0].style.display = "none";
    errorMessage[1].style.display = "none";
    billInput.classList.remove('error');
    numOfPeople.classList.remove('error');
}


function clickButton() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Checking Bill Input Value:
            if (billInput.value === "") {
                errorMessage[0].style.display = "block";
                errorMessage[0].textContent = "Enter a value!"
                return changeOutlineColor(billInput);
            } else {
                removeErrorMessage();
            }
            
            if (countDecimals(billInput.value) === 2) {
                errorMessage[0].style.display = "block";
                errorMessage[0].textContent = "Too many decimals!"
                return changeOutlineColor(billInput);
            } else {
                removeErrorMessage();
            }

            if ((/[^0-9.]/).test(billInput.value)) {
                errorMessage[0].style.display = "block";
                errorMessage[0].textContent = "Invalid characters!"
                return changeOutlineColor(billInput);
            }

            // Checking Number of People Input Value:
            if (numOfPeople.value === "" || numOfPeople.value == 0) {
                errorMessage[1].style.display = "block";
                errorMessage[1].textContent = "Enter a nonzero value!"
                return changeOutlineColor(numOfPeople);
            }

            if (!(countDecimals(numOfPeople.value) === 0)) {
                errorMessage[1].style.display = "block";
                errorMessage[1].textContent = "Too many decimals!"
                return changeOutlineColor(numOfPeople);
            }

            if ((/[^0-9.]/).test(numOfPeople.value)) {
                errorMessage[1].style.display = "block";
                errorMessage[1].textContent = "Invalid characters!"
                return changeOutlineColor(numOfPeople);
            }

            removeErrorMessage();

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

