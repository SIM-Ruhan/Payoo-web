 document.getElementById('add-money-btn').addEventListener('click',
    function () {
     //get bank account
     const bankAccount = getValueFromInput('add-money-bank');
     if(bankAccount == 'Pick a Bank'){
        alert('Please select a bank');
        return;
     }

     const accno = getValueFromInput('add-money-number');
     if(accno.length != 11){
  alert('Invalid Account Number');
     }
     const amount = getValueFromInput('add-money-amount');
     const newBalance = getBalance() + Number(amount);

     const pin = getValueFromInput('add-money-pin');
     if(pin === '1234'){
        alert(`Add Money Success from ${(bankAccount)}`);
        setBalance(newBalance);
        //1. get history container
        const history = document.getElementById('history-container');

        //2. create new div
        const newHistory = document.createElement('div');
        //3. new div inner html
        newHistory.innerHTML =
        ` <div class="transaction-card p-5 bg-base-100 space-y-5">
         Add Money success From ${(bankAccount)}, accno ${accno} at ${new Date()}
        </div>`

        //history container e new div append
       history.append(newHistory);
     }
     else{
        alert('Incorrect pin number');
        return;
     }
    });