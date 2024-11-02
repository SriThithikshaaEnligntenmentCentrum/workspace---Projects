// alert('JS File is accessed');

const bodyElement = document.querySelector('body');
// alert(`bodyElement : ${bodyElement}`);

bodyElement.addEventListener('mousemove', (event)=>{  // mousemove - Event, (event) - Function
  // console.log(event.offsetX + ', ' + event.offsetY);  // Gives the 'X' & 'Y' Coordinates of the mouse clicked position
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const newSpanElement = document.createElement('span');

  newSpanElement.style.left = xPos + 'px';  // In Span style, we've used the 'top' & 'left' position. So, here also set it
  newSpanElement.style.top = yPos + 'px';

  bodyElement.appendChild(newSpanElement);

  // To create different size of hearts
  const size = Math.random() * 100; /* Math.random() - Range is 0 to 1 - To set the range btwn 0 to 100 - multiply by 100 */

  newSpanElement.style.width = size + 'px';
  newSpanElement.style.height = size + 'px';

  // Since too many hearts, set a timeout of 3 sec to remove the hearts
  setTimeout(() => {
    newSpanElement.remove();
  }, 3000);
});