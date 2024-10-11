// Cash out button
document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault();

    const removeAmount = inputFinder('cash-out-amount');


    const userPin = inputFinder('cash-out-user-pin');

    //checking validation
    if(isNaN(removeAmount)){
        alert('Failed to Cash Out! Please Enter a Valid Amount');
        return;
    }

    //pin verification
    if(userPin === 1234){
        const userBalance = inputTextFinder('balance');
    const newBalance = userBalance - removeAmount;
    document.getElementById('balance').innerText = newBalance;

     //Add to transaction history
     const div = document.createElement('div');
     div.classList.add('bg-yellow-300');
     div.innerHTML = `
      <h4 class="text-2xl font-bold">Cash Out</h4>
     <p>${removeAmount} Withdrawn from your account, New Balance ${newBalance}</p>
     `
     document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('Failed to Cash Out');
    }


});