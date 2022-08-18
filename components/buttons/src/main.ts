import "./styles.scss";
import "./buttons.scss";
import "./Ripples";
const app = document.querySelector<HTMLDivElement>("#app")!;
const component = `
  <button class="wk-btn">
    Default
  </button>
  <button class="wk-btn navbar">
    <ion-icon name="more"></ion-icon>
  </button>
`;
app.innerHTML = component;
