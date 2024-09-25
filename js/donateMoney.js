

document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    
    const donateInput = getInputValueById('donate-input');
    document.getElementById('donate-input').value = '';
    const balanceMoney = getDonateBalanceValueById('balance-money')

    if(donateInput <= 0 || isNaN(donateInput)){
        alert("Please donate valid amount.");
        return;
    }

    const div = document.createElement('div')
    div.classList.add('mb-4')
    div.classList.add('w-11/12', 'space-y-2', 'mx-auto', 'p-2', 'card-border', 'rounded-xl');
    div.innerHTML = `
    <h3 class="text-xl text-start font-semibold">${donateInput} Taka is Donate for Flood at Noakhali, Bangladesh
    </h3>
    <h3 class="font-light mb-2">Date: ${new Date().toString()}
    </h3>
    
    `;

    document.getElementById('transection-section').appendChild(div);

    // Decrease money

    const balanceDecreaseMoney = decreaseBalanceValueById('decrease-money');
    
    if((donateInput > balanceDecreaseMoney)){
        alert("Sorry, You don't have enough balance.")
        return;
    }

    const newBalance = donateInput + balanceMoney;
    const newDecreaseMoney = balanceDecreaseMoney - donateInput;
    
    document.getElementById('balance-money').innerText = newBalance;
    document.getElementById('decrease-money').innerText = newDecreaseMoney;

    // Modal
    document.getElementById('my_modal_1').showModal();
})