document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawFieldElement.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldAmountString);

    withdrawFieldElement.value = '';
    if(isNaN(withdrawFieldAmount)){
        alert('Please provide a valid number'); 
        return;
    }
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousTotalWithdrawAmountString = totalWithdrawElement.innerText;
    const totalWithdrawAmount = parseFloat(previousTotalWithdrawAmountString);
    

    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceAmountString = totalBalanceElement.innerText;
    const previousTotalBalanceAmount = parseFloat(totalBalanceAmountString);

    if(withdrawFieldAmount > previousTotalBalanceAmount){
        alert('Tor baap er bank e ato taka nai!');
        return;
    }

    const currentTotalWithdrawAmount = totalWithdrawAmount + withdrawFieldAmount;
    totalWithdrawElement.innerText = currentTotalWithdrawAmount;

    const currentTotalBalanceAmount = previousTotalBalanceAmount - withdrawFieldAmount;
    
    totalBalanceElement.innerText = currentTotalBalanceAmount;
})