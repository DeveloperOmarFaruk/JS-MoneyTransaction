// Withdraw Functionality

// Handel deposit button event
document
  .getElementById("input-deposit-btn")
  .addEventListener("click", function () {
    // Get the amount deposited
    const inputDeposit = document.getElementById("input-deposit");
    const newDepositAmount = parseFloat(inputDeposit.value);
    inputDeposit.value = "";

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // Update balance total
    const blanceTotal = document.getElementById("blance-total-amount");
    const previousBlanceAmount = parseFloat(blanceTotal.innerText);
    const newBlanceAmount = previousBlanceAmount + newDepositAmount;
    blanceTotal.innerText = newBlanceAmount;
  });

// Handel withdraw button event
document
  .getElementById("input-withdraw-btn")
  .addEventListener("click", function () {
    // Get the withdraw amount
    const withdrawInput = document.getElementById("input-withdraw");
    const newWithdrawAmmount = parseFloat(withdrawInput.value);
    withdrawInput.value = "";

    const withdrawBlance = document.getElementById("withdraw-total");
    const previousWithdrawAmount = parseFloat(withdrawBlance.innerText);
    const newWithdrawTotalAmount = previousWithdrawAmount + newWithdrawAmmount;
    withdrawBlance.innerText = newWithdrawTotalAmount;

    // Update balance total
    const blanceTotal = document.getElementById("blance-total-amount");
    const previousBlanceAmount = parseFloat(blanceTotal.innerText);
    const newBlanceAmount = previousBlanceAmount - newWithdrawAmmount;
    blanceTotal.innerText = newBlanceAmount;
  });
