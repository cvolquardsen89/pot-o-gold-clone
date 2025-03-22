document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spin');
    const balanceDisplay = document.getElementById('balance');
    const reels = document.querySelectorAll('.reel');
    let balance = 100;

    spinButton.addEventListener('click', spin);

    function spin() {
        if (balance >= 10) {
            balance -= 10;
            balanceDisplay.textContent = `Balance: $${balance}`;
            reels.forEach(reel => {
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