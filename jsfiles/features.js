
//input value function
function inputFinder(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}
//text value function
function inputTextFinder(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

//show section function
function showSection(id){
    document.getElementById('cash-in-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}