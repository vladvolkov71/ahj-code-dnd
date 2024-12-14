/* eslint-disable no-unused-vars */
import { addTask, dragNDrop, getDragAfterElement } from './taskManager';
import { saveState, restoreState } from './stateManager';

document.addEventListener('DOMContentLoaded', () => {
  restoreState();
});

const columns = document.querySelectorAll('.column__item');
columns.forEach(addTask);
