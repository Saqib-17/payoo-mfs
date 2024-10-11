// Cash in button
document.getElementById('cash-in-button').addEventListener('click',function(event){
    event.preventDefault();
    
    const addedAmount = inputFinder('amount');


    const userPin = inputFinder('user-pin');

    //checking validation
    if(isNaN(addedAmount)){
        alert('Failed to Cash Out! Please Enter a Valid Amount');
        return;
    }

    //pin verification
    if(userPin === 1234){
        const userBalance = inputTextFinder('balance');

    const newBalance = userBalance + addedAmount;
    document.getElementById('balance').innerText = newBalance;

     //Add to transaction history
    const div = document.createElement('div');
    div.classList.add('bg-green-300');
    div.innerHTML = `
     <h4 class="text-2xl font-bold">Cash In</h4>
    <p>${addedAmount} Added to your account, New Balance ${newBalance}</p>
    `
    document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to Cash In');
    }

})
