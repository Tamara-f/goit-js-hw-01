import users from '../js/users.js'; // eslint-disable-line

const getUsersWithFriend = (users, friendName) => {
  const friendNames = users.filter((user) => user.friends.includes(friendName));
  return friendNames.map((user) => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
