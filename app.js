// const clicMenu = document.querySelector("li.item");
// const menu = document.querySelector('.line');
//     clicMenu.addEventListener('click', () => {
//         menu.classList.toggle('active')
//     })


const menuParent = document.querySelectorAll('.liste-nav li.item');
const menuItems = document.querySelectorAll('.line');

menuParent.forEach((parent, index) => {
  let menuState = false;

  parent.addEventListener('click', () => {
    if (!menuState) {
      menuItems[index].classList.add('active');
      menuState = true;
    } else {
      menuItems[index].classList.remove('active');
      menuState = false;
    }
  });
});
