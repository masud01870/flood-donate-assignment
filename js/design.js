const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");

historyButton.addEventListener('click', function(){
    historyButton.classList.add("btn", "bg-color", "text-blacker", "px-6", "text-xl", "font-semibold");

    donationButton.classList.remove("btn", "bg-color", "text-blacker", "px-6", "text-2xl", "font-semibold");

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transection-section').classList.remove('hidden');
    
})

donationButton.addEventListener('click', function(){
    donationButton.classList.add("btn", "bg-color", "text-blacker", "px-6", "text-xl", "font-semibold");

    historyButton.classList.remove("btn", "bg-color", "text-blacker", "px-6", "text-2xl", "font-semibold");

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('transection-section').classList.add('hidden');

})
