import users from '../js/users.js'; // eslint-disable-line

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
