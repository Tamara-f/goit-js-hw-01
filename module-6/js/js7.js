import users from '../js/users.js'; // eslint-disable-line

const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
