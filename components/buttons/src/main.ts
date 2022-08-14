import "./styles.scss";
import "./buttons.scss";
const app = document.querySelector<HTMLDivElement>("#app")!;
const component = `
  <h5>.wk-btn</h5>
  <button class="wk-btn">
  Default
  </button>
  <h5>.wk-btn .navbar</h5>
  <button class="wk-btn navbar">
    <ion-icon name="more"></ion-icon>
  </button>
`;
app.innerHTML = component;
