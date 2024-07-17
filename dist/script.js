let tonValue = 0.000000001;
let balance = 0;

// Load saved values from localStorage
if (localStorage.getItem('tonValue')) {
    tonValue = parseFloat(localStorage.getItem('tonValue'));
}

if (localStorage.getItem('balance')) {
    balance = parseFloat(localStorage.getItem('balance'));
}

const tonValueElement = document.getElementById('ton-value');
const balanceElement = document.getElementById('balance');

function updateTonValue() {
    tonValue += 0.000000100;
    tonValueElement.textContent = `${tonValue.toFixed(9)} TON`;
    localStorage.setItem('tonValue', tonValue);
}

setInterval(updateTonValue, 1000);

document.getElementById('claim-button').addEventListener('click', () => {
    balance += tonValue;
    balanceElement.textContent = balance.toFixed(9);
    localStorage.setItem('balance', balance);
    tonValue = 0.000000000;
    localStorage.setItem('tonValue', tonValue);
    tonValueElement.textContent = `${tonValue.toFixed(9)} TON`;
});

document.getElementById('boost-button').addEventListener('click', () => {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('boost-screen').style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('boost-screen').style.display = 'none';
  
  
  
    document.getElementById('main-screen').style.display = 'block';
});

balanceElement.textContent = balance.toFixed(9);
tonValueElement.textContent = `${tonValue.toFixed(9)} TON`;