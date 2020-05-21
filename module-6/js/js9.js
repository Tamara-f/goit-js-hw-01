import users from '../js/users.js'; // eslint-disable-line

const getNamesSortedByFriendsCount = (users) => {
  const usersSorted = (a, b) => a.friends.length - b.friends.length;

  return users.sort(usersSorted).map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
