// Variables declaration
const prompt = require("prompt-sync")();

// 1. Deposit some money function
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the amount you wish to deposit: ")
        const numberDepositAmout = parseFloat(depositAmount);

        if (isNaN(numberDepositAmout) || numberDepositAmout <= 0) {
            console.log("Invalid deposit amount!!! Kindly try again.")
        } else {
            return numberDepositAmout;
        }
    };
};

const yes = deposit();
console.log(yes)