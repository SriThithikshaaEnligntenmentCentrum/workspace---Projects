/* To select any element / an element with 'class' use querySelector() */
const btnElement = document.querySelector('.btn');

btnElement.addEventListener("mouseover", (event) => {
  // To get the (X,Y) of the button, subtract the offset
  // console.log(event.pageX - btnElement.offsetLeft);
 
  const x = event.pageX - btnElement.offsetLeft;
  const y = event.pageY - btnElement.offsetTop;

  // Set the values of 'top' and 'left' in CSS
  // From wherever, you click, the ripple effect starts
  btnElement.style.setProperty('--xPos', x + 'px');
  btnElement.style.setProperty('--yPos', y + 'px');

});
