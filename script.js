document.addEventListener('DOMContentLoaded', function() {
    alert('JavaScript is running!');
    console.log('JavaScript is running!');
    const spinButton = document.getElementById('spin');
    console.log('spinButton', spinButton);
    const balanceDisplay = document.getElementById('balance');
    const reels = document.querySelectorAll('.reel');
    console.log('balanceDisplay', balanceDisplay);
    console.log('reels', reels);
    let balance = 100;

    spinButton.addEventListener('click', spin);

    function spin() {
        console.log('spin function called');
        if (balance >= 10) {
            console.log('balance is greater than or equal to 10');
            balance -= 10;
            balanceDisplay.textContent = `Balance: $${balance}`;
            reels.forEach(reel => {
                console.log('reel', reel);
                const symbols = ['🍀', '💰', '🌈'];
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                reel.textContent = randomSymbol;
            });

            // Check for win
            if (reels[0].textContent === reels[1].textContent && reels[1].textContent === reels[2].textContent) {
                balance += 50;
                balanceDisplay.textContent = `Balance: $${balance}`;
            }
        } else {
            alert('Not enough balance!');
        }
    }
});