

function getInputValueById(id){
    const donateInput = document.getElementById(id).value;
    const addDonateInput = parseFloat(donateInput);

    return addDonateInput;

}

function getDonateBalanceValueById(id){
    const balanceMoney = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balanceMoney);

    return balanceNumber;
}

function decreaseBalanceValueById(id){
    const decreaseMoney = document.getElementById(id).innerText;
    const balanceDecreaseMoney = parseFloat(decreaseMoney);

    return balanceDecreaseMoney;
}


