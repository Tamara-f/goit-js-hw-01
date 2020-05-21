import users from '../js/users.js'; // eslint-disable-line

const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
