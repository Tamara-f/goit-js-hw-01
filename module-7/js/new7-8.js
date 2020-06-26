const inputRef = document.querySelector('#controls input');
let boxAmount = inputRef.value;
inputRef.addEventListener('input', () => {
  boxAmount = inputRef.value;
  console.log(boxAmount);
});

const magic = () => createBoxes(boxAmount);
const boxRef = document.querySelector('#boxes');
const createBoxes = (amount) => {
  console.log(amount + ' Boxes!');
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    let boxItem = document.createElement('div');
    boxItem.style.width = size + 'px';
    boxItem.style.height = size + 'px';
    boxItem.style.background =
      'rgb(' +
      Math.random() * 255 +
      ',' +
      Math.random() * 255 +
      ',' +
      Math.random() * 255 +
      ')';
    boxRef.appendChild(boxItem);
    boxes.push(boxItem);
    size += 10;
  }
  console.dir(boxes);
  boxRef.insertAdjacentElement('afterbegin', ...boxes);
};

const buttonCreateRef = document.querySelector('button[data-action="render"]');
buttonCreateRef.addEventListener('click', magic);
//если вызывать сразу createBoxes то это так не работает

const destroyBoxes = () => (boxRef.innerHTML = '');
const buttonClearRef = document.querySelector('button[data-action="destroy"]');
buttonClearRef.addEventListener('click', destroyBoxes);

