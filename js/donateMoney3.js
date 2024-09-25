document.getElementById('donate-btn-three').addEventListener('click', function(event){
    event.preventDefault();

    console.log('click');

    const donateInputThree = getInputValueById('donate-input-three');
    console.log(donateInputThree);

    const donateMoneyThree = getDonateBalanceValueById('balance-money-three');
    console.log(donateMoneyThree);

    if(donateInputThree <= 0 || isNaN(donateInputThree)){
        alert('please donate valid amount');
        return;
    }

    const newBalanceThree = donateInputThree + donateMoneyThree;

    document.getElementById('balance-money-three').innerText = newBalanceThree;

    const div = document.createElement('div')
    div.classList.add('mb-4')
    div.classList.add('w-11/12', 'space-y-2', 'p-2', 'mx-auto', 'card-border', 'rounded-xl');
    div.innerHTML = `
    <h3 class="text-xl text-start font-semibold">${donateInputThree} Taka Donate for Aid for Injured in the Quota Movement
    </h3>
    <h3 class="font-light mb-2">Date: ${new Date().toString()}
    </h3>
    
    `;

    document.getElementById('transection-section').appendChild(div);

    // Decrease money

    const decreaseMoneyThree = decreaseBalanceValueById('decrease-money');
    

    const newDecreaseMoneyThree = decreaseMoneyThree - donateInputThree;
    

    document.getElementById('decrease-money').innerHTML = newDecreaseMoneyThree;

    document.getElementById('donate-input-three').value = '';

    // Modal
    document.getElementById('my_modal_1').showModal();
})