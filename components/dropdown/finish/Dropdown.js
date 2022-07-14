class Dropdown {
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
            menu.style.top = '0';
        }
        else {
            menu.style.bottom = '0';
        }
        setTimeout(() => {
            menu.style.display = 'flex';
        }, 200);
      });
    });
    document.body.addEventListener('click', () => {
      dropdowns.forEach((item) => {
        const menu = item.querySelector('.dropdown__menu');
        setTimeout(() => {
          menu.style.display = 'none';
          menu.style.top = 'auto';
          menu.style.left = 'auto';
          menu.style.right = 'auto';
          menu.style.bottom = 'auto';
        }, 200);
      });
    });
  }
}
export default document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  new Dropdown(dropdowns);
});