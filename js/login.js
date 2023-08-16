const buttonClick= document.getElementById("btn");

buttonClick.addEventListener('click', function(){
    
const emailInput= document.getElementById('email');
const Email=emailInput.value;


const passInput= document.getElementById('pass');
const Pass=passInput.value;


if(Email=="mahbubullahpathan@gmail.com" && Pass==1234 ){
    window.location.href= 'bank.html'
}
else{
    alert("Email or Password is wrong");
}

})
