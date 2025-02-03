// script.js

// Function to save transactions to localStorage
function saveTransaction(transaction) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Function to load transactions from localStorage
function loadTransactions() {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    let tbody = document.querySelector('#transactionTable tbody');
    tbody.innerHTML = ''; // Clear existing rows

    transactions.forEach(transaction => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.type}</td>
        `;
        tbody.appendChild(row);
    });
}

// Handle form submission
document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let date = document.getElementById('date').value;
    let description = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;
    let type = document.getElementById('type').value;

    let transaction = {
        date: date,
        description: description,
        amount: amount,
        type: type
    };

    saveTransaction(transaction);
    alert('Transaction added successfully!');
    document.getElementById('transactionForm').reset();
});

// Load transactions when the transactions page is loaded
if (window.location.pathname.endsWith('transactions.html')) {
    loadTransactions();
}
