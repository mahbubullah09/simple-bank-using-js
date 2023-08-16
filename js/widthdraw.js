const btnWidthdraw = document.getElementById('btn-widthdraw');
btnWidthdraw.addEventListener('click', function () {

    const widthdrawField = document.getElementById('widthdraw-field');
    const widthdrawValue = widthdrawField.value;

    if(widthdrawField.value=='')
{
    alert("Nothing in input");
}  
else{
    const newAmount = parseFloat(widthdrawValue);
   


    //add widthdraw section

    const widthdrawSrting = document.getElementById('totalWidthdraw').innerText;
    const oldAmount = parseFloat(widthdrawSrting);
    const tolatAmount = oldAmount + newAmount;
    

    

    //reduce from balance

const balanceString=document.getElementById('totalBalance').innerText;
const oldBalance= parseFloat(balanceString);
const newBalance= oldBalance - newAmount;

if(newBalance<0 ){
    alert("Insufficient balance")
}
else{
    document.getElementById('totalWidthdraw').innerText = tolatAmount;
document.getElementById('totalBalance').innerText= newBalance;


}





    //emt field

    widthdrawField.value = '';
}


})