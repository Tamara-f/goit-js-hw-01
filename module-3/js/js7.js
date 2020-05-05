
const Transaction = {
   DEPOSIT: 'deposit', //{id ,     type,     amount}
   WITHDRAW: 'withdraw'
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount 
//  */

const account = {
   balance: 0,

   //   // История транзакций
   transactions: [],

   //   /*
   //    * Метод создает и возвращает объект транзакции.
   //    * Принимает сумму и тип транзакции.
   //    */
   createTransaction(amount, type) {
      const getId = () => Math.floor(Math.random() * 1e4).toString(16);
      const trans = { id=getId, amount, type };
      transactions.push(trans);
      return this.transactions;
   },

   //    * Принимает сумму танзакции.
   //    * Вызывает createTransaction для создания объекта транзакции
   //    * после чего добавляет его в историю транзакций

   deposit(amount) {
      createTransaction(amount, type = transition.DEPOSIT);
      balance += amount;
      return this.transactions;
   },

   //    * Метод отвечающий за снятие суммы с баланса.
   //    * Принимает сумму танзакции.
   //    * Вызывает createTransaction для создания объекта транзакции
   //    * после чего добавляет его в историю транзакций.
   //    * Если amount больше чем текущий баланс, выводи сообщение
   //    * о том, что снятие такой суммы не возможно, недостаточно средств.

   withdraw(amount) {

      createTransaction(amount, type = transition.WITHDRAW);

      if (amount > this.balance) {
         console.log('недостаточно средств')
      }
      balance -= amount;
      return this.transactions;
   },

   //    * Метод возвращает текущий баланс

   getBalance() {
      return this.balance;
   },

   //   /*
   //    * Метод ищет и возвращает объект транзации по id
   //    */
   getTransactionDetails(id) {
      for (let i = 0; i < this.transactions.length; i += 1) {
         if (this.transactions[i].id === id) {
            return transactions[i];
         }
      }
   },

   //   /*
   //    * Метод возвращает количество средств
   //    * определенного типа транзакции из всей истории транзакций
   //    */
   getTransactionTotal(type) {
      const total;
      for (let i = 0; i < this.transactions.length; i += 1) {
         if (transactions[i].type === type) {
            return total += transactions[i].amount;
         }
      }
   },
};

