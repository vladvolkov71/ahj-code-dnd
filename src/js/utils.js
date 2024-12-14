// eslint-disable-next-line import/prefer-default-export
export function createNewItem(value) {
  const newItem = document.createElement('div');
  newItem.classList.add('list__item');
  newItem.draggable = true;

  const textSpan = document.createElement('span');
  textSpan.textContent = value;
  newItem.appendChild(textSpan);

  const deleteImg = document.createElement('img');
  deleteImg.classList.add('delete__item-btn');
  deleteImg.src = './svg/X.svg';
  deleteImg.alt = 'Delete';
  newItem.appendChild(deleteImg);

  return newItem;
}
