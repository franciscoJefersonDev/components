const body = document.body;
export default class {
  constructor(dropdowns) {
    dropdowns.forEach((item) => {
      const activator = item.querySelector('.dropdown__button');
      activator.addEventListener('click', (event) => {
        event.stopPropagation();
        const widthScreen = window.innerWidth;
        const heightScreen = window.innerHeight;
        const targetData = event.target.getBoundingClientRect();
        const percentageWidthScreen = (targetData.x * 100) / widthScreen;
        const percentageHeightScreen = (targetData.y * 100) / heightScreen;
        const menu = item.querySelector('.dropdown__menu');
        if (percentageWidthScreen <= 50) {
          menu.style.left = '0';
        }
        else {
          menu.style.right = '0';
        }
        if (percentageHeightScreen <= 50) {
          menu.style.bottom = '0';
        }
        else {
          menu.style.top = '0';
        }
        menu.style.display = 'flex';
      });
    });
    body.addEventListener('click', () => {
      dropdowns.forEach((item) => {
        const menu = item.querySelector('.dropdown__menu');
        menu.style.display = 'none';
      });
    });
  }
}