/*
  ==================================
    Progress bar (Dynamic)
  ==================================
*/


const progressBar = document.querySelector('.progress-amount');
let w = 3;



window.addEventListener('load', () => {

  setInterval(() => {
    if (w >= 80) {
      return;
    } else {
      w++;
      progressBar.style.width = w + '%';
    }
  }, 10);

});