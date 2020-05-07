
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};


const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        const trans = {
            id: this.transactions.length,
            type,
            amount,
        }
        return trans;
    },

    deposit(amount) {
        this.transactions.push(createTransaction(amount, Transaction.DEPOSIT));
    },


    withdraw(amount) {
        if (amount <= this.balance) {
            this.transactions.push(createTransaction(amount, Transaction.WITHDRAW));
        }
        console.log('снятие такой суммы не возможно, недостаточно средств');
    },


    getBalance() {
        return this.balance;
    },



    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].id === id) {
                return transactions[i];
            }
        }
    },


    getTransactionTotal(type) {
        const total;
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (transactions[i].type === type) {
                total += transactions[i].amount;
            }
        } return total;
    },
};

