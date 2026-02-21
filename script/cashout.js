//get the agent number
document.getElementById('cashout-btn').addEventListener('click',
    function(){
        const cashoutNumber = getValueFromInput('input-number');
        if(cashoutNumber.length != 11){
    alert('Invalid Agent number');
    return;}
//get the amount, validate, convert to number 
 const cashoutAmount = getValueFromInput('input-amount');
// get the current balance, validate, convert to number
const currentBalance = getBalance();
    //calculate new balance
const newBalance = currentBalance - Number(cashoutAmount);
if(newBalance < 0){
    alert('Invalid Amount');
    return;
}
//get the pin and verify
const pin= getValueFromInput('cashout-pin');

if(pin === '1234'){
   alert('Cashout Successful');
setBalance(newBalance);

//1. get history container
        const history = document.getElementById('history-container');

        //2. create new div
        const newHistory = document.createElement('div');
        //3. new div inner html
        newHistory.innerHTML =
        ` <div class="transaction-card p-5 bg-base-100 space-y-5">
         Cashout ${cashoutAmount} taka successfull to ${cashoutNumber}, at ${new Date()}
        </div>`

        //history container e new div append
       history.append(newHistory);
}
//false>> show an alert > return
else{
    alert('Invalid pin');
}
    

});



// document.getElementById('cashout-btn').addEventListener('click',
//     function(){
// //get the agent number
// const cashoutInput = document.getElementById('input-number');
// const cashoutNumber = cashoutInput.value ;

// if(cashoutNumber.length != 11){
//     alert('Invalid Agent number');
//     return;
// }

// //get the amount, validate, convert to number 
// const cashoutAmountInput = document.getElementById('input-amount');
// const cashoutAmount = cashoutAmountInput.value ;
// // get the current balance, validate, convert to number
// const balanceElement = document.getElementById('balance');
// const balance = balanceElement.innerText ;
// //calculate new balance
// const newBalance = Number(balance) - Number(cashoutAmount);
// if(newBalance < 0){
//     alert('Invalid Amount');
//     return;
// }

// //get the pin and verify      
// const cashoutPinInput = document.getElementById('cashout-pin');
// const pin= cashoutPinInput.value ;
// //true>> show an alert > set balance
// if(pin === '1234'){
//    alert('Cashout Successful');
//    balanceElement.innerText = newBalance;
// }
// //false>> show an alert > return
// else{
//     alert('Invalid pin');
// }
//     });
