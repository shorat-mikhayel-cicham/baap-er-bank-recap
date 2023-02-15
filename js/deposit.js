document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldAmountString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldAmountString);


    depositField.value = '';


    if(isNaN(depositFieldAmount)){
        alert('Please provide a valid number');
        return;
    }

    const totalDeposit = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDeposit.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    const currentTotalDeposit = previousTotalDeposit + depositFieldAmount;
    totalDeposit.innerText = currentTotalDeposit;

    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceAmountString = totalBalanceElement.innerText;
    const previousTotalBalanceAmount = parseFloat(totalBalanceAmountString);
    const currentTotalBalanceAmount = previousTotalBalanceAmount + depositFieldAmount;
    totalBalanceElement.innerText = currentTotalBalanceAmount;


    depositField.value = '';
})