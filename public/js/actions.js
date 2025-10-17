// public/js/actions.js
window.addEventListener('DOMContentLoaded', () => {
  const sideMenu = document.querySelector('.side-menu');
  const openBtn = document.getElementById('open-side-menu');
  const closeBtn = document.getElementById('close-side-menu');

  openBtn.addEventListener('click', () => {
    sideMenu.classList.add('show');
    // document.body.classList.add('move-side'); 
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    // document.body.classList.remove('move-side');
  });

  
  document.addEventListener('click', (e) => {
    if (
      sideMenu.classList.contains('show') &&
      !sideMenu.contains(e.target) &&
      e.target !== openBtn
    ) {
      sideMenu.classList.remove('show');
    //   document.body.classList.remove('move-side');
    }
  });
});
