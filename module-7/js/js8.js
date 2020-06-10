//-document.querySelector------------------------
const renBtn = document.querySelector('button[data-action="render"]');
const desBtn = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('#controls input');
const outputRef = document.querySelector('#boxes');

//random-------
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//FUNCTION for amount-------
input.addEventListener('change', event => {
  const newValue = event.target.value;
  return createBoxes(newValue);
});

const createBoxes = function (amount) {
  const repeatStr = function (str, amount) {
    let new_str = '';
    while (amount-- > 0) new_str += str;
    return new_str;
  };
  //FUNCTION for div string-------
  outputRef.insertAdjacentHTML(
    'afterbegin',
    repeatStr('<div class="box"></div>', amount)
  );
  //FUNCTION for box style-------
  renBtn.addEventListener('click', () => {
    outputRef.style.display = 'flex';
    const box = document.querySelectorAll('.box');
    let size = 30;
    box.forEach(elem => {
      size = size + 10;
      elem.style.width = `${size}px`;
      elem.style.height = `${size}px`;
      elem.style.background = `rgb(
            ${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(
        0,
        255
      )},${getRandomIntInclusive(0, 255)}`;
    });
  });
};
//FUNCTION for box reset-------
desBtn.addEventListener('click', () => {
  outputRef.textContent = '';
});
