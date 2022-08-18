import './styles.scss';
import './Ripples';
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button class="wk-btn ripples">
    <ion-icon name="add"></ion-icon>
  </button>
`