document.getElementById('login-btn').addEventListener('click',
    function(){
        //1. get the mobile number
const numberInput = document.getElementById('input-number');
const contactNumber = numberInput.value;
console.log(contactNumber);

//2. get the pin number  
const pinInput = document.getElementById('input-pin');
const pin = pinInput.value;

//3. match mobile and pin number
if(contactNumber == '01881090679' && pin == '1234'){
    //3.1 true >> alert > homepage
    alert('Login Success');
    window.location.assign('home.html');
}

//3.2 false >> alert > return
else{
      alert('Login Failed');  
      return;
}
    })