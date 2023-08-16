const btnDeposit = document.getElementById('btn-deposit');

btnDeposit.addEventListener('click', function () {


  // console.log("cliked")
  const depositField = document.getElementById('deposit');
  const dpAmntSrring = depositField.value;
  if(dpAmntSrring== ''){
    alert("Nothing in input");
  }
  else{



  const newDepositAmount = parseFloat(dpAmntSrring);


  const depositSrting = document.getElementById('totalDeposit').innerText;
  const depositAmount = parseFloat(depositSrting);
  const totalWidthdrawAmount = depositAmount + newDepositAmount;
  document.getElementById('totalDeposit').innerText = totalWidthdrawAmount;





  //   get total balance

  const balanceText = document.getElementById('totalBalance');
  const balanceString = balanceText.innerText;
  const oldBalance = parseFloat(balanceString);
  const newBalance = oldBalance + newDepositAmount;
  balanceText.innerText = newBalance;
  console.log(newBalance)

  // clear deposit field
  depositField.value = '';
  }
})