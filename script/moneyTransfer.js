 //get the agent number
document.getElementById('money-transfer-btn').addEventListener('click',
    function(){
        const cashoutNumber = getValueFromInput('money-transfer-number');
        if(cashoutNumber.length != 11){
    alert('Invalid Agent number');
    return;}
//get the amount, validate, convert to number 
 const cashoutAmount = getValueFromInput('money-transfer-amount');
// get the current balance, validate, convert to number
const currentBalance = getBalance();
    //calculate new balance
const newBalance = currentBalance - Number(cashoutAmount);
if(newBalance < 0){
    alert('Invalid Amount');
    return;
}
//get the pin and verify
const pin= getValueFromInput('money-transfer-pin');

if(pin === '1234'){
   alert('Money Transfer Successful');
setBalance(newBalance);

//1. get history container
        const history = document.getElementById('history-container');

        //2. create new div
        const newHistory = document.createElement('div');
        //3. new div inner html
        newHistory.innerHTML =
        ` <div class="transaction-card p-5 bg-base-100 space-y-5">
         ${cashoutAmount} taka successfully transferred to ${cashoutNumber}, at ${new Date()}
        </div>`

        //history container e new div append
       history.append(newHistory);
}
//false>> show an alert > return
else{
    alert('Invalid pin');
}
    

});