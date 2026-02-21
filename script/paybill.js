document.getElementById('paybill-btn').addEventListener('click',
    function () {
     //get bank account
     const bankAccount = getValueFromInput('paybill-bank');
     if(bankAccount == 'Select Bank'){
        alert('Please select a bank');
        return;
     }

     const accno = getValueFromInput('paybill-number');
     if(accno.length != 11){
  alert('Invalid Biller Number');
     }
     const amount = getValueFromInput('paybill-amount');
     const newBalance = getBalance() - Number(amount);

     const pin = getValueFromInput('paybill-pin');
     if(pin === '1234'){
        alert(`Pay Bill Success from ${(bankAccount)}`);
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