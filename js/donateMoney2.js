document.getElementById('donate-btn-two').addEventListener('click', function(event){
    event.preventDefault();

    const donateInputTwo = getInputValueById('donate-input-two')
    document.getElementById('donate-input-two').value = '';
    
    const donateMoneyTwo = getDonateBalanceValueById('balance-money-two')

    if(donateInputTwo <= 0 || isNaN(donateInputTwo)){
        alert("Please donate valid amount.");
        return;
    }

    const div = document.createElement('div')
    div.classList.add('mb-4')
    div.classList.add('w-11/12', 'space-y-2', 'mx-auto', 'p-2', 'card-border', 'rounded-xl');
    div.innerHTML = `
    <h3 class="text-xl text-start font-semibold">${donateInputTwo} Taka is Donate for Flood Relief in Feni,Bangladesh
    </h3>
    <h3 class="font-light mb-2">Date: ${new Date().toString()}
    </h3>
    
    `;

    document.getElementById('transection-section').appendChild(div);

    // Decrease money

    const decreaseMoneyTwo = decreaseBalanceValueById('decrease-money');

    if((donateInputTwo > decreaseMoneyTwo)){
        alert("Sorry, You don't have enough balance.")
        return;
    }

    const newBalanceTwo = donateInputTwo + donateMoneyTwo;

    const newDecreaseMoneyTwo = decreaseMoneyTwo - donateInputTwo;

    document.getElementById('balance-money-two').innerText = newBalanceTwo;
    document.getElementById('decrease-money').innerText = newDecreaseMoneyTwo;

    // Modal
    document.getElementById('my_modal_1').showModal();
})