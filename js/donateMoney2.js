document.getElementById('donate-btn-two').addEventListener('click', function(event){
    event.preventDefault();

    const donateInputTwo = getInputValueById('donate-input-two')
    
    const donateMoneyTwo = getDonateBalanceValueById('balance-money-two')

    if(donateInputTwo <= 0 || isNaN(donateInputTwo)){
        alert('please donate valid amount');
        return;
    }

    const newBalanceTwo = donateInputTwo + donateMoneyTwo;
    document.getElementById('balance-money-two').innerText = newBalanceTwo;

    const div = document.createElement('div')
    div.classList.add('mb-4')
    div.classList.add('w-11/12', 'space-y-2', 'mx-auto', 'card-border', 'rounded-xl');
    div.innerHTML = `
    <h3 class="pl-3 text-xl text-start font-semibold">${donateInputTwo} Taka Donate for Flood Relief in Feni,Bangladesh
    </h3>
    <h3 class="pl-3 font-light mb-2">${new Date().toLocaleDateString()}
    </h3>
    
    `;

    document.getElementById('transection-section').appendChild(div);

    // Decrease 

    const decreaseMoneyTwo = decreaseBalanceValueById('decrease-money');

    const newDecreaseMoneyTwo = decreaseMoneyTwo - donateInputTwo;
    document.getElementById('decrease-money').innerText = newDecreaseMoneyTwo;

    // Modal
    document.getElementById('my_modal_1').showModal();
})