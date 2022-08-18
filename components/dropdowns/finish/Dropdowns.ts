class Dropdown {
  constructor(dropdowns: HTMLDivElement[], transiton: number) {
    dropdowns.forEach((item: HTMLDivElement) => {
      const activator = item.querySelector<HTMLButtonElement>(
        ".wk-dropdown__active-button"
      )!;
      activator.addEventListener("click", (event: any) => {
        event.stopPropagation();
        const widthScreen: number = window.innerWidth;
        const heightScreen: number = window.innerHeight;
        const targetData: any = event.target.getBoundingClientRect();
        const percentageWidthScreen = (targetData.x * 100) / widthScreen;
        const percentageHeightScreen = (targetData.y * 100) / heightScreen;
        const menu =
          item.querySelector<HTMLUListElement>(".wk-dropdown__menu")!;
        if (percentageWidthScreen <= 50) {
          menu.style.left = "0";
        } else {
          menu.style.right = "0";
        }
        if (percentageHeightScreen <= 50) {
          menu.style.top = "0";
        } else {
          menu.style.bottom = "0";
        }
        setTimeout(() => {
          menu.style.visibility = "visible";
          menu.animate(
            [
              {
                opacity: "0",
              },
              {
                opacity: "1",
              },
            ],
            {
              duration: transiton,
              fill: "forwards",
            }
          );
        }, transiton);
      });
    });
    document.body.addEventListener("click", () => {
      dropdowns.forEach((item: HTMLDivElement) => {
        const menu =
          item.querySelector<HTMLUListElement>(".wk-dropdown__menu")!;
        menu.animate(
          [
            {
              opacity: "1",
            },
            {
              opacity: "0",
            },
          ],
          {
            duration: transiton,
            fill: "forwards",
          }
        );
        setTimeout(() => {
          menu.style.visibility = "collapse";
          menu.style.top = "auto";
          menu.style.left = "auto";
          menu.style.right = "auto";
          menu.style.bottom = "auto";
        }, transiton);
      });
    });
  }
}
export default document.addEventListener("DOMContentLoaded", () => {
  const dropdowns: any =
    document.querySelectorAll<HTMLDivElement>(".wk-dropdown");
  new Dropdown(dropdowns, 200);
});

const AddManualDropdowns = (dropdowns: HTMLDivElement[], transition: number) => {
  new Dropdown(dropdowns, transition);
};

export {
  AddManualDropdowns,
};