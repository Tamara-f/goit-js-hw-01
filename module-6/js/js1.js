import users from '../js/users.js'; // eslint-disable-line

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
