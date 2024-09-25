

document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    // if(isNaN(donateInput) || (donateInput > balanceDecreaseMoney) || donateInput <= 0 ){
    //     alert('please donate valid amount');
    //     return;
    // }
    
    const donateInput = getInputValueById('donate-input');
    const balanceMoney = getDonateBalanceValueById('balance-money')
    

    // if(isNaN(donateInput)){
    //     alert('please donate valid amount');
    //     return;
    // }
    

    if(donateInput <= 0 || isNaN(donateInput)){
        alert('please donate valid amount');
        return;
    }
    
    
    const newBalance = donateInput + balanceMoney;
    document.getElementById('balance-money').innerText = newBalance;

    const div = document.createElement('div')
    div.classList.add('mb-4')
    div.classList.add('w-11/12', 'space-y-2', 'mx-auto', 'p-2', 'card-border', 'rounded-xl');
    div.innerHTML = `
    <h3 class="text-xl text-start font-semibold">${donateInput} Taka is Donated for famine-2024 at Feni, Bangladesh
    </h3>
    <h3 class="font-light mb-2">Date: ${new Date().toString()}
    </h3>
    
    `;

    document.getElementById('transection-section').appendChild(div);

    // Decrease money

    const balanceDecreaseMoney = decreaseBalanceValueById('decrease-money');
    

    if(balanceDecreaseMoney < donateInput){
        alert('try');
        return;
        console.log('tri it')
    }

    const newDecreaseMoney = balanceDecreaseMoney - donateInput;
    document.getElementById('decrease-money').innerText = newDecreaseMoney;

    document.getElementById('donate-input').value = '';

    // Modal
    document.getElementById('my_modal_1').showModal();
})