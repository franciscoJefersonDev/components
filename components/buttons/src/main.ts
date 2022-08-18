import "./styles.scss";
import "./buttons.scss";
import "./Ripples";
const app = document.querySelector<HTMLDivElement>("#app")!;
const component = `
  <button class="wk-btn ripples">
    Default
  </button>
  <button class="wk-btn navbar ripples">
    <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
  </button>
`;
app.innerHTML = component;
